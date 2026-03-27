export default function ArticlesPage() {
  return (
    <section className="grid gap-6 py-8 sm:py-12">
      <p className="section-label">Artikelen</p>
      <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.96] font-semibold tracking-[-0.02em]">
        Ruimte voor teksten over performance, UX en het vak achter frontend-beslissingen.
      </h1>
      <p className="max-w-2xl text-base leading-7 text-on-surface-muted">
        Deze pagina is bedoeld voor SEO-gedreven artikelen over frontend, Core Web Vitals,
        UX en tooling.
      </p>
    </section>
  );
}
