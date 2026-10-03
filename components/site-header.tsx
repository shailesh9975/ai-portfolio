import { profile } from '@/lib/portfolio-data'

const links = [
  { href: '#framework', label: 'Framework' },
  { href: '#projects', label: 'Projects' },
  { href: '#prompts', label: 'Prompts' },
  { href: '#stack', label: 'Stack' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-lg bg-primary font-mono text-sm text-primary-foreground"
          >
            SG
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href} className="hidden md:block">
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="ml-2 rounded-md border border-border px-3 py-2 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
