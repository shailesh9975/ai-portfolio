import { techStack } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="stack-title"
          eyebrow="04 / Toolkit"
          title="Tech Stack"
          description="Platforms and tools I use daily for evaluation pipelines, API testing, annotation QA, and defect tracking."
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {techStack.map((tool) => (
            <li
              key={tool}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-accent"
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
