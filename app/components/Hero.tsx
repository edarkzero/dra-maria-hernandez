import Image from "next/image";
import { WHATSAPP_URL, DOCTOR_NAME, CREDENTIALS_LINE } from "@/lib/contact";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[var(--color-brand-soft)] via-white to-white"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-rose-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 py-14 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-[var(--color-brand-dark)] shadow-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-brand)]" />
            Consulta médica 100% en línea
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
            {DOCTOR_NAME}
          </h1>

          <p className="mt-3 text-sm font-medium text-[var(--color-brand-dark)]/80">
            {CREDENTIALS_LINE}
          </p>

          <p className="mt-5 text-lg sm:text-xl text-slate-700 max-w-xl mx-auto md:mx-0">
            {/* EDITAR: puedes personalizar este mensaje de bienvenida */}
            Cuido tu salud con cariño, cercanía y profesionalismo.
            Consultas por videollamada desde donde estés, en un lenguaje
            que puedes entender.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--color-wa)] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-rose-900/10 hover:bg-[var(--color-wa-dark)] transition-colors active:scale-[0.98]"
            >
              <svg aria-hidden="true" viewBox="0 0 32 32" width="22" height="22" className="fill-white">
                <path d="M16.056 25.543c-1.705 0-3.395-.46-4.887-1.332L6.82 25.338l1.132-4.173a9.52 9.52 0 0 1-1.462-5.066c0-5.254 4.283-9.521 9.55-9.521 5.264 0 9.542 4.267 9.542 9.521 0 5.255-4.278 9.522-9.542 9.522zm0-20.957c-6.304 0-11.437 5.115-11.437 11.417 0 2.007.534 3.966 1.539 5.69L3 28l5.484-1.431a11.466 11.466 0 0 0 5.572 1.425h.005c6.303 0 11.443-5.116 11.443-11.418 0-3.053-1.196-5.923-3.367-8.08-2.168-2.155-5.045-3.345-8.08-3.345z"/>
              </svg>
              Agendar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-[var(--color-brand)] bg-white px-7 py-4 text-base font-semibold text-[var(--color-brand-dark)] hover:bg-rose-50 transition-colors"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0 text-left">
            <Stat value="100%" label="En línea" />
            <Stat value="Personal" label="Atención cercana" />
            <Stat value="LATAM" label="y exterior" />
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-rose-300/40 to-rose-100/0 blur-2xl" aria-hidden="true" />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem] overflow-hidden rounded-[2rem] ring-8 ring-white shadow-2xl shadow-rose-900/10">
              <Image
                src="/doctora.jpeg"
                alt="Retrato de la Dra. María Hernández N."
                fill
                priority
                sizes="(max-width: 768px) 16rem, 22rem"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-rose-900/10 ring-1 ring-rose-100">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-[var(--color-brand)]">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>
                </span>
                <div className="leading-tight">
                  <div className="text-xs text-slate-500">Consultas con</div>
                  <div className="font-semibold text-[var(--color-brand-dark)]">cariño y calma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/70 border border-rose-100 px-3 py-2.5">
      <div className="font-display text-xl font-semibold text-[var(--color-brand-dark)] leading-tight">
        {value}
      </div>
      <div className="text-xs text-slate-600 leading-tight">{label}</div>
    </div>
  );
}
