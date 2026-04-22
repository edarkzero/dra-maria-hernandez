import { MPPS_ID, COLEGIO_MEDICO_ID } from "@/lib/contact";

export default function About() {
  // EDITAR: Reemplaza con los datos reales (universidad, especialización, años, etc.)
  const credentials = [
    "Médico cirujano titulada con post grado en Ginecología y Obstetricia",
    "Formación continua y certificaciones actualizadas",
    "Atención a pacientes dentro y fuera de Venezuela",
    "Consultas por videollamada con total privacidad",
  ];

  return (
    <section id="sobre-mi" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand)]">
            Sobre mí
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Tu salud merece ser escuchada
          </h2>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-lg text-slate-700">
            {/* EDITAR: tu biografía real */}
            <p>
              Soy la <strong>Dra. María Hernández N.</strong>, médico dedicada a
              brindar atención cercana, clara y profesional a cada uno de mis
              pacientes. Creo que una buena consulta empieza escuchando con
              paciencia.
            </p>
            <p>
              Mi consulta está pensada para personas reales: te explico todo
              con palabras sencillas, sin tecnicismos, y tomamos decisiones
              juntos sobre tu salud. No hay preguntas tontas: todas importan.
            </p>
            <p>
              Todas mis consultas son <strong>100% en línea por videollamada</strong>,
              lo que me permite acompañar a pacientes dentro de Venezuela y a
              quienes están en el exterior, sin que tengas que moverte de casa.
            </p>
          </div>

          <div className="md:col-span-2 space-y-5">
            <div className="rounded-2xl border-2 border-[var(--color-brand)] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 22s-8-4-8-12V5l8-3 8 3v5c0 8-8 12-8 12z" />
                  </svg>
                </span>
                <h3 className="font-display text-lg font-semibold">
                  Matrícula oficial
                </h3>
              </div>
              <dl className="mt-4 space-y-2.5 text-base">
                <div className="flex items-baseline justify-between gap-3 border-b border-rose-100 pb-2">
                  <dt className="text-slate-600">MPPS</dt>
                  <dd className="font-semibold text-[var(--color-brand-dark)] tabular-nums">
                    Nº {MPPS_ID}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-slate-600">Colegio Médico</dt>
                  <dd className="font-semibold text-[var(--color-brand-dark)] tabular-nums">
                    Nº {COLEGIO_MEDICO_ID}
                  </dd>
                </div>
              </dl>
              <p className="mt-3 text-xs text-slate-500 leading-snug">
                Matrícula de Sanidad vigente. Ejercicio profesional registrado
                ante las autoridades de salud de Venezuela.
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-[var(--color-brand-soft)] p-6">
              <h3 className="font-display text-xl font-semibold">
                Formación y experiencia
              </h3>
              <ul className="mt-4 space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-slate-700">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"
                    >
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-base leading-snug">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
