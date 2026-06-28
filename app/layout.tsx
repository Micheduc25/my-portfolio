import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-mono",
  display: "swap",
});

const disp = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-disp",
  display: "swap",
});

const SITE = "https://micheduc25.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ndjock Michel Junior — Senior Full-Stack Engineer & Educator",
  description:
    "Senior full-stack engineer (JavaScript/TypeScript, Flutter, Python) and software-engineering educator based in Bamenda, Cameroon. Open to senior and remote roles.",
  keywords: [
    "Ndjock Michel Junior",
    "full-stack engineer",
    "React",
    "Next.js",
    "Flutter",
    "Python",
    "Bamenda",
    "Cameroon developer",
    "remote engineer",
  ],
  authors: [{ name: "Ndjock Michel Junior" }],
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: "Ndjock Michel Junior — Senior Full-Stack Engineer & Educator",
    description:
      "Builds web and mobile software across JS/TS, Flutter and Python — and teaches the people who build it.",
    siteName: "Ndjock Michel Junior",
    images: [{ url: "/images/me.jpg", width: 1200, height: 630, alt: "Ndjock Michel Junior" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ndjock Michel Junior — Senior Full-Stack Engineer & Educator",
    description:
      "Builds web and mobile software across JS/TS, Flutter and Python — and teaches the people who build it.",
    creator: "@micheduc25",
    images: ["/images/me.jpg"],
  },
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${disp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
