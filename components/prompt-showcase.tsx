'use client'

import { useState } from 'react'
import { ArrowRight, Sparkles, TriangleAlert } from 'lucide-react'
import { promptExamples, type PromptExample } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

function average(scores: Record<string, number>) {
  const values = Object.values(scores)
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length)
}

function OutputCard({
  variant,
  data,
}: {
  variant: 'raw' | 'tuned'
  data: PromptExample['raw']
}) {
  const isTuned = variant === 'tuned'
  const overall = average(data.scores)

  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border p-5',
        isTuned ? 'border-primary/50 bg-primary/5' : 'border-border bg-card',
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold">
          {isTuned ? (
            <Sparkles className="size-4 text-accent" aria-hidden="true" />
          ) : (
            <TriangleAlert className="size-4 text-warning" aria-hidden="true" />
          )}
          {isTuned ? 'Tuned Prompt Output' : 'Raw Prompt Output'}
        </h3>
        <p className="flex items-baseline gap-1">
          <span className={cn('font-mono text-2xl font-semibold', isTuned ? 'text-success' : 'text-warning')}>
            {overall}
          </span>
          <span className="text-xs text-muted-foreground">/100</span>
        </p>
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Prompt</p>
      <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-background/70 p-3 font-mono text-xs leading-relaxed text-accent">
        {data.prompt}
      </pre>

      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Model Output</p>
      <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">{data.output}</p>

      <ul className="mt-auto flex flex-col gap-2.5 pt-6" aria-label="Quality scores">
        {Object.entries(data.scores).map(([label, value]) => (
          <li key={label}>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">{label}</span>
              <span className="font-mono">{value}</span>
            </div>
            <div
              className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary"
              role="progressbar"
              aria-label={label}
              aria-valuenow={value}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className={cn(
                  'h-full rounded-full transition-[width] duration-700',
                  isTuned ? 'bg-primary' : value < 60 ? 'bg-destructive' : 'bg-warning',
                )}
                style={{ width: `${value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PromptShowcase() {
  const [activeId, setActiveId] = useState(promptExamples[0].id)
  const example = promptExamples.find((e) => e.id === activeId) ?? promptExamples[0]
  const lift = average(example.tuned.scores) - average(example.raw.scores)

  return (
    <section id="prompts" aria-labelledby="prompts-title" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="prompts-title"
          eyebrow="03 / Prompt Engineering"
          title="Prompt Optimization Showcase"
          description="Side-by-side comparisons of baseline vs. engineered prompts, scored against the evaluation framework."
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div role="tablist" aria-label="Prompt examples" className="inline-flex w-fit rounded-lg border border-border bg-card p-1">
            {promptExamples.map((e) => (
              <button
                key={e.id}
                type="button"
                role="tab"
                aria-selected={e.id === activeId}
                onClick={() => setActiveId(e.id)}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm transition-colors',
                  e.id === activeId
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {e.label}
              </button>
            ))}
          </div>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 font-mono text-xs text-success">
            Quality lift +{lift} pts
          </p>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Task:</span> {example.task}
        </p>

        <div key={example.id} className="mt-6 grid items-stretch gap-4 animate-in fade-in duration-300 md:grid-cols-[1fr_auto_1fr]">
          <OutputCard variant="raw" data={example.raw} />
          <div className="flex items-center justify-center" aria-hidden="true">
            <span className="flex size-10 rotate-90 items-center justify-center rounded-full border border-border bg-card text-accent md:rotate-0">
              <ArrowRight className="size-4" />
            </span>
          </div>
          <OutputCard variant="tuned" data={example.tuned} />
        </div>
      </div>
    </section>
  )
}
