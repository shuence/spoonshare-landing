import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Medal,
  SealCheck,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { Phone } from "@/components/phone";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import {
  APP_URL,
  PARTNER_MAILTO,
  PRESS_URL,
} from "@/lib/site";

export default function HomePage() {
  return (
    <main id="main" className="site-main">
      <section className="hero" id="top">
        <div className="shell hero__grid">
          <Reveal className="hero__copy">
            <span className="eyebrow">Food rescue network</span>
            <h1 className="display">Surplus food. Shared tonight.</h1>
            <p className="hero__lead">
              SpoonShare connects restaurants, hostels and event kitchens with
              nearby NGOs and volunteers who can collect surplus food fast.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get the app
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="btn btn--ghost" href="#partners">
                Partner with us
              </a>
            </div>
          </Reveal>

          <Reveal className="hero__visual" delay={0.12}>
            <div className="hero__photo">
              <Image
                src="/images/hero-produce.jpg"
                alt="Fresh vegetables and fruit stacked on market shelves"
                width={1200}
                height={1500}
                priority
                sizes="(max-width: 900px) 92vw, 500px"
              />
            </div>
            <Phone
              className="hero__phone"
              src="/images/app-map.png"
              alt="SpoonShare app showing food listings pinned across a map"
              width={540}
              height={1200}
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="recognition" aria-label="Recognition">
        <div className="shell">
          <div className="recognition__grid">
            <div className="recognition__item">
              <strong>Google Solution Challenge</strong>
              <span>Top 3 globally, 2024</span>
            </div>
            <div className="recognition__item">
              <strong>World Governments Summit</strong>
              <span>Best M-Gov Award, Dubai 2026</span>
            </div>
            <div className="recognition__item">
              <strong>IIM Bangalore</strong>
              <span>Incubated venture</span>
            </div>
            <div className="recognition__item">
              <strong>Play Store</strong>
              <span>4.9 average rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="shell">
          <Reveal>
            <div className="problem-band">
              <div>
                <h2 className="display">
                  A third of the food we grow never reaches a plate.
                </h2>
                <p className="problem-band__lead">
                  At the same time, 2.4 billion people struggled to get enough
                  food in 2023. The gap is not scarcity. It is distribution.
                </p>
                <p className="source">
                  Source: FAO, The State of Food Security and Nutrition in the
                  World, 2024.
                </p>
              </div>
              <div>
                <div className="problem-stat">
                  <span>1/3</span>
                  <p>of food produced is lost or wasted</p>
                </div>
                <div className="problem-stat">
                  <span>2.4B</span>
                  <p>people faced food insecurity in 2023</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="problem-photo">
              <Image
                src="/images/problem-volunteers.jpg"
                alt="Volunteers moving boxes of donated food"
                width={1800}
                height={1013}
                sizes="(max-width: 1240px) 92vw, 1160px"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section" id="how">
        <div className="shell">
          <Reveal className="section-head">
            <h2 className="display">From kitchen to plate in three moves.</h2>
          </Reveal>

          <ol className="steps">
            <Reveal className="step" delay={0.04}>
              <span className="step__num">01</span>
              <h3>Post the surplus</h3>
              <p>
                A kitchen adds what is left, how much there is, and when it can
                be collected.
              </p>
            </Reveal>
            <Reveal className="step" delay={0.1}>
              <span className="step__num">02</span>
              <h3>Match the nearest hands</h3>
              <p>
                SpoonShare alerts verified NGOs and volunteers within range, so
                the closest hands get it first.
              </p>
            </Reveal>
            <Reveal className="step" delay={0.16}>
              <span className="step__num">03</span>
              <h3>Collect and confirm</h3>
              <p>
                The pickup is claimed, tracked and marked delivered. Every meal
                stays accounted for.
              </p>
            </Reveal>
          </ol>
        </div>
      </section>

      <section className="section app-band">
        <div className="shell app">
          <Reveal className="app__stage">
            <Phone
              src="/images/app-choices.png"
              alt="SpoonShare app asking whether you want to donate food, share food or volunteer"
              width={540}
              height={1200}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="display">Know what is nearby, and who is coming.</h2>
            <p className="app__lead">
              Each listing shows the food type, quantity and pickup window. Only
              verified NGOs and volunteers can claim it.
            </p>

            <ul className="feature-list">
              <li className="feature">
                <MapPin size={22} aria-hidden="true" />
                <div>
                  <h3>Live surplus listings</h3>
                  <p>See what is available near you, sorted by pickup time.</p>
                </div>
              </li>
              <li className="feature">
                <SealCheck size={22} aria-hidden="true" />
                <div>
                  <h3>Verified people only</h3>
                  <p>
                    Every NGO and volunteer is checked before they can claim
                    food.
                  </p>
                </div>
              </li>
              <li className="feature">
                <Truck size={22} aria-hidden="true" />
                <div>
                  <h3>A tracked handoff</h3>
                  <p>Follow each pickup from claim to delivery.</p>
                </div>
              </li>
            </ul>

            <a
              className="text-link"
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Download for Android
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section" id="impact">
        <div className="shell">
          <Reveal className="section-head">
            <h2 className="display">Small network. Real meals.</h2>
          </Reveal>

          <dl className="stats">
            <Reveal className="stat" delay={0.03}>
              <dt>1,000+ kg</dt>
              <dd>of surplus food redistributed</dd>
            </Reveal>
            <Reveal className="stat" delay={0.07}>
              <dt>1,500+</dt>
              <dd>Android downloads so far</dd>
            </Reveal>
            <Reveal className="stat" delay={0.11}>
              <dt>4.9 / 5</dt>
              <dd>average Play Store rating</dd>
            </Reveal>
            <Reveal className="stat" delay={0.15}>
              <dt>Top 3</dt>
              <dd>at Google Solution Challenge 2024</dd>
            </Reveal>
          </dl>

          <Reveal delay={0.08}>
            <div className="award">
              <div className="award__icon" aria-hidden="true">
                <Medal size={28} weight="fill" />
              </div>
              <div className="award__copy">
                <p className="award__kicker">
                  World Governments Summit, Dubai
                </p>
                <h3 className="display">Best M-Gov Award</h3>
                <p>
                  Awarded in Dubai in 2026 for using mobile technology to move
                  surplus food to the people who need it.
                </p>
              </div>
              <span className="award__year" aria-hidden="true">
                2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="impact-photo">
              <div className="impact-photo__frame">
                <Image
                  src="/images/award.jpg"
                  alt="The SpoonShare team on stage at the EO GSEA global finale"
                  width={800}
                  height={554}
                  sizes="(max-width: 1240px) 92vw, 1160px"
                />
              </div>
              <figcaption>
                SpoonShare at the EO GSEA global finale in Bengaluru.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="press-line">
              Featured in{" "}
              <a href={PRESS_URL} target="_blank" rel="noreferrer">
                Lokmat Times
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="quote-section">
        <div className="shell">
          <Reveal className="quote">
            <blockquote>
              &ldquo;I saw food being wasted, and families struggling for a
              single meal. Two extreme realities.&rdquo;
            </blockquote>
            <div className="quote__by">
              <Image
                src="/images/sanika.jpg"
                alt="Sanika Chavan, co-founder and CEO of SpoonShare"
                width={470}
                height={560}
              />
              <div>
                <strong>Sanika Chavan</strong>
                <span>Co-founder and CEO, SpoonShare</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
