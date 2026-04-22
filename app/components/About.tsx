export default function About() {
  // EDITAR: Reemplaza con los datos reales (universidad, especialización, años, etc.)
  const credentials = [
    "Médico Cirujano titulada",
    "Amplia experiencia en atención primaria",
    "Formación continua y certificaciones actualizadas",
    "Atención a pacientes dentro y fuera de Venezuela",
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
              Soy la <strong>Dra. Maria Hernandez N.</strong>, médico dedicada a
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
              Atiendo tanto de forma <strong>presencial</strong> como{" "}
              <strong>en línea</strong>, lo que me permite acompañar a pacientes
              dentro de Venezuela y a quienes están en el exterior.
            </p>
          </div>

          <div className="md:col-span-2">
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
