import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caroline Eduardo | AI-Augmented Virtual Assistant",
  description:
    "Detail-driven administrative professional with 4+ years in HR, corporate, and hospitality operations. Now helping overseas businesses scale with dependable, AI-powered virtual support.",
  keywords: [
    "virtual assistant",
    "Filipino VA",
    "AI virtual assistant",
    "administrative support",
    "remote assistant",
    "HR assistant",
    "email management",
    "Philippines VA",
  ],
  openGraph: {
    title: "Caroline Eduardo | AI-Augmented Virtual Assistant",
    description:
      "4+ years admin experience. AI-powered. Ready to help your business scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className={`${bebasNeue.variable} ${cormorant.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
