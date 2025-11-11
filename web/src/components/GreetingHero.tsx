"use client";

import { useEffect, useMemo, useState } from "react";

type Highlight = {
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    title: "Real-time greeting",
    description:
      "The message adapts to your local time so it always feels personal.",
  },
  {
    title: "Lightweight UI",
    description:
      "Built with modern Next.js 14 primitives, Tailwind styling, and zero backend dependencies.",
  },
  {
    title: "Deployment ready",
    description:
      "Pre-configured for instant Vercel deployment with linting, type checking, and build scripts.",
  },
];

function formatGreeting(date: Date): string {
  const hour = date.getHours();
  if (hour < 5) return "Burning the midnight oil?";
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  if (hour < 22) return "Good evening";
  return "Still awake";
}

function formatTime(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function GreetingHero() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(interval);
  }, []);

  const greeting = useMemo(() => formatGreeting(now), [now]);
  const timeLabel = useMemo(() => formatTime(now), [now]);
  const dateLabel = useMemo(() => formatDate(now), [now]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 text-white shadow-xl shadow-blue-500/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.6),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.45),_transparent_50%)]" />
      <div className="flex flex-col gap-8 p-10 md:p-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            Hi, there
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {greeting}! Let&apos;s build something delightful today.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            This lightweight dashboard proves everything is wired up and ready.
            Extend it into your next big idea without touching any backend
            setup.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.22em] text-white/60">
              Local time
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">{timeLabel}</p>
            <p className="text-sm text-white/70">{dateLabel}</p>
          </div>
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
            >
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://nextjs.org/docs"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            target="_blank"
            rel="noreferrer"
          >
            Explore Next.js docs
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js"
            className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            target="_blank"
            rel="noreferrer"
          >
            Browse templates
          </a>
        </div>
      </div>
    </section>
  );
}
