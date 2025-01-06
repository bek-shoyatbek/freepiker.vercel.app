import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freepiker - Premium Freepik Resources",
  description: "Access premium Freepik resources at affordable prices",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const footerLinks = {
  Product: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ],
  Support: [{ name: "Contact", href: "/contact" }],
  Company: [{ name: "About", href: "#" }],
  Legal: [{ name: "Terms", href: "/terms" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600 font-sans">
                Freepiker
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-sans"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </nav>
        </header>

        <div className="md:hidden">
          <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white">
            <div className="flex justify-around py-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center text-xs text-gray-600 font-sans"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <main className="flex-grow font-sans">{children}</main>

        <footer className="bg-gray-900 text-white py-12 font-sans">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm">
                  © 2025 Freepiker. All rights reserved.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a
                    href="https://t.me/freepiker24bot"
                    className="text-gray-400 hover:text-white"
                  >
                    Freepiker24bot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
