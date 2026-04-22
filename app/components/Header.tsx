import { WHATSAPP_URL, DOCTOR_SHORT } from "@/lib/contact";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo agendar" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rose-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display text-lg sm:text-xl font-semibold text-[var(--color-brand-dark)]"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] text-white font-bold shadow-sm"
          >
            M
          </span>
          <span className="hidden sm:inline">{DOCTOR_SHORT}</span>
          <span className="sm:hidden">Dra. María</span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-7"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-slate-700 hover:text-[var(--color-brand)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-brand-dark)] transition-colors"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            className="fill-white"
          >
            <path d="M17.5 14.3c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.2.2-.4 0-.2 0-.3-.1-.5 0-.1-.6-1.5-.9-2-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.4-.3zM12 20.9c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.9-9.8 9.9zm8.4-18.3C18.2.4 15.2-.7 12 0 5.5 0 .2 5.3.2 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.5-1.7c1.7.9 3.6 1.4 5.5 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.4-8.3z"/>
          </svg>
          <span className="hidden xs:inline sm:inline">Escribir</span>
        </a>
      </div>
    </header>
  );
}
