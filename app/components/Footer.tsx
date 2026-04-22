import {
  DOCTOR_NAME,
  PHONE_DISPLAY,
  TEL_URL,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  CREDENTIALS_LINE,
} from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-[var(--color-brand-dark)] text-rose-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-brand-dark)] font-bold"
              >
                M
              </span>
              <span className="font-display text-xl font-semibold text-white">
                {DOCTOR_NAME}
              </span>
            </div>
            <p className="mt-4 text-rose-100/90 max-w-xs">
              Consulta médica 100% en línea. Atención cercana, clara y profesional
              desde donde estés.
            </p>
            <p className="mt-3 text-sm text-rose-100/80 font-medium">
              {CREDENTIALS_LINE}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-white">Contacto</h3>
            <ul className="mt-4 space-y-2 text-rose-100/90">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={TEL_URL} className="hover:text-white transition-colors">
                  Llamar: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-white">Enlaces</h3>
            <ul className="mt-4 space-y-2 text-rose-100/90">
              <li><a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#proceso" className="hover:text-white transition-colors">Cómo agendar</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-rose-400/20 pt-6 text-sm text-rose-100/80">
          <p>© {year} {DOCTOR_NAME}. Todos los derechos reservados.</p>
          <p>Hecho con cariño en Venezuela.</p>
        </div>
      </div>
    </footer>
  );
}
