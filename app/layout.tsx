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
  title: "NdjockCodes — AI Solutions, AI Training & Software",
  description:
    "NdjockCodes builds AI-driven solutions and web & mobile software, and trains teams to use AI. Based in Yaoundé, Cameroon, working remote or on-site.",
  keywords: [
    "NdjockCodes",
    "AI training Cameroon",
    "AI solutions",
    "AI automation",
    "AI consulting",
    "web development",
    "mobile apps",
    "Yaoundé",
    "Cameroon",
  ],
  authors: [{ name: "NdjockCodes" }],
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: "NdjockCodes — AI Solutions, AI Training & Software",
    description:
      "AI-driven solutions, AI training for teams, and full web & mobile development.",
    siteName: "NdjockCodes",
  },
  twitter: {
    card: "summary",
    title: "NdjockCodes — AI Solutions, AI Training & Software",
    description:
      "AI-driven solutions, AI training for teams, and full web & mobile development.",
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
