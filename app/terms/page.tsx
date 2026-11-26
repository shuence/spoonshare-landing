import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | SpoonShare",
  description:
    "The terms that govern use of the SpoonShare food donation and distribution platform.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main id="main" className="legal">
      <Link className="legal__back" href="/">
        <ArrowLeft size={14} aria-hidden="true" />
        Back to SpoonShare
      </Link>
      <h1 className="display">Terms of Service</h1>
      <p className="legal__updated">Last updated: February 26, 2026</p>
      <p className="legal__intro">
        These terms govern your use of SpoonShare&apos;s food donation and
        distribution platform. By using our services, you agree to these terms
        and to our community guidelines.
      </p>

      <h2>Acceptance of terms</h2>
      <ul>
        <li>
          By accessing and using SpoonShare services, you agree to be bound by
          these terms.
        </li>
        <li>
          These terms apply to all users, including donors, recipients and
          partners.
        </li>
        <li>We may modify these terms at any time.</li>
        <li>Continued use after changes constitutes acceptance of the new terms.</li>
      </ul>

      <h2>User responsibilities</h2>
      <ul>
        <li>Provide accurate and truthful information when registering.</li>
        <li>Maintain the safety and quality of donated food.</li>
        <li>Respect the privacy and dignity of all community members.</li>
        <li>Report issues or concerns promptly to our team.</li>
        <li>Follow all applicable local laws and regulations.</li>
      </ul>

      <h2>Service limitations</h2>
      <ul>
        <li>We cannot guarantee the availability of food donations.</li>
        <li>Food quality and safety are the responsibility of donors.</li>
        <li>
          We are not liable for food-related illness or other issues arising
          from a donation.
        </li>
        <li>Service availability may vary by location and time.</li>
      </ul>

      <h2>Prohibited activities</h2>
      <ul>
        <li>Donating expired or unsafe food items.</li>
        <li>Using the platform for commercial purposes without permission.</li>
        <li>Harassing or discriminating against other users.</li>
        <li>Attempting to circumvent our safety protocols.</li>
        <li>Sharing the personal information of other users.</li>
      </ul>

      <h2>Intellectual property</h2>
      <ul>
        <li>All content and technology remain our property.</li>
        <li>Users retain rights to their own content.</li>
        <li>
          You grant us a licence to use shared content to improve the service.
        </li>
        <li>Trademarks and logos are protected under law.</li>
      </ul>

      <h2>Important information</h2>
      <p>
        <strong>Governing law:</strong> These terms are governed by the laws of
        India. Any disputes will be resolved in the courts of Maharashtra.
      </p>
      <p>
        <strong>Severability:</strong> If any provision of these terms is found
        to be unenforceable, the remaining provisions stay in effect.
      </p>
      <p>
        <strong>Entire agreement:</strong> These terms, together with our
        Privacy Policy, form the entire agreement between you and SpoonShare.
      </p>

      <h2>Questions about these terms</h2>
      <p>
        Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will
        clarify anything that is unclear.
      </p>

      <div className="legal__foot">
        <Link href="/">Home</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </main>
  );
}
