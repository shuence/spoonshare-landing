import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  EnvelopeSimple,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import {
  APP_URL,
  CONTACT_EMAIL,
  DONATE_MAILTO,
  PARTNER_MAILTO,
  VOLUNTEER_MAILTO,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer" id="partners">
      <div className="shell">
        <div className="footer__cta">
          <div>
            <h2 className="display">
              Tonight&apos;s surplus can still be someone&apos;s dinner.
            </h2>
            <p className="footer__lead">
              Restaurants, hostels and event kitchens: tell us what is left and
              when it can be collected.
            </p>
          </div>
          <div className="footer__actions">
            <a className="btn btn--accent" href={PARTNER_MAILTO}>
              Partner with us
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="btn btn--outline-light"
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Get the app
            </a>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="brand" aria-label="SpoonShare home">
              <Image
                src="/images/logo.png"
                alt=""
                width={38}
                height={38}
                className="brand__mark"
              />
              <span className="brand__name">SpoonShare</span>
            </Link>
            <p className="footer__blurb">
              A food-rescue network that moves good food from kitchens with
              surplus to the people who need it, with verified NGOs and
              volunteers doing the last mile.
            </p>
            <div className="socials">
              <a
                href="https://www.linkedin.com/company/spoonshare"
                target="_blank"
                rel="noreferrer"
                aria-label="SpoonShare on LinkedIn"
              >
                <LinkedinLogo size={18} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email SpoonShare"
              >
                <EnvelopeSimple size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link href="/#why">Why it matters</Link>
              </li>
              <li>
                <Link href="/#how">How it works</Link>
              </li>
              <li>
                <Link href="/#impact">Impact</Link>
              </li>
              <li>
                <Link href="/#partners">Partners</Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Get involved</h3>
            <ul>
              <li>
                <a href={APP_URL} target="_blank" rel="noreferrer">
                  Download the app
                </a>
              </li>
              <li>
                <a href={DONATE_MAILTO}>Donate surplus food</a>
              </li>
              <li>
                <a href={VOLUNTEER_MAILTO}>Volunteer with us</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>Contact the team</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Reach us</h3>
            <ul>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <address>
                  Chhatrapati Sambhajinagar,
                  <br />
                  Maharashtra, India
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; 2026 SpoonShare. Built for the UN Sustainable Development
            Goals.
          </span>
          <span className="footer__legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
