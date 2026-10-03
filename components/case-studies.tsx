import { Car, Check, Cloud, Layers } from 'lucide-react'
import { caseStudies } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

const icons = [Cloud, Layers, Car]

export function CaseStudies() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="projects-title"
          eyebrow="02 / Case Studies"
          title="Selected Projects"
          description="Hands-on evaluation work spanning large language models, multimodal generation, and safety-critical perception systems."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => {
            const Icon = icons[i]
            return (
              <article
                key={study.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-accent">
                    {study.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">{study.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {study.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 grid grid-cols-3 gap-2 rounded-lg bg-secondary/60 p-3">
                  {study.stats.map((s) => (
                    <div key={s.label}>
                      <dd className="truncate font-mono text-sm font-semibold text-foreground">{s.value}</dd>
                      <dt className="text-xs text-muted-foreground">{s.label}</dt>
                    </div>
                  ))}
                </dl>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-6" aria-label="Tools used">
                  {study.stack.map((t) => (
                    <li key={t} className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
