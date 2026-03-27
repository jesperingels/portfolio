import Link from "next/link";

export default function WorkInProgressPage() {
  return (
    <section className="grid gap-8 py-8 sm:py-12">
      <h1 className="max-w-4xl text-[clamp(3rem,8vw,5.5rem)] leading-[0.92] font-semibold tracking-[-0.02em] text-on-surface">
        Work in progress
      </h1>
      <div>
        <Link
          className="metal-button inline-flex rounded-soft px-5 py-3 text-sm font-semibold tracking-[0.04em]"
          href="/"
        >
          Terug naar home
        </Link>
      </div>
    </section>
  );
}
