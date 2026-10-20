import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Sparkles,
  ChevronsDown,
  Mail,
  AlertCircle,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { VIP_INQUIRY_EMAIL } from "@/lib/constants";

const VIP_PACKAGES = {
  risingStar: { name: "Rising Star Package" },
  elite: { name: "Elite Level Package" },
};

const SHARED_FEATURES = [
  "Official CZ event ticket",
  "In-Venue Hospitality with UFC athlete appearances",
  "Cash Bar & Food Buffet sponsored by Alltown Fresh",
  "14 x 10 event poster signed by fighters on the card",
  "Dedicated VIP Entrance to SNHU Arena",
];

const VIP_IMAGES = [
  "/images/VIP9.jpg",
  "/images/VIP7.jpg",
  "/images/VIP8.jpg",
  "/images/VIP1.jpg",
  "/images/VIP2.jpg",
  "/images/VIP3.jpg",
  "/images/VIP4.jpg",
  "/images/VIP5.jpg",
  "/images/VIP6.jpg",
];

const FAQS = [
  {
    question: "Can I purchase tickets over the phone?",
    answer:
      "No. Fill out the form on this page or email jmsnkattar@czmma.com and we'll set you up.",
  },
  {
    question: "Do the packages have a minimum age requirement?",
    answer:
      "There is typically no age requirement to attend the event and our hospitality. However, you will need an ID to check in at the event.",
  },
  {
    question: "Can I choose my seat?",
    answer:
      "You can request a certain section and row if available on the seating chart. However, the exact seat number is not confirmed until tickets are in your possession.",
  },
  {
    question: "How & when will I receive my tickets?",
    answer:
      "Tickets will be available for pick up at the VIP table along with your credentials the night of the event. An informational email will also be sent explaining details 24 hours prior to event as well.",
  },
  {
    question: "Can I purchase the VIP upgrade if I've already purchased a ticket to the event?",
    answer:
      "Yes, if you already have an event ticket purchased and would like to upgrade to a VIP package please email jmsnkattar@czmma.com and someone will be happy to assist you.",
  },
  {
    question: "What time does hospitality open and how long does it last?",
    answer:
      "Hospitality starts when doors open for the event. The food usually lasts till about the start of the main card. Typically for about 3 or so hours. A private cash bar is available throughout the entirety of the event.",
  },
  {
    question: "Is VIP parking included?",
    answer:
      "Parking is not included in these packages however, there is parking available around the venue. Please refer to the venue's website for more information regarding parking here.",
  },
  {
    question: "What if I change my mind and don't want my package?",
    answer: "All packages are non-refundable and cannot be returned once purchased.",
  },
];

