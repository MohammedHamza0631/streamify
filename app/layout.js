import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Streamify - Music Streaming Analytics",
  description: "A powerful analytics dashboard for music streaming platforms",
  keywords: ["music", "streaming", "analytics", "dashboard", "Next.js", "React"],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-primary text-white antialiased min-h-screen`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
