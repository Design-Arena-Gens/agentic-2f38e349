import Link from "next/link";
import { GreetingHero } from "@/components/GreetingHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-sky-50 text-zinc-900">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
        <GreetingHero />

        <section className="grid gap-10 rounded-3xl border border-zinc-200 bg-white/70 p-10 shadow-xl shadow-sky-100 backdrop-blur md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">
              Ready for your ideas.
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Extend this starter by adding routes in the{" "}
              <code className="rounded-md bg-zinc-900 px-1.5 py-1 text-xs font-semibold text-white">
                src/app
              </code>{" "}
              directory. Components live inside{" "}
              <code className="rounded-md bg-zinc-900 px-1.5 py-1 text-xs font-semibold text-white">
                src/components
              </code>
              , and global styling is handled by Tailwind CSS.
            </p>
            <p className="mt-4 text-lg text-zinc-600">
              The project ships with strict TypeScript, ESLint, and PostCSS so
              you can scale confidently without extra setup.
            </p>
          </div>
          <aside className="flex flex-col gap-4 rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-6 text-sm text-zinc-700">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Quick links
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="https://tailwindcss.com/docs"
                    className="group inline-flex items-center gap-2 text-sky-600 transition hover:text-sky-700"
                    target="_blank"
                  >
                    Tailwind CSS Docs
                    <span className="text-sky-500 transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://nextjs.org/learn"
                    className="group inline-flex items-center gap-2 text-sky-600 transition hover:text-sky-700"
                    target="_blank"
                  >
                    Interactive Next.js guides
                    <span className="text-sky-500 transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://vercel.com/docs"
                    className="group inline-flex items-center gap-2 text-sky-600 transition hover:text-sky-700"
                    target="_blank"
                  >
                    Deploy on Vercel
                    <span className="text-sky-500 transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-zinc-900 px-4 py-3 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Tip
              </p>
              <p className="mt-2 text-sm">
                Duplicate this project, plug in your API routes, and publish via{" "}
                <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
                  vercel deploy
                </code>{" "}
                when you are ready.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
