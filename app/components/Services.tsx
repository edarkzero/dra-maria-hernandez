import { WHATSAPP_URL } from "@/lib/contact";

type Service = { title: string; description: string; icon: React.ReactNode };

// EDITAR: ajusta estos servicios a los que realmente ofreces
const services: Service[] = [
  {
    title: "Consulta médica general",
    description:
      "Evaluación completa para cualquier síntoma o chequeo de rutina. Una conversación tranquila para entender qué te pasa y qué hacer.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "Seguimiento de tratamiento",
    description:
      "¿Ya estás en tratamiento? Te acompaño paso a paso para asegurarnos de que todo marche bien y ajustar lo que haga falta.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
  },
  {
    title: "Orientación y segunda opinión",
    description:
      "¿Tienes dudas sobre un diagnóstico o tratamiento? Revisamos tu caso con calma y te doy una opinión honesta y clara.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Consulta en línea",
    description:
      "¿Estás fuera del país o no puedes movilizarte? Nos conectamos por videollamada desde donde estés, a la hora que te convenga.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[var(--color-brand-soft)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand)]">
            Servicios
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            ¿En qué puedo ayudarte?
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Estas son las consultas que ofrezco. Si tienes dudas sobre cuál necesitas,
            escríbeme y lo vemos juntos.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-rose-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                {s.icon}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-base text-slate-600 leading-relaxed flex-1">
                {s.description}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-[var(--color-brand)] font-semibold hover:text-[var(--color-brand-dark)] transition-colors"
              >
                Preguntar por WhatsApp
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
