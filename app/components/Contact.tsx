import {
  WHATSAPP_URL,
  TEL_URL,
  PHONE_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/contact";

export default function Contact() {
  return (
    <section id="contacto" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand)]">
            Contacto
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Hablemos de tu salud
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Elige el canal que prefieras. Te respondo personalmente lo antes posible.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <ContactTile
            href={WHATSAPP_URL}
            external
            title="WhatsApp"
            subtitle={PHONE_DISPLAY}
            cta="Escribir ahora"
            accent="bg-[var(--color-wa)] hover:bg-[var(--color-wa-dark)]"
            iconBg="bg-green-50 text-[var(--color-wa)]"
            icon={
              <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
                <path d="M16.056 25.543c-1.705 0-3.395-.46-4.887-1.332L6.82 25.338l1.132-4.173a9.52 9.52 0 0 1-1.462-5.066c0-5.254 4.283-9.521 9.55-9.521 5.264 0 9.542 4.267 9.542 9.521 0 5.255-4.278 9.522-9.542 9.522zm0-20.957c-6.304 0-11.437 5.115-11.437 11.417 0 2.007.534 3.966 1.539 5.69L3 28l5.484-1.431a11.466 11.466 0 0 0 5.572 1.425h.005c6.303 0 11.443-5.116 11.443-11.418 0-3.053-1.196-5.923-3.367-8.08-2.168-2.155-5.045-3.345-8.08-3.345z"/>
              </svg>
            }
          />
          <ContactTile
            href={TEL_URL}
            title="Teléfono"
            subtitle={PHONE_DISPLAY}
            cta="Llamar"
            accent="bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)]"
            iconBg="bg-[var(--color-brand-soft)] text-[var(--color-brand)]"
            icon={
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            }
          />
          <ContactTile
            href={INSTAGRAM_URL}
            external
            title="Instagram"
            subtitle={INSTAGRAM_HANDLE}
            cta="Seguir"
            accent="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 hover:opacity-90"
            iconBg="bg-rose-50 text-[var(--color-brand)]"
            icon={
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            }
          />
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Horarios de atención al mensaje por WhatsApp: lunes a viernes, en horario hábil.
        </p>
      </div>
    </section>
  );
}

function ContactTile({
  href,
  external,
  title,
  subtitle,
  cta,
  accent,
  iconBg,
  icon,
}: {
  href: string;
  external?: boolean;
  title: string;
  subtitle: string;
  cta: string;
  accent: string;
  iconBg: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center text-center rounded-2xl border border-rose-100 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
    >
      <span
        aria-hidden="true"
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg}`}
      >
        {icon}
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-slate-600 text-base">{subtitle}</p>
      <span
        className={`mt-5 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors ${accent}`}
      >
        {cta}
      </span>
    </a>
  );
}
