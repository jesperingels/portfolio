export default function AboutPage() {
  return (
    <section className="grid gap-6 py-8 sm:py-12">
      <p className="section-label">Over</p>
      <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.96] font-semibold tracking-[-0.02em]">
        Een rustige, heldere portfoliostem voor frontend, UX en performance.
      </h1>
      <p className="max-w-2xl text-base leading-7 text-on-surface-muted">
        Hier komt je persoonlijke positionering: wie je bent, waar je in uitblinkt en hoe
        je werkt als frontend/performance specialist.
      </p>
    </section>
  );
}
