import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | SpoonShare",
  description:
    "How SpoonShare collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="legal">
      <Link className="legal__back" href="/">
        <ArrowLeft size={14} aria-hidden="true" />
        Back to SpoonShare
      </Link>
      <h1 className="display">Privacy Policy</h1>
      <p className="legal__updated">Last updated: February 26, 2026</p>
      <p className="legal__intro">
        SpoonShare is committed to protecting your privacy and keeping your
        personal information secure. This policy explains what we collect, how
        we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          Personal information such as your name, email address and phone number
          when you register or contact us.
        </li>
        <li>Usage data and analytics that help us improve the service.</li>
        <li>
          Location data, with your consent, to connect you with nearby food
          sources.
        </li>
        <li>Device information and cookies needed for a reliable experience.</li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To provide and maintain the food-sharing service.</li>
        <li>To connect donors with recipients in your area.</li>
        <li>To send important updates about the service.</li>
        <li>To improve the platform and user experience.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>Data protection</h2>
      <ul>
        <li>We use industry-standard security measures.</li>
        <li>Your data is encrypted during transmission and storage.</li>
        <li>We review and update our security practices regularly.</li>
        <li>Access to personal data is strictly controlled.</li>
      </ul>

      <h2>Information sharing</h2>
      <ul>
        <li>We do not sell your personal information.</li>
        <li>
          We may share data with trusted partners who help us provide the
          service.
        </li>
        <li>We may share information when required by law.</li>
        <li>Aggregated, anonymised data may be used for research.</li>
      </ul>

      <h2>Your rights</h2>
      <ul>
        <li>Access and review your personal data.</li>
        <li>Request correction of inaccurate information.</li>
        <li>
          Request deletion of your data, subject to legal requirements.
        </li>
        <li>Opt out of marketing communications.</li>
        <li>Withdraw consent for data processing.</li>
      </ul>

      <h2>Questions about your privacy</h2>
      <p>
        If you have questions about this policy or how we handle your data,
        email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <div className="legal__foot">
        <Link href="/">Home</Link>
        <Link href="/terms">Terms of Service</Link>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </main>
  );
}
