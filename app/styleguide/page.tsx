import Link from "next/link";

const palette = [
  { name: "Surface", value: "#fbf9f8", className: "bg-surface" },
  { name: "Lage surface", value: "#f5f3f2", className: "bg-surface-container-low" },
  {
    name: "Laagste surface",
    value: "#ffffff",
    className: "bg-surface-container-lowest",
  },
  { name: "Primair", value: "#5f5e5e", className: "bg-primary" },
  { name: "Gedimd primair", value: "#535252", className: "bg-primary-dim" },
  { name: "Inverse surface", value: "#0d0e0e", className: "bg-inverse-surface" },
];

const principles = [
  "Gebruik toonverschillen en spacing om secties te scheiden in plaats van dividers.",
  "Houd radii terughoudend: scherpe hoeken met alleen een lichte verzachting op tactiele elementen.",
  "Gebruik blur en diffusion shadows alleen op zwevende lagen.",
  "Laat grotere blokken ademen met royale sectiespacing en asymmetrische compositie.",
];

export default function StyleguidePage() {
  return (
    <div className="grid gap-14 pb-20">
      <section className="grid gap-6 py-6 sm:py-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end">
        <div className="grid gap-5">
          <p className="section-label">Tailwind styleguide</p>
          <h1 className="max-w-4xl text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.94] font-semibold tracking-[-0.02em]">
            Silent Precision vertaald naar tokens, surfaces en interactiepatronen.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-on-surface-muted sm:text-lg">
            Deze pagina documenteert het design system direct in de app. Elk voorbeeld is
            opgebouwd met Tailwind utilities en de custom theme tokens uit de globale
            stylesheet.
          </p>
        </div>
        <div className="glass-panel rounded-soft p-6">
          <p className="section-label">Gebruik</p>
          <p className="mt-4 text-sm leading-6 text-on-surface-muted">
            Gebruik `bg-surface-container-low`, `text-on-surface`, `shadow-diffusion` en
            `rounded-soft` als basis voor deze visuele taal. Vermijd borders; laat
            contrast ontstaan door materiaal en ruimte.
          </p>
        </div>
      </section>

      <section className="grid gap-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-label">Palet</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em]">
              Tonale diepte boven vlakke logica
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {palette.map((color) => (
            <div key={color.name} className="soft-panel rounded-soft p-2">
              <div className="ambient-card rounded-soft p-4">
                <div className={`h-32 rounded-sharp ${color.className}`} />
                <div className="mt-4 grid gap-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.05em] text-primary">
                    {color.name}
                  </p>
                  <p className="text-sm text-on-surface-muted">{color.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
        <div className="grid gap-6">
          <div>
            <p className="section-label">Typography</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em]">
              Een redactionele stem met strakke lockups
            </h2>
          </div>
          <div className="soft-panel rounded-soft p-2">
            <div className="ambient-card rounded-soft p-8">
              <p className="text-[3.5rem] leading-[0.92] font-semibold tracking-[-0.02em] text-on-surface">
                Display LG
              </p>
              <p className="mt-5 text-3xl leading-tight font-semibold tracking-[-0.02em]">
                Headline LG
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-on-surface-muted">
                Manrope blijft overal leidend. Grote koppen trekken de compositie strak,
                terwijl body copy lucht houdt door een zachtere toon en comfortabel
                ritme.
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.05em] text-primary">
                Label MD / gegraveerde uppercase
              </p>
            </div>
          </div>
        </div>
        <div className="soft-panel rounded-soft p-2">
          <div className="ambient-card rounded-soft p-8">
            <p className="section-label">Doen</p>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-on-surface-muted">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="rounded-sharp bg-surface-container-low px-4 py-4"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <div>
          <p className="section-label">Components</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em]">
            Premium primitives zonder harde dividers
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="soft-panel rounded-soft p-2">
            <div className="ambient-card grid gap-6 rounded-soft p-8">
              <div className="flex flex-wrap gap-3">
                <button className="metal-button rounded-soft px-5 py-3 text-sm font-semibold tracking-[0.04em]">
                  Primaire actie
                </button>
                <button className="ghost-button rounded-soft px-5 py-3 text-sm font-semibold tracking-[0.04em] text-primary">
                  Tertiaire actie
                </button>
              </div>

              <div className="grid gap-3">
                <label className="text-xs font-semibold uppercase tracking-[0.05em] text-primary">
                  Projectaanvraag
                </label>
                <div className="field-shell rounded-soft px-4 py-3">
                  <input
                    aria-label="Projectaanvraag"
                    className="w-full bg-transparent text-sm text-on-surface outline-none placeholder:text-on-surface-muted/70"
                    placeholder="Vertel wat moeiteloos moet aanvoelen."
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-surface-container-high px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-on-surface-muted">
                  Performance
                </span>
                <span className="rounded-full bg-inverse-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-inverse-primary">
                  Geselecteerd
                </span>
              </div>
            </div>
          </div>

          <div className="soft-panel rounded-soft p-2">
            <div className="ambient-card rounded-soft p-8">
              <p className="section-label">Lijstgedrag</p>
              <div className="mt-5 grid gap-4">
                {["Case-opbouw", "Performanceverhaal", "Experimentele labnotities"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-sharp px-4 py-4 text-sm text-on-surface-muted transition-colors duration-300 ease-out hover:bg-surface-container-low"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)]">
        <div className="soft-panel rounded-soft p-2">
          <div className="ambient-card rounded-soft p-8">
            <p className="section-label">Layoutlogica</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="rounded-sharp bg-surface p-6">
                <p className="text-sm uppercase tracking-[0.05em] text-primary">
                  Hoofdcontent op surface
                </p>
                <p className="mt-4 max-w-xl text-sm leading-6 text-on-surface-muted">
                  Secties scheiden via witruimte en een subtiele materiaalverschuiving,
                  niet via zichtbare lijnen.
                </p>
              </div>
              <div className="rounded-sharp bg-surface-container-low p-6">
                <p className="text-sm uppercase tracking-[0.05em] text-primary">Zijpaneel</p>
                <p className="mt-4 text-sm leading-6 text-on-surface-muted">
                  Aangrenzende containers moeten aanvoelen alsof ze uit dezelfde
                  materiaalfamilie zijn gevormd.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-soft p-8">
          <p className="section-label">Volgende stap</p>
          <p className="mt-4 text-sm leading-6 text-on-surface-muted">
            Vanuit hier kunnen we dit verder doortrekken naar echte portfolio-secties,
            herbruikbare React componenten of een design-token export voor Figma.
          </p>
          <Link
            className="mt-6 inline-flex rounded-soft bg-inverse-surface px-5 py-3 text-sm font-semibold tracking-[0.04em] text-inverse-primary transition-opacity duration-300 ease-out hover:opacity-90"
            href="/contact"
          >
            Ga naar contact
          </Link>
        </div>
      </section>
    </div>
  );
}
