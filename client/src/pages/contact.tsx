import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

const TEAM = [
  {
    name: "Calvin Kattar",
    role: "CEO/President",
    email: null,
    image: "/images/KattarContact.avif",
  },
  {
    name: "Jamison Kattar",
    role: "Combat Zone Administrator",
    email: "jmsnkattar@czmma.com",
    image: "/images/JKattarContact.avif",
  },
  {
    name: "Jerome Brashears",
    role: "Combat Zone Matchmaker",
    email: "jerome@czmma.com",
    image: "/images/JeromeContact.avif",
  },
  {
    name: "Kurt Daniels",
    role: "Combat Zone Medicals",
    email: "kurtdaniels@czmma.com",
    image: "/images/KurtDanielsContact.avif",
  },
];

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name is too long"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  useSEO(SEO_CONFIG.contact);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle rate limiting
        if (response.status === 429) {
          throw new Error("Too many submissions. Please try again later.");
        }
        // Handle validation errors from server
        if (result.details) {
          throw new Error(result.details.map((d: { message: string }) => d.message).join(", "));
        }
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout className="pt-20">
      {/* Content */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Form */}
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold font-heading uppercase mb-8">Send us a Message</h2>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-green-800">Message Sent!</p>
                    <p className="text-sm text-green-700">
                      Thank you for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-red-800">Something went wrong</p>
                    <p className="text-sm text-red-700">
                      Please try again or email us directly at info@combatzonemma.com
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-bold uppercase text-neutral-500"
                    >
                      First Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      className={
                        errors.firstName ? "border-red-500 focus-visible:ring-red-500" : ""
                      }
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p
                        id="firstName-error"
                        className="text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-bold uppercase text-neutral-500"
                    >
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      className={errors.lastName ? "border-red-500 focus-visible:ring-red-500" : ""}
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p
                        id="lastName-error"
                        className="text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase text-neutral-500">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold uppercase text-neutral-500">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`w-full h-10 px-3 rounded-md border bg-background text-sm ${
                      errors.subject ? "border-red-500" : "border-input"
                    }`}
                    {...register("subject")}
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="fighter">Fighter Inquiry</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="media">Media/Press</option>
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase text-neutral-500">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help?"
                    className={`min-h-[150px] ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white font-bold uppercase w-full py-6 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  <span className="text-primary">*</span> Required fields
                </p>
              </form>
            </div>

            {/* Team */}
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold font-heading uppercase mb-8">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {TEAM.map((member, i) => (
                  <div key={i} className="flex items-center gap-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-24 sm:w-24 sm:h-32 object-cover object-top rounded-full bg-neutral-200 flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-base sm:text-lg text-neutral-900 truncate">
                        {member.name}
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-500 truncate">
                        {member.role}
                      </div>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-xs sm:text-sm text-primary hover:underline block truncate"
                        >
                          {member.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.0!2d-71.4641622!3d42.9863889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e24ed6538e6e8d%3A0x5765d9c8f9a7c8e5!2sSNHU%20Arena!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SNHU Arena Location"
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
