import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/articles", label: "Articles" },
  { href: "/lab", label: "Lab" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Jesper Ingels | Frontend & Performance",
  description:
    "Minimal Next.js foundation for a portfolio focused on frontend, performance, and UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/">
              Jesper Ingels
            </Link>
            <nav aria-label="Primary">
              <ul className="nav-list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="container page-content">{children}</main>
      </body>
    </html>
  );
}