const PACKAGE_OPTIONS = [
  { value: "", label: "Not sure yet" },
  { value: VIP_PACKAGES.risingStar.name, label: VIP_PACKAGES.risingStar.name },
  { value: VIP_PACKAGES.elite.name, label: VIP_PACKAGES.elite.name },
];

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  phone: z.string().max(30, "Phone number is too long").optional().or(z.literal("")),
  package: z.string().optional(),
  message: z.string().max(2000, "Message is too long").optional().or(z.literal("")),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export default function VIPPage() {
  useSEO(SEO_CONFIG.vip);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", phone: "", package: "", message: "" },
  });

  const onInquirySubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError(null);

    try {
      const response = await fetch("/api/vip-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("Too many submissions. Please try again later.");
        }
        if (result.details) {
          throw new Error(result.details.map((d: { message: string }) => d.message).join(", "));
        }
        throw new Error(result.error || "Failed to send your inquiry");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("VIP inquiry error:", error);
      setSubmitStatus("error");
      setSubmitError(error instanceof Error ? error.message : null);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Start playback once the panel has mostly unfolded;
  // reset when folded back up so it starts from the top next time.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (videoOpen) {
      const timer = window.setTimeout(() => {
        video.play().catch(() => {});
      }, 400);
      return () => window.clearTimeout(timer);
    }
    video.pause();
    video.currentTime = 0;
    return undefined;
  }, [videoOpen]);

  return (
    <PageLayout>
      <SectionHero
        label="Premium Access"
        title="VIP EXPERIENCE"
        highlightWord="EXPERIENCE"
        description="Secure the ultimate VIP access to our live events. From the all-inclusive hospitality lounge to exclusive photo opportunities with UFC athletes."
      />

      {/* VIP Inquiry Form */}
      <section
        id="vip-inquiry"
        className="scroll-mt-20 py-16 md:py-24 bg-neutral-50 relative overflow-hidden"
      >
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-neutral-200/50 to-transparent" />

        <Container className="relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-24 bg-neutral-300" />
            <div className="bg-primary text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              VIP Packages
            </div>
            <div className="h-px flex-1 max-w-24 bg-neutral-300" />
          </div>

          {/* Limited Availability Badge - Premium Style */}
          <div className="flex flex-col items-center gap-3 mb-12">
            <div className="inline-flex items-center gap-3 bg-neutral-900 px-6 py-3 border border-neutral-700">
              <Sparkles className="text-primary" size={18} />
              <span className="text-white font-bold uppercase tracking-[0.15em] text-sm">
                Limited Availability
              </span>
              <Sparkles className="text-primary" size={18} />
            </div>
            <p className="text-sm text-neutral-500">*Must purchase main event ticket first</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Copy */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm mb-6">
                <Mail size={16} className="text-primary" />
                VIP Packages
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase text-neutral-900 mb-4">
                Want to go <span className="text-primary">VIP?</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Shoot us your info and we&apos;ll get back to you to set up your package. Let us
                know if you have a group, want a certain section, or already have a ticket and want
                to upgrade.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We reply by email, usually within a day or two.
              </p>
              <div className="border-l-4 border-primary bg-white border-y border-r border-neutral-200 p-4">
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Or just email us
                </div>
                <a
                  href={`mailto:${VIP_INQUIRY_EMAIL}`}
                  className="font-bold text-neutral-900 hover:text-primary transition-colors break-all"
                >
                  {VIP_INQUIRY_EMAIL}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-neutral-200 shadow-xl p-6 md:p-8">
              {submitStatus === "success" && (
                <div
                  role="status"
                  className="mb-6 flex items-start gap-3 border border-green-200 bg-green-50 p-4"
                >
                  <CheckCircle className="mt-0.5 shrink-0 text-green-600" size={20} />
                  <div>
                    <p className="font-bold text-green-800">Got it.</p>
                    <p className="text-sm text-green-700">
                      Thanks. We&apos;ll be in touch soon about your package.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="mb-6 flex items-start gap-3 border border-red-200 bg-red-50 p-4"
                >
                  <AlertCircle className="mt-0.5 shrink-0 text-red-600" size={20} />
                  <div>
                    <p className="font-bold text-red-800">That didn&apos;t go through</p>
                    <p className="text-sm text-red-700">
                      {submitError || "Try again"} or email us at{" "}
                      <a href={`mailto:${VIP_INQUIRY_EMAIL}`} className="font-bold underline">
                        {VIP_INQUIRY_EMAIL}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onInquirySubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="vip-name"
                      className="text-sm font-bold uppercase text-neutral-500"
                    >
                      Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="vip-name"
                      placeholder="First and last name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "vip-name-error" : undefined}
                      className={`bg-white ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p
                        id="vip-name-error"
                        className="text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="vip-email"
                      className="text-sm font-bold uppercase text-neutral-500"
                    >
                      Email <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="vip-email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "vip-email-error" : undefined}
                      className={`bg-white ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p
                        id="vip-email-error"
                        className="text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="vip-phone"
                      className="text-sm font-bold uppercase text-neutral-500"
                    >
                      Phone
                    </label>
                    <Input
                      id="vip-phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "vip-phone-error" : undefined}
                      className={`bg-white ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p
                        id="vip-phone-error"
                        className="text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Package */}
                  <div className="space-y-2">
                    <label
                      htmlFor="vip-package"
                      className="text-sm font-bold uppercase text-neutral-500"
                    >
                      Package
                    </label>
                    <select
                      id="vip-package"
                      className="w-full h-9 px-3 rounded-md border border-input bg-white text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      {...register("package")}
                    >
                      {PACKAGE_OPTIONS.map((option) => (
                        <option key={option.label} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="vip-message"
                    className="text-sm font-bold uppercase text-neutral-500"
                  >
                    Message
                  </label>
                  <Textarea
                    id="vip-message"
                    placeholder="Group size, section you want, questions, anything else"
                    className={`min-h-[130px] bg-white ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "vip-message-error" : undefined}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p
                      id="vip-message-error"
                      className="text-sm text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle size={14} />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase h-14 text-base tracking-wider disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send
                    </>
                  )}
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  <span className="text-primary">*</span> Required fields
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* VIP Highlight Video */}
      <section className="relative overflow-hidden bg-neutral-950 py-20 md:py-28">
        {/* Backdrop: red radial glow, edge lines, ghosted VIP wordmark */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.16),transparent_60%)]" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
        >
          <span className="font-[Chakra_Petch] text-[32vw] font-bold uppercase leading-none tracking-tighter text-white/[0.035] md:text-[18rem]">
            VIP
          </span>
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-[Chakra_Petch] text-4xl font-bold uppercase leading-[0.95] text-white md:text-6xl">
              Step Inside
              <br />
              <span className="text-primary">VIP Fight Night</span>
            </h2>

            {/* Unfold trigger: outlined button sitting on a thin rule */}
            <div className="mt-12 flex items-center gap-6 md:mt-14">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-700" />
              <button
                type="button"
                onClick={() => setVideoOpen((open) => !open)}
                aria-expanded={videoOpen}
                aria-controls="vip-video-panel"
                className="group/trigger relative flex shrink-0 cursor-pointer items-center gap-4 border-2 border-primary bg-neutral-950 px-7 py-4 font-[Chakra_Petch] text-sm font-bold uppercase tracking-[0.25em] text-white shadow-[0_0_30px_-8px_hsl(var(--primary)/0.7)] transition-all duration-300 hover:bg-primary hover:shadow-[0_0_40px_-6px_hsl(var(--primary)/0.9)] focus-visible:bg-primary focus-visible:outline-none active:scale-[0.98] md:px-9 md:py-5 md:text-base"
              >
                <span>{videoOpen ? "Close video" : "Click to watch"}</span>
                <ChevronsDown
                  size={22}
                  strokeWidth={2.5}
                  className={`text-primary transition-all duration-500 group-hover/trigger:text-white group-focus-visible/trigger:text-white ${
                    videoOpen
                      ? "rotate-180"
                      : "motion-safe:animate-[bounce_2s_infinite] group-hover/trigger:animate-none group-hover/trigger:translate-y-0.5"
                  }`}
                />
              </button>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-neutral-700" />
            </div>

            {/* Unfolding panel: grid-rows 0fr -> 1fr animates height without JS measuring */}
            <div
              id="vip-video-panel"
              className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                videoOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="flex justify-center pt-14 pb-4 md:pt-16">
                  <div
                    className={`relative w-full max-w-sm origin-top transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      videoOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                  >
                    {/* Faint glow */}
                    <div className="absolute -inset-6 bg-primary/15 blur-2xl" />

                    <div className="relative overflow-hidden border border-neutral-800 bg-black shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9)]">
                      <video
                        ref={videoRef}
                        className="aspect-[808/1080] w-full object-cover"
                        src="/videos/vip-highlight.mp4"
                        poster="/videos/vip-highlight-poster.jpg"
                        controls
                        controlsList="nodownload"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    </div>

                    {/* Red tick marks at the corners */}
                    <div className="absolute -top-1.5 -left-1.5 h-4 w-4 border-t-2 border-l-2 border-primary" />
                    <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-r-2 border-b-2 border-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Shared Features Section - Clean Design */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-neutral-900 text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              Package Inclusions
            </div>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-4 text-neutral-900">
                Both Packages <span className="text-primary">Include</span>
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto">
                Premium amenities included with every VIP package
              </p>
            </div>

            {/* Clean List Style */}
            <div className="border border-neutral-200 bg-white">
              {SHARED_FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-5 p-6 ${
                    index !== SHARED_FEATURES.length - 1 ? "border-b border-neutral-200" : ""
                  } group hover:bg-neutral-50 transition-colors`}
                >
                  {/* Left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-neutral-200 group-hover:bg-primary transition-colors" />

                  {/* Number */}
                  <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>

                  {/* Text */}
                  <span className="text-neutral-900 font-medium text-base md:text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What VIP Feels Like - Images */}
      <section className="py-16 md:py-24 bg-neutral-900 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <Container className="relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-24 bg-neutral-700" />
            <div className="bg-primary text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              The Experience
            </div>
            <div className="h-px flex-1 max-w-24 bg-neutral-700" />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] uppercase text-white mb-4">
              What VIP <span className="text-primary">Feels Like</span>
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Exclusive access, premium hospitality, and memories that last a lifetime
            </p>
          </div>

          {/* Hovered tile scales up over its neighbours while the rest dim back */}
          <div className="group/gallery grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {VIP_IMAGES.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square transition-all duration-500 ease-out group-hover/gallery:not-hover:opacity-40 group-hover/gallery:not-hover:scale-[0.97] hover:z-30 hover:scale-[1.28] md:hover:scale-[1.35] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.85)] ${
                  index % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2"
                }`}
              >
                <div className="h-full w-full overflow-hidden border border-neutral-700 transition-colors duration-500 hover:border-primary">
                  <img
                    src={image}
                    alt={`VIP Experience ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* VIP FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-neutral-900 text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm flex items-center gap-2">
                <HelpCircle size={16} />
                FAQs
              </div>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-8 text-neutral-900">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-neutral-50 border border-neutral-200 px-6 data-[state=open]:border-neutral-300"
                >
                  <AccordionTrigger className="text-left font-bold text-neutral-900 hover:text-primary hover:no-underline py-5 [&>svg]:text-neutral-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
