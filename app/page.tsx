import Link from "next/link";

const principles = [
  "Scheid vlakken met toonverschillen in plaats van borders",
  "Gebruik redactionele witruimte en asymmetrie",
  "Laat interacties traag en gedempt aanvoelen",
];

export default function HomePage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.85fr)] lg:items-start">
      <section className="editorial-copy grid gap-8 py-8 sm:py-12">
        <p className="section-label">Silent Precision</p>
        <div className="grid gap-6">
          <h1 className="max-w-4xl text-[clamp(3rem,8vw,6rem)] leading-[0.92] font-semibold tracking-[-0.02em] text-on-surface">
            Verfijnd charcoal en zilver voor een portfolio dat gecureerd voelt, niet als
            template.
          </h1>
          <p className="max-w-2xl text-base leading-7 sm:text-lg">
            Deze basis vertaalt je designstrategie naar Tailwind tokens, een premium
            layouttaal en herbruikbare UI-primitives. De interface leunt op tonal depth,
            editorial whitespace en subtiele glasachtige overlays in plaats van standaard
            SaaS-patronen.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            className="metal-button rounded-soft px-5 py-3 text-sm font-semibold tracking-[0.04em]"
            href="/styleguide"
          >
            Open de styleguide
          </Link>
          <Link
            className="ghost-button rounded-soft px-5 py-3 text-sm font-semibold tracking-[0.04em] text-primary"
            href="/work"
          >
            Bekijk werkstructuur
          </Link>
        </div>
      </section>

      <aside className="grid gap-4 py-8 sm:py-12">
        <div className="soft-panel rounded-soft p-2">
          <div className="ambient-card rounded-soft p-7">
            <p className="section-label">Kernregels</p>
            <ul className="mt-5 grid gap-4">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="rounded-sharp bg-surface-container-low px-4 py-4 text-sm leading-6 text-on-surface-muted"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="glass-panel rounded-soft p-7">
          <p className="section-label">Materiaalnotities</p>
          <p className="mt-4 text-sm leading-6 text-on-surface-muted">
            Primaire acties gebruiken een ingetogen metallic gradient, cards krijgen hun
            diepte via tonal layering en de navigatie zweeft als mat glas in plaats van
            zichtbaar chroom te gebruiken.
          </p>
        </div>
      </aside>
    </div>
  );
}
