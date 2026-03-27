import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/wip", label: "Over" },
  { href: "/wip", label: "Werk" },
  { href: "/wip", label: "Artikelen" },
  { href: "/wip", label: "Lab" },
  { href: "/wip", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Jesper Ingels | Frontend & Performance",
  description:
    "Portfoliofundament met een verfijnd charcoal en zilver design system, gebouwd in Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="font-sans text-on-surface">
        <div className="px-4 pb-10 pt-4 sm:px-6 lg:px-10">
          <header className="sticky top-4 z-50 mx-auto max-w-7xl">
            <div className="glass-panel rounded-soft px-5 py-4 sm:px-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <Link
                  className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface"
                  href="/"
                >
                  Jesper Ingels
                </Link>
                <nav aria-label="Primary">
                  <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-on-surface-muted">
                    {navigation.map((item) => (
                      <li key={item.href}>
                        <Link
                          className="rounded-sharp px-2 py-1 transition-colors duration-300 ease-out hover:bg-surface-container-low hover:text-on-surface"
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-7xl pt-10 sm:pt-14">{children}</main>
        </div>
      </body>
    </html>
  );
}
