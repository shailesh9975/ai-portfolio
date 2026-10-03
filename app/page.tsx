import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { EvalFramework } from '@/components/eval-framework'
import { CaseStudies } from '@/components/case-studies'
import { PromptShowcase } from '@/components/prompt-showcase'
import { TechStack } from '@/components/tech-stack'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <EvalFramework />
        <CaseStudies />
        <PromptShowcase />
        <TechStack />
      </main>
      <SiteFooter />
    </>
  )
}
