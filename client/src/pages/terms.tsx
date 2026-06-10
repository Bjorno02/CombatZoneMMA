import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { SectionHero } from "@/components/layout/SectionHero";
import { useSEO } from "@/hooks/useSEO";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-neutral-950 mt-12 mb-4 scroll-mt-28">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-neutral-700 leading-relaxed mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-6 text-neutral-700 leading-relaxed mb-4 space-y-2">{children}</ul>
  );
}

const CONTACT_EMAIL = "jmsnkattar@czmma.com";

export default function TermsPage() {
  useSEO({
    title: "Terms of Service | Combat Zone MMA",
    description:
      "Terms governing use of czmma.com and purchases of Combat Zone MMA event tickets, pay-per-view streams, and merchandise.",
  });

  return (
    <PageLayout>
      <SectionHero
        label="Legal"
        title="TERMS OF SERVICE"
        highlightWord="SERVICE"
        size="short"
        description="The rules for using our site and purchasing tickets, pay-per-view, and merchandise."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-primary bg-neutral-50 p-6 mb-10 text-sm text-neutral-600 leading-relaxed">
              <p>
                <strong>Effective Date:</strong> June 10, 2026 &nbsp;|&nbsp;{" "}
                <strong>Last Updated:</strong> June 10, 2026 &nbsp;|&nbsp; <strong>Contact:</strong>{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>

            <H2>1. Acceptance of These Terms</H2>
            <P>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of https://czmma.com (the
              &ldquo;Site&rdquo;) and your purchase of tickets, pay-per-view streams
              (&ldquo;PPV&rdquo;), and merchandise offered through it. By using the Site or making a
              purchase, you agree to these Terms and to our{" "}
              <Link href="/privacy" className="text-primary underline">
                Privacy Policy
              </Link>
              . If you do not agree, do not use the Site.
            </P>
            <P>
              Combat Zone MMA (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a mixed
              martial arts promotion headquartered in Manchester, New Hampshire.
            </P>

            <H2>2. Eligibility</H2>
            <P>
              You must be at least 18 years old (or the age of majority where you live) to make
              purchases through the Site. Minors may use the informational portions of the Site only
              with the involvement of a parent or guardian. Venue and event age policies are set by
              the venue and applicable law and may differ by event.
            </P>

            <H2>3. Purchases Through Third-Party Platforms</H2>
            <P>
              Ticket and PPV purchases are processed by <strong>TicketSpice (Webconnex)</strong> and
              merchandise purchases by <strong>Shopify</strong>. Your purchases are also subject to
              those platforms&rsquo; own terms and policies. We do not collect or store your payment
              card details on our own systems.
            </P>

            <H2>4. Tickets and Events &mdash; All Sales Final</H2>
            <UL>
              <li>
                <strong>All ticket sales are final.</strong> No refunds or exchanges, except as
                described below or where required by law.
              </li>
              <li>
                <strong>Fight cards are subject to change.</strong> Bouts may be added, changed, or
                cancelled due to injuries, medical suspensions, weight-miss situations, commission
                rulings, or other circumstances.{" "}
                <strong>
                  A change to the fight card &mdash; including the main event &mdash; does not
                  entitle you to a refund.
                </strong>
              </li>
              <li>
                <strong>Cancellation:</strong> if an event is cancelled in its entirety and not
                rescheduled, we will refund the ticket purchase price (excluding fees where
                permitted) through the original payment platform.
              </li>
              <li>
                <strong>Postponement:</strong> if an event is postponed or rescheduled, your ticket
                will be honored at the rescheduled event; postponement does not entitle you to a
                refund.
              </li>
              <li>
                <strong>Venue rules:</strong> admission is subject to the rules of the venue and
                applicable law. We and the venue reserve the right to refuse admission or remove any
                person for unsafe, unlawful, or disruptive conduct, without refund.
              </li>
              <li>
                <strong>Assumption of risk:</strong> attending a live combat-sports event carries
                inherent risks, including objects or persons leaving the competition area. To the
                fullest extent permitted by law, you assume all risks incidental to attendance.
              </li>
              <li>
                <strong>Recording:</strong> events may be filmed, photographed, and broadcast. By
                attending, you consent to your image and likeness appearing in event footage,
                photography, and promotional materials without compensation.
              </li>
              <li>
                <strong>No resale for profit:</strong> tickets may not be resold above face value or
                used for promotions, contests, or commercial purposes without our written consent.
              </li>
            </UL>

            <H2>5. Pay-Per-View (PPV) Streams</H2>
            <UL>
              <li>
                <strong>All PPV sales are final.</strong> No refunds once an access code or stream
                link has been issued, except where the event is cancelled in its entirety and not
                rescheduled, or the stream fails substantially due to our fault (not your device,
                connection, or third-party platform outage outside our control).
              </li>
              <li>
                <strong>One household per purchase.</strong> Your PPV access code is licensed to you
                for personal, private, non-commercial viewing in a single household.
              </li>
              <li>
                <strong>You may not:</strong> share, sell, post, or otherwise distribute your access
                code; rebroadcast, restream, or publicly exhibit the stream (including in bars,
                gyms, or other commercial venues); record, screen-capture, or re-upload any portion
                of the broadcast; or circumvent any technical protection.
              </li>
              <li>
                <strong>Enforcement:</strong> we may revoke PPV access{" "}
                <strong>without refund</strong> for violations, and unauthorized public exhibition
                or rebroadcast may expose you to civil and criminal liability under the Federal
                Communications Act (47 U.S.C. §§ 553, 605) and copyright law.
              </li>
              <li>
                Streams are provided via third-party platforms (TicketSpice, Vimeo); reasonable
                interruptions, quality variations, and delays inherent to internet streaming do not
                constitute failure of the service.
              </li>
            </UL>

            <H2>6. Merchandise</H2>
            <P>
              Merchandise is sold through our Shopify-powered shop. Returns, exchanges, and shipping
              issues are governed by the policies stated in the shop at the time of purchase.
              Nothing in this section limits rights you have under applicable consumer law.
            </P>

            <H2>7. Intellectual Property</H2>
            <P>
              The Site and its content &mdash; including the Combat Zone MMA name and logos, event
              names, photographs, videos, fight footage, graphics, and text &mdash; are owned by or
              licensed to Combat Zone MMA and protected by trademark and copyright law. We grant you
              a limited, revocable, non-exclusive license to access the Site for personal,
              non-commercial use. You may not copy, scrape, republish, or commercially exploit Site
              content, or use our marks, without our prior written consent.
            </P>
            <P>
              If you believe content on the Site infringes your copyright, notify us at{" "}
              {CONTACT_EMAIL} with a description of the copyrighted work, the location of the
              allegedly infringing material on the Site, and your contact information, and we will
              review and respond promptly.
            </P>

            <H2>8. Acceptable Use</H2>
            <P>
              You agree not to: interfere with or disrupt the Site or its infrastructure; attempt to
              gain unauthorized access to any systems, accounts, or data; use bots, scrapers, or
              automated tools to access the Site or purchase tickets; submit false, misleading, or
              abusive content through our forms; or use the Site for any unlawful purpose. We may
              restrict or terminate access for violations.
            </P>

            <H2>9. Third-Party Services and Links</H2>
            <P>
              The Site links to and embeds third-party services (TicketSpice, Shopify, YouTube,
              Vimeo, social media, NH state forms). We are not responsible for the content,
              policies, or practices of third parties. Your use of those services is governed by
              their own terms.
            </P>

            <H2>10. Disclaimers</H2>
            <P>
              THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
              AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
              WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. EVENT DATES,
              TIMES, LOCATIONS, AND FIGHT CARDS ARE SUBJECT TO CHANGE.
            </P>

            <H2>11. Limitation of Liability</H2>
            <P>
              TO THE FULLEST EXTENT PERMITTED BY LAW, COMBAT ZONE MMA AND ITS OWNERS, OFFICERS,
              EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE OR ATTENDANCE AT
              OR VIEWING OF ANY EVENT. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM WILL NOT EXCEED
              THE AMOUNT YOU PAID FOR THE PURCHASE GIVING RISE TO THE CLAIM. Some jurisdictions do
              not allow certain limitations, so some of the above may not apply to you; in that case
              our liability is limited to the fullest extent permitted by law.
            </P>

            <H2>12. Indemnification</H2>
            <P>
              You agree to indemnify and hold harmless Combat Zone MMA from claims, damages, and
              expenses (including reasonable attorneys&rsquo; fees) arising from your violation of
              these Terms, your misuse of the Site or a PPV stream, or your violation of any law or
              third-party right.
            </P>

            <H2>13. Governing Law and Venue</H2>
            <P>
              These Terms are governed by the laws of the <strong>State of New Hampshire</strong>,
              without regard to conflict-of-law principles. Any dispute arising out of these Terms
              or your use of the Site shall be brought exclusively in the state or federal courts
              located in New Hampshire, and you consent to their jurisdiction. Nothing in this
              section limits rights you may have under the consumer protection laws of your state of
              residence.
            </P>

            <H2>14. Changes to These Terms</H2>
            <P>
              We may update these Terms at any time. Material changes will be reflected in the
              &ldquo;Last Updated&rdquo; date above and posted at https://czmma.com/terms. Changes
              apply prospectively; the Terms in effect at the time of a purchase govern that
              purchase. Continued use of the Site after changes take effect constitutes acceptance.
            </P>

            <H2>15. General</H2>
            <P>
              If any provision of these Terms is found unenforceable, the remainder stays in effect.
              Our failure to enforce a provision is not a waiver. These Terms, together with the{" "}
              <Link href="/privacy" className="text-primary underline">
                Privacy Policy
              </Link>{" "}
              and the applicable third-party platform terms, are the entire agreement between you
              and us regarding the Site. You may not assign these Terms; we may assign them in
              connection with a business transfer.
            </P>

            <H2>16. Contact</H2>
            <P>
              <strong>Combat Zone MMA</strong> &mdash; Manchester, New Hampshire
              <br />
              <strong>Email:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
                {CONTACT_EMAIL}
              </a>
            </P>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
