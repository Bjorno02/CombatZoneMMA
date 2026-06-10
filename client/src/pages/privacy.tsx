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

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline underline-offset-2 hover:no-underline"
    >
      {children}
    </a>
  );
}

const PRIVACY_EMAIL = "jmsnkattar@czmma.com";

export default function PrivacyPage() {
  useSEO({
    title: "Privacy Policy | Combat Zone MMA",
    description:
      "How Combat Zone MMA collects, uses, and protects your personal information, and the privacy rights available to you.",
  });

  return (
    <PageLayout>
      <SectionHero
        label="Legal"
        title="PRIVACY POLICY"
        highlightWord="POLICY"
        size="short"
        description="We only collect what we need, we never sell your data, and you always have a choice."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-primary bg-neutral-50 p-6 mb-10 text-sm text-neutral-600 leading-relaxed">
              <p className="mb-2">
                <strong>Effective Date:</strong> June 10, 2026 &nbsp;|&nbsp;{" "}
                <strong>Last Updated:</strong> June 10, 2026
              </p>
              <p className="mb-2">
                <strong>Privacy Officer:</strong> Jamison Kattar, Administrator &nbsp;|&nbsp;{" "}
                <strong>Contact:</strong>{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-primary underline">
                  {PRIVACY_EMAIL}
                </a>
              </p>
            </div>

            <H2>1. Introduction</H2>
            <P>
              Combat Zone MMA (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a mixed
              martial arts promotion headquartered in New Hampshire. This Privacy Policy explains
              what personal information we collect through https://czmma.com and related services,
              how we use and share it, and the rights you have over it.
            </P>
            <P>
              This policy is designed to satisfy the New Hampshire Data Privacy Act (RSA 507-H,
              &ldquo;NHDPA&rdquo;), the Federal Trade Commission Act, the CAN-SPAM Act, the
              Children&rsquo;s Online Privacy Protection Act (COPPA, as amended effective 2025), the
              California Online Privacy Protection Act (CalOPPA), and &mdash; to the extent they
              apply to visitors from those regions &mdash; the California Consumer Privacy Act as
              amended by the CPRA (&ldquo;CCPA&rdquo;) and the EU/UK General Data Protection
              Regulation (&ldquo;GDPR&rdquo;).
            </P>

            <H2>2. Information We Collect</H2>
            <P>
              <strong>Information you provide:</strong>
            </P>
            <UL>
              <li>
                <strong>Contact form:</strong> first name, last name, email address, inquiry
                subject, and message.
              </li>
              <li>
                <strong>Email list signup:</strong> email address.
              </li>
              <li>
                <strong>Ticket, pay-per-view, and merchandise purchases:</strong> handled by our
                third-party platforms (TicketSpice and Shopify &mdash; see Section 7). We do not
                collect or store your payment card details on our own systems.
              </li>
            </UL>
            <P>
              Providing personal information is always voluntary. You can browse our website without
              submitting any personal information, though declining to provide it may prevent you
              from completing a purchase, subscribing, or receiving a reply.
            </P>
            <P>
              <strong>Information collected automatically:</strong>
            </P>
            <UL>
              <li>
                <strong>Server and security logs:</strong> when you submit a form, we log your IP
                address and a timestamp for rate limiting, abuse prevention, and troubleshooting.
              </li>
              <li>
                <strong>Analytics:</strong> we use Vercel Analytics, a privacy-focused tool that
                collects aggregated, anonymized usage data (page views, browser and device type,
                approximate region). It does not use advertising cookies or build individual
                advertising profiles.
              </li>
            </UL>

            <H2>3. How We Use Your Information</H2>
            <UL>
              <li>
                <strong>Order and service fulfillment</strong> &mdash; processing ticket, PPV, and
                merchandise transactions and delivering event information.
              </li>
              <li>
                <strong>Email communications</strong> &mdash; sending event announcements, fight
                card updates, and promotions to subscribers (opt out anytime; see Section 16).
              </li>
              <li>
                <strong>Customer service</strong> &mdash; responding to inquiries submitted through
                our contact form or email.
              </li>
              <li>
                <strong>Analytics and improvement</strong> &mdash; understanding aggregate site
                usage to improve performance.
              </li>
              <li>
                <strong>Security and fraud prevention</strong> &mdash; rate limiting, verifying PPV
                purchases, and protecting our services.
              </li>
              <li>
                <strong>Legal compliance</strong> &mdash; complying with applicable law and legal
                process.
              </li>
            </UL>
            <P>
              We do not use your personal information for purposes incompatible with the above
              without your consent.
            </P>

            <H2>4. Legal Bases for Processing (GDPR)</H2>
            <P>
              Where the GDPR applies, we process personal data on these bases:{" "}
              <strong>consent</strong> (email list signup, contact forms &mdash; withdrawable at any
              time), <strong>contract</strong> (fulfilling purchases you request),{" "}
              <strong>legitimate interests</strong> (site security, rate limiting, aggregate
              analytics), and <strong>legal obligation</strong> (records we must retain by law).
            </P>

            <H2>5. Cookies and Tracking Technologies</H2>
            <P>
              Our own website does not set advertising or cross-site tracking cookies. Vercel
              Analytics operates without traditional tracking cookies and does not profile you
              across other websites.
            </P>
            <P>
              However,{" "}
              <strong>
                embedded third-party services on certain pages may set their own cookies
              </strong>{" "}
              under their own privacy policies:
            </P>
            <UL>
              <li>
                <strong>Shopify</strong> (merchandise shop and checkout) &mdash;{" "}
                <Ext href="https://www.shopify.com/legal/privacy">privacy policy</Ext>
              </li>
              <li>
                <strong>TicketSpice / Webconnex</strong> (ticket and PPV checkout) &mdash;{" "}
                <Ext href="https://www.webconnex.com/privacy/">privacy policy</Ext>
              </li>
              <li>
                <strong>YouTube / Google</strong> (embedded videos) &mdash;{" "}
                <Ext href="https://policies.google.com/privacy">privacy policy</Ext>
              </li>
              <li>
                <strong>Vimeo</strong> (PPV video player) &mdash;{" "}
                <Ext href="https://vimeo.com/privacy">privacy policy</Ext>
              </li>
            </UL>
            <P>
              In addition, our site loads web fonts from <strong>Google Fonts</strong>; when a page
              loads, your browser requests the font files from Google&rsquo;s servers, which
              transmits your IP address to Google. Google states it does not use Google Fonts
              requests for profiling or advertising (
              <Ext href="https://developers.google.com/fonts/faq/privacy">details</Ext>).
            </P>
            <P>
              You can block or delete cookies in your browser settings; this will not affect the
              informational portions of our site but may affect shop, checkout, and video
              functionality.
            </P>
            <P>
              <strong>
                Do Not Track and opt-out preference signals (CalOPPA § 22575(b)(5)&ndash;(7)):
              </strong>{" "}
              Because we do not track visitors across third-party websites over time, our site does
              not respond differently to browser &ldquo;Do Not Track&rdquo; signals. We honor Global
              Privacy Control (GPC) and similar opt-out preference signals to the extent required by
              applicable law; because we do not sell personal data or engage in targeted
              advertising, there is no sale or sharing for such signals to opt you out of.
            </P>

            <H2>6. We Do Not Sell Your Personal Data</H2>
            <P>
              <strong>
                Combat Zone MMA does not sell personal data and has not sold personal data
              </strong>
              , as &ldquo;sale&rdquo; is defined under the NHDPA, the CCPA, or any other applicable
              law. We also do not:
            </P>
            <UL>
              <li>
                engage in <strong>targeted advertising</strong> (serving ads based on your activity
                across unaffiliated websites);
              </li>
              <li>
                engage in <strong>profiling</strong> in furtherance of decisions producing legal or
                similarly significant effects; or
              </li>
              <li>
                knowingly sell or share the personal information of consumers under 16 years of age.
              </li>
            </UL>
            <P>
              We share personal data only with the service providers listed in Section 7, who
              process it on our behalf. Paying a vendor to provide us services is not a sale of your
              data.
            </P>

            <H2>7. Who We Share Information With</H2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left text-neutral-700 border border-neutral-200">
                <thead className="bg-neutral-950 text-white uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Third Party</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Data Involved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Vercel</td>
                    <td className="px-4 py-3">Website hosting and analytics</td>
                    <td className="px-4 py-3">
                      Server logs (including IP address), aggregated analytics data
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Sender</td>
                    <td className="px-4 py-3">Email list platform</td>
                    <td className="px-4 py-3">Email address</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Resend</td>
                    <td className="px-4 py-3">Transactional email delivery (contact form)</td>
                    <td className="px-4 py-3">Name, email address, message contents</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">TicketSpice (Webconnex)</td>
                    <td className="px-4 py-3">Ticketing, PPV sales, payment processing</td>
                    <td className="px-4 py-3">
                      Name, email, order and payment details (collected and processed by
                      TicketSpice)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Shopify</td>
                    <td className="px-4 py-3">Merchandise store and payment processing</td>
                    <td className="px-4 py-3">
                      Name, email, shipping and payment details (collected and processed by Shopify)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Google / YouTube</td>
                    <td className="px-4 py-3">
                      Embedded video content, web fonts (Google Fonts), and email mailbox (Gmail)
                      for receiving contact-form inquiries
                    </td>
                    <td className="px-4 py-3">
                      Standard data collected by embedded players and font requests (including IP
                      address); contact-form contents delivered to a Gmail inbox
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Vimeo</td>
                    <td className="px-4 py-3">PPV video streaming</td>
                    <td className="px-4 py-3">Standard data collected by the embedded player</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              These providers are authorized to use your data only to perform services for us,
              except as required by their own legal obligations. We may also disclose information to
              comply with legal process, to enforce our rights, to protect safety, or in connection
              with a business transfer in which the acquirer agrees to honor this policy.
            </P>

            <H2>8. Data Retention</H2>
            <UL>
              <li>
                <strong>Email list:</strong> retained while you remain subscribed. Unsubscribe at
                any time via the link in any email, by emailing {PRIVACY_EMAIL}, or by submitting a
                deletion request (Section 12).
              </li>
              <li>
                <strong>Contact inquiries:</strong> retained no longer than 3 years unless required
                for an ongoing matter or by law.
              </li>
              <li>
                <strong>Server/security logs:</strong> retained for a short period consistent with
                security and troubleshooting needs.
              </li>
              <li>
                <strong>Transaction records:</strong> retained by us and by TicketSpice/Shopify as
                needed for fulfillment, disputes, and legal/financial record-keeping requirements.
              </li>
            </UL>
            <P>
              Upon a verified deletion request, we remove your data from our active records within
              45 days, except where retention is legally required.
            </P>

            <H2>9. Data Security</H2>
            <P>
              We use reasonable technical and organizational safeguards, including HTTPS/TLS across
              our site, security headers and rate limiting, reputable PCI-compliant payment
              platforms (Shopify, TicketSpice), and access limited to authorized personnel. No
              method of transmission or storage is 100% secure. If you believe your interaction with
              us has been compromised, contact {PRIVACY_EMAIL}. In the event of a data breach, we
              will notify affected individuals in accordance with applicable federal and New
              Hampshire law (RSA 359-C:20).
            </P>

            <H2>10. Children&rsquo;s Privacy (COPPA)</H2>
            <P>
              Our website and services are not directed to children under 13, and we do not
              knowingly collect personal information from children under 13, consistent with COPPA
              (15 U.S.C. §§ 6501&ndash;6506) and the FTC&rsquo;s amended COPPA Rule (effective June
              23, 2025). If you believe a child under 13 has provided us personal information,
              contact {PRIVACY_EMAIL} and we will promptly delete it. We do not sell anyone&rsquo;s
              personal data, including that of minors. A parent or legal guardian may exercise
              privacy rights on behalf of their minor child, and a guardian or conservator may act
              on behalf of a consumer subject to guardianship.
            </P>

            <H2>11. Your Privacy Rights &mdash; All Visitors</H2>
            <P>Regardless of where you live, we extend these rights to everyone:</P>
            <UL>
              <li>
                <strong>Access</strong> &mdash; confirm whether we process your data and receive a
                copy, free of charge once per 12-month period.
              </li>
              <li>
                <strong>Correction</strong> &mdash; fix inaccuracies in your data.
              </li>
              <li>
                <strong>Deletion</strong> &mdash; have your data deleted, subject to legal
                exceptions.
              </li>
              <li>
                <strong>Portability</strong> &mdash; receive your data in a portable, readily usable
                format.
              </li>
              <li>
                <strong>Opt out of marketing</strong> &mdash; unsubscribe from our email list at any
                time.
              </li>
            </UL>
            <P>We will not discriminate against you for exercising any privacy right.</P>

            <H2>12. How to Submit a Request</H2>
            <P>
              Email{" "}
              <a
                href={`mailto:${PRIVACY_EMAIL}?subject=Privacy%20Rights%20Request`}
                className="text-primary underline"
              >
                {PRIVACY_EMAIL}
              </a>{" "}
              with the subject line <strong>&ldquo;Privacy Rights Request&rdquo;</strong>, including
              your name, the email address you used with us, and the right(s) you wish to exercise.
              You may also use our{" "}
              <a href="/contact" className="text-primary underline">
                contact form
              </a>
              .
            </P>
            <P>
              We may need to verify your identity; we will not require you to create an account. We
              respond within <strong>45 days</strong>, extendable once by 45 days for complex or
              numerous requests (with notice). Manifestly unfounded, excessive, or repetitive
              requests may incur a reasonable fee or be declined; we bear the burden of
              demonstrating that. An authorized agent may submit opt-out requests on your behalf.
            </P>

            <H2>13. New Hampshire Residents (NHDPA, RSA 507-H)</H2>
            <P>
              New Hampshire residents have the rights in Sections 11&ndash;12 as a matter of state
              law, plus the right to opt out of the sale of personal data, targeted advertising, and
              significant-decision profiling (we engage in none of these).
            </P>
            <P>
              <strong>Appeals:</strong> if we decline your request, we will explain why and how to
              appeal. Email {PRIVACY_EMAIL}, subject{" "}
              <strong>&ldquo;Privacy Rights Appeal&rdquo;</strong>, describing your original request
              and the basis for appeal. We respond in writing within <strong>60 days</strong>. If
              your appeal is denied, you may contact the{" "}
              <strong>New Hampshire Attorney General</strong> (Consumer Protection Bureau) at{" "}
              <Ext href="https://www.doj.nh.gov/citizens/consumer-protection-antitrust-bureau/consumer-complaints">
                doj.nh.gov
              </Ext>{" "}
              or DOJ-CPB@doj.nh.gov. The Attorney General has exclusive authority to enforce the
              NHDPA.
            </P>

            <H2>14. California Residents</H2>
            <P>
              This section and our conspicuous posting of this policy are provided under{" "}
              <strong>CalOPPA</strong>. Our Do Not Track disclosure appears in Section 5. Combat
              Zone MMA does not currently meet the CCPA&rsquo;s thresholds for a covered
              &ldquo;business&rdquo; (e.g., $26,625,000+ annual gross revenue or data on 100,000+
              California consumers). Nevertheless, we voluntarily extend the rights in Section 11 to
              California residents, and we confirm: we do <strong>not</strong> sell or share
              personal information as defined by the CCPA/CPRA, we do not use or disclose sensitive
              personal information for purposes requiring a right to limit, and we do not knowingly
              sell or share personal information of consumers under 16. California&rsquo;s
              &ldquo;Shine the Light&rdquo; law (Civil Code § 1798.83): we do not disclose personal
              information to third parties for their direct marketing purposes.
            </P>

            <H2>15. Visitors from the EU, UK, and EEA (GDPR)</H2>
            <P>
              Combat Zone MMA is a US-based business and does not target the European market, but if
              the GDPR applies to our processing of your data, the following applies. The data
              controller is Combat Zone MMA (contact: {PRIVACY_EMAIL}). In addition to the rights in
              Section 11, you have the rights to <strong>restrict processing</strong>, to{" "}
              <strong>object to processing</strong> based on legitimate interests, to{" "}
              <strong>withdraw consent</strong> at any time (without affecting prior processing),
              and to <strong>lodge a complaint with your local supervisory authority</strong>. Our
              legal bases are described in Section 4.
            </P>
            <P>
              <strong>International transfers:</strong> our services are hosted in the United
              States; by using them, your data is transferred to and processed in the US. Our
              service providers rely on recognized transfer safeguards (such as the EU&ndash;US Data
              Privacy Framework or Standard Contractual Clauses) as described in their own policies.
              We do not retain data indefinitely; see Section 8.
            </P>

            <H2>16. Email Communications and CAN-SPAM</H2>
            <P>
              Our marketing emails use truthful subject lines and sender information, identify
              themselves as coming from Combat Zone MMA, include our physical business address, and
              include a functioning unsubscribe link in every message. Opt-outs are honored promptly
              and within 10 business days, and we never transfer your email address to another party
              after you opt out. To unsubscribe: click &ldquo;Unsubscribe&rdquo; in any email or
              write to {PRIVACY_EMAIL} with subject &ldquo;Unsubscribe.&rdquo; Unsubscribing stops
              marketing email; to fully delete your data, submit a deletion request (Section 12).
            </P>

            <H2>17. Links to Third-Party Websites</H2>
            <P>
              Our site links to and embeds third-party services (TicketSpice, Shopify, YouTube,
              Vimeo, social media). Their privacy practices are governed by their own policies,
              which we encourage you to review. We are not responsible for the practices of
              third-party sites.
            </P>

            <H2>18. Changes to This Policy</H2>
            <P>
              We may update this policy at any time. Material changes will be reflected in the
              &ldquo;Last Updated&rdquo; date above and posted at https://czmma.com/privacy; where
              appropriate we may provide additional notice on our homepage or by email. Continued
              use after the effective date constitutes acceptance.
            </P>

            <H2>19. Contact</H2>
            <P>
              <strong>Privacy Officer:</strong> Jamison Kattar, Administrator
              <br />
              <strong>Combat Zone MMA</strong> &mdash; Manchester, New Hampshire
              <br />
              <strong>Email:</strong>{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-primary underline">
                {PRIVACY_EMAIL}
              </a>
            </P>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
