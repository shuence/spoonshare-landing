import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spoonshare.org"),
  alternates: { canonical: "/" },
  title: "SpoonShare | Rescue surplus food, feed your neighbourhood",
  description:
    "SpoonShare connects restaurants, hostels and event kitchens with verified NGOs and volunteers who collect surplus food nearby. Download the Android app or partner with us.",
  keywords: [
    "SpoonShare",
    "food rescue",
    "surplus food",
    "food donation",
    "zero hunger",
    "food waste",
    "NGO",
    "Chhatrapati Sambhajinagar",
  ],
  openGraph: {
    title: "SpoonShare | Rescue surplus food, feed your neighbourhood",
    description:
      "Good food should not go to waste. SpoonShare matches surplus food with nearby NGOs and volunteers who can collect it.",
    url: "https://spoonshare.org",
    siteName: "SpoonShare",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "SpoonShare, surplus food rescued and shared",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpoonShare | Rescue surplus food, feed your neighbourhood",
    description:
      "Good food should not go to waste. SpoonShare matches surplus food with nearby NGOs and volunteers who can collect it.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: [{ url: "/images/logo.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5ed" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f16" },
  ],
};

const themeScript = `(function(){try{var param=new URLSearchParams(window.location.search).get("theme");if(param==="light"||param==="dark"){document.documentElement.dataset.theme=param;return;}var saved=localStorage.getItem("theme");var theme=saved==="light"||saved==="dark"?saved:"light";document.documentElement.dataset.theme=theme;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
