const faqs = [
  {
    q: "¿Cómo agendo una cita?",
    a: "Escríbeme un mensaje por WhatsApp y coordinamos día y hora. Es la forma más rápida y directa. No necesitas llenar formularios.",
  },
  {
    q: "¿Atiendes consultas en línea?",
    a: "Sí. Ofrezco consultas por videollamada para pacientes que estén fuera de Venezuela o que no puedan trasladarse. Solo necesitas tu teléfono o computador con cámara.",
  },
  {
    q: "¿Cómo realizo el pago?",
    a: "Te explicaré las opciones de pago disponibles al momento de agendar tu cita. Buscamos siempre la alternativa más cómoda para ti.",
  },
  {
    q: "¿Puedo consultar desde el exterior?",
    a: "Por supuesto. Atiendo a muchos pacientes venezolanos que viven fuera del país. Solo necesitamos coordinar un horario que funcione en tu zona horaria.",
  },
  {
    q: "¿Qué información debo tener lista antes de la consulta?",
    a: "Si tienes exámenes, recetas o diagnósticos previos relacionados con tu consulta, tenlos a la mano. Si no tienes nada, no te preocupes: con tu historia ya podemos empezar.",
  },
  {
    q: "¿Atiendes urgencias?",
    a: "Las consultas médicas regulares son programadas. Si estás atravesando una emergencia que ponga en riesgo tu vida, acude de inmediato a un servicio de emergencia. Para todo lo demás, escríbeme y te oriento.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[var(--color-brand-soft)] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand)]">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Respuestas claras a tus dudas
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Si tu pregunta no está aquí, escríbeme por WhatsApp sin pena.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-rose-100 bg-white p-5 sm:p-6 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg sm:text-xl font-semibold text-[var(--color-brand-dark)]">
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)] group-open:rotate-45 transition-transform"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
