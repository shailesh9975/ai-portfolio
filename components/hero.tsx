import { ArrowRight, LayoutGrid } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const stats = [
  { value: '4+', label: 'Years in AI QA' },
  { value: '8', label: 'Eval dimensions' },
  { value: '25K+', label: 'Frames audited' },
  { value: '60+', label: 'Defects logged' },
]

export function Hero() {
  const [primaryTitle, ...restTitles] = profile.title.split(' | ')

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgb(139_92_246/0.22),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-accent">
          <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
          Open to AI evaluation roles
        </p>

        <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-pretty text-lg font-medium text-accent md:text-xl">
          {primaryTitle}
          {restTitles.map((t) => (
            <span key={t}>
              <span className="mx-2 text-muted-foreground" aria-hidden="true">
                /
              </span>
              {t}
            </span>
          ))}
        </p>

        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          {
            "4+ years ensuring AI systems are accurate, safe, and reliable. I design evaluation frameworks for LLMs, engineer prompts that measurably improve output quality, and QA multimodal and perception models — from RAG pipelines on AWS Bedrock to ADAS computer-vision datasets."
          }
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#framework"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore Evaluation Framework
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-5 py-3 text-sm font-medium transition-colors hover:border-accent/50"
          >
            <LayoutGrid className="size-4" aria-hidden="true" />
            View Projects
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-5">
              <dt className="text-sm text-muted-foreground">{s.label}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold text-foreground">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
