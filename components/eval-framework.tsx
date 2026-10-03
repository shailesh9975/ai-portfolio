'use client'

import { useState } from 'react'
import {
  Brain,
  CheckCircle2,
  FlaskConical,
  Gauge,
  ListChecks,
  MessagesSquare,
  Mic,
  Scale,
  ShieldCheck,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { evalDimensions } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const icons: Record<string, LucideIcon> = {
  accuracy: Target,
  safety: ShieldCheck,
  hallucination: Brain,
  tone: Mic,
  instruction: ListChecks,
  conciseness: Gauge,
  context: MessagesSquare,
  bias: Scale,
}

export function EvalFramework() {
  const [activeId, setActiveId] = useState(evalDimensions[0].id)
  const active = evalDimensions.find((d) => d.id === activeId) ?? evalDimensions[0]
  const ActiveIcon = icons[active.id]

  return (
    <section id="framework" aria-labelledby="framework-title" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="framework-title"
          eyebrow="01 / Framework"
          title="8-Dimension LLM Evaluation Framework"
          description="A structured rubric I use to score generative AI output. Select a dimension to see its scoring rubric and testing methodology."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:items-start">
          <div role="tablist" aria-label="Evaluation dimensions" className="grid grid-cols-2 gap-3 lg:col-span-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {evalDimensions.map((d, i) => {
              const Icon = icons[d.id]
              const isActive = d.id === activeId
              return (
                <button
                  key={d.id}
                  type="button"
                  role="tab"
                  id={`tab-${d.id}`}
                  aria-selected={isActive}
                  aria-controls="dimension-panel"
                  onClick={() => setActiveId(d.id)}
                  className={cn(
                    'group flex flex-col items-start gap-3 rounded-xl border p-4 text-left transition-all',
                    isActive
                      ? 'border-primary bg-primary/10 shadow-[0_0_0_1px_var(--primary)]'
                      : 'border-border bg-card hover:border-accent/40 hover:bg-secondary',
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={cn(
                        'flex size-9 items-center justify-center rounded-lg transition-colors',
                        isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-accent',
                      )}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-snug">{d.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d.short}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <div
            id="dimension-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="rounded-xl border border-border bg-card p-6 lg:col-span-2"
          >
            <div key={active.id} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <ActiveIcon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{active.name}</h3>
                  <p className="font-mono text-xs text-accent">{active.metric}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.description}</p>

              <h4 className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <ListChecks className="size-3.5" aria-hidden="true" />
                Scoring Rubric
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {active.rubric.map((r) => (
                  <li key={r.score} className="flex gap-3 rounded-lg bg-secondary/60 p-3">
                    <span
                      className={cn(
                        'flex size-7 shrink-0 items-center justify-center rounded-md font-mono text-sm font-semibold',
                        r.score === '5' && 'bg-success/15 text-success',
                        r.score === '3' && 'bg-warning/15 text-warning',
                        r.score === '1' && 'bg-destructive/15 text-destructive',
                      )}
                    >
                      {r.score}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{r.label}</p>
                      <p className="text-xs leading-relaxed text-muted-foreground">{r.criteria}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <FlaskConical className="size-3.5" aria-hidden="true" />
                Testing Methodology
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {active.methods.map((m) => (
                  <li key={m} className="flex gap-2 text-sm leading-relaxed">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
