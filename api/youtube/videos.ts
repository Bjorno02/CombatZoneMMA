import type { VercelRequest, VercelResponse } from "@vercel/node";

// Simple rate limiting
const requests = new Map<string, number[]>();
const RATE_LIMIT = { windowMs: 60 * 1000, max: 10 }; // 10 per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;

  const reqs = requests.get(ip) || [];
  const recentReqs = reqs.filter((time) => time > windowStart);

  if (recentReqs.length >= RATE_LIMIT.max) {
    return true;
  }

  recentReqs.push(now);
  requests.set(ip, recentReqs);
  return false;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limiting
  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0] || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many video requests, please try again shortly." });
  }

  try {
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      return res.json({
        videos: [],
        message: "YouTube API not configured - visit channel directly",
      });
    }

    // Get channel ID from handle
    const channelHandle = "CombatZoneMMA";
    let channelId = process.env.YOUTUBE_CHANNEL_ID;

    if (!channelId) {
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${encodeURIComponent(channelHandle)}&key=${encodeURIComponent(apiKey)}`
      );

      if (channelResponse.ok) {
        const channelData = (await channelResponse.json()) as { items?: Array<{ id: string }> };
        channelId = channelData.items?.[0]?.id;
      }
    }

    if (!channelId) {
      return res.json({ videos: [], message: "Channel not found" });
    }

    // Fetch videos
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${encodeURIComponent(channelId)}&order=date&type=video&maxResults=12&key=${encodeURIComponent(apiKey)}`
    );

    if (!videosResponse.ok) {
      const errorData = (await videosResponse.json()) as { error?: { message?: string } };
      throw new Error(
        errorData.error?.message || `YouTube API error: ${videosResponse.statusText}`
      );
    }

    interface YouTubeResponse {
      items?: Array<{
        id: { videoId: string };
        snippet: {
          title: string;
          thumbnails: {
            medium?: { url: string };
            high?: { url: string };
            default: { url: string };
          };
          publishedAt: string;
          description: string;
        };
      }>;
    }

    const videosData = (await videosResponse.json()) as YouTubeResponse;

    // Transform and filter out shorts
    const allVideos = (videosData.items ?? []).map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail:
        item.snippet.thumbnails.high?.url ??
        item.snippet.thumbnails.medium?.url ??
        item.snippet.thumbnails.default.url,
      publishedAt: item.snippet.publishedAt,
      description: item.snippet.description,
    }));

    const videos = allVideos
      .filter((video) => {
        const titleLower = video.title.toLowerCase();
        return !titleLower.includes("#shorts") && !titleLower.includes("#short");
      })
      .slice(0, 6);

    return res.json({ videos });
  } catch (error) {
    console.error("[YOUTUBE] Error:", error);
    return res.status(500).json({ error: "Failed to fetch videos" });
  }
}
