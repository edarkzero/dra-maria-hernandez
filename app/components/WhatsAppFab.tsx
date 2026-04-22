import { WHATSAPP_URL } from "@/lib/contact";

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a la Dra. Maria Hernandez"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3 rounded-full bg-[var(--color-wa)] pl-4 pr-5 py-3 text-white font-semibold shadow-xl shadow-rose-900/20 hover:bg-[var(--color-wa-dark)] transition-colors active:scale-95"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        className="shrink-0 fill-white"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.4-1.068.4-1.318 0-.172-.088-.272-.23-.33-.43-.33-2.5-.9-2.63-.9zm-3.054 8.338c-1.705 0-3.395-.46-4.887-1.332L6.82 25.338l1.132-4.173a9.52 9.52 0 0 1-1.462-5.066c0-5.254 4.283-9.521 9.55-9.521 5.264 0 9.542 4.267 9.542 9.521 0 5.255-4.278 9.522-9.542 9.522zm0-20.957c-6.304 0-11.437 5.115-11.437 11.417 0 2.007.534 3.966 1.539 5.69L3 28l5.484-1.431a11.466 11.466 0 0 0 5.572 1.425h.005c6.303 0 11.443-5.116 11.443-11.418 0-3.053-1.196-5.923-3.367-8.08-2.168-2.155-5.045-3.345-8.08-3.345z"/>
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="inline sm:hidden sr-only">WhatsApp</span>
    </a>
  );
}
