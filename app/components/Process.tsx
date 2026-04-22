import { WHATSAPP_URL } from "@/lib/contact";

const steps = [
  {
    n: "1",
    title: "Escríbeme por WhatsApp",
    desc: "Un mensaje sencillo es suficiente. Yo te contesto personalmente.",
  },
  {
    n: "2",
    title: "Cuéntame tu caso",
    desc: "Me compartes qué te pasa o qué necesitas revisar. Con total confianza.",
  },
  {
    n: "3",
    title: "Agendamos tu cita",
    desc: "Elegimos el día y la hora que más te convenga, presencial o en línea.",
  },
  {
    n: "4",
    title: "Recibes atención personal",
    desc: "Te atiendo con calma, te explico todo y acordamos los próximos pasos.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand)]">
            Cómo agendar
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Pedir tu cita es muy sencillo
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Solo cuatro pasos. Sin formularios complicados, sin vueltas.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute left-[calc(100%-1rem)] top-7 h-0.5 w-8 bg-rose-200"
                />
              )}
              <div className="flex h-full flex-col rounded-2xl border border-rose-100 bg-[var(--color-brand-soft)] p-6">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand)] text-white font-display text-2xl font-bold shadow-md"
                >
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-base text-slate-700">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[var(--color-wa)] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-rose-900/10 hover:bg-[var(--color-wa-dark)] transition-colors active:scale-[0.98]"
          >
            <svg aria-hidden="true" viewBox="0 0 32 32" width="24" height="24" className="fill-white">
              <path d="M16.056 25.543c-1.705 0-3.395-.46-4.887-1.332L6.82 25.338l1.132-4.173a9.52 9.52 0 0 1-1.462-5.066c0-5.254 4.283-9.521 9.55-9.521 5.264 0 9.542 4.267 9.542 9.521 0 5.255-4.278 9.522-9.542 9.522zm0-20.957c-6.304 0-11.437 5.115-11.437 11.417 0 2.007.534 3.966 1.539 5.69L3 28l5.484-1.431a11.466 11.466 0 0 0 5.572 1.425h.005c6.303 0 11.443-5.116 11.443-11.418 0-3.053-1.196-5.923-3.367-8.08-2.168-2.155-5.045-3.345-8.08-3.345z"/>
            </svg>
            Empezar ahora por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
