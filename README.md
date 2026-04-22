# Sitio Web — Dra. María Hernández N.

Sitio profesional para consulta médica, enfocado en pacientes de Venezuela y el exterior.
Construido con **Next.js 16 + Tailwind CSS 4** y desplegado en **Vercel**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Cómo actualizar el contenido

Todo el texto editable está marcado con un comentario `{/* EDITAR: */}` en los
componentes dentro de `app/components/`.

### Datos de contacto

Están centralizados en **`lib/contact.ts`**. Si cambia el teléfono, Instagram o el
mensaje pre-cargado de WhatsApp, edita solo ese archivo.

### Foto de la Dra.

1. Reemplaza `public/doctora-placeholder.svg` por una foto real
   (recomendado: JPG o PNG, 800×800px, cuadrada).
2. Si usas otra extensión, actualiza el `src` en `app/components/Hero.tsx`.

### Servicios y biografía

- **Servicios** → `app/components/Services.tsx` (array `services`).
- **Biografía y credenciales** → `app/components/About.tsx`.
- **Preguntas frecuentes** → `app/components/FAQ.tsx` (array `faqs`).
- **Hero (bienvenida)** → `app/components/Hero.tsx`.

### Metadatos y SEO

- Título, descripción y Open Graph: `app/layout.tsx`.
- Imagen de previsualización (Open Graph): `app/opengraph-image.tsx` — se genera
  automáticamente al desplegar.
- Favicon: `app/icon.tsx`.

## Comandos

```bash
npm run dev     # desarrollo
npm run build   # build de producción (verifica antes de desplegar)
npm run start   # sirve el build local
npm run lint    # linter
```

## Despliegue

Vinculado a Vercel. Cada push a `main` se despliega automáticamente.

```bash
vercel --prod   # despliegue manual a producción
```

## Stack

- Next.js 16 (App Router, Server Components)
- Tailwind CSS 4 (tokens en `app/globals.css`)
- TypeScript
- `next/font/google` — Inter + Playfair Display
- `next/image` — optimización automática
- `next/og` — generación de imagen OG en tiempo de build

## Paleta

| Token | Color | Uso |
|---|---|---|
| `--color-brand` | `#db2777` | Botones, enlaces, acentos |
| `--color-brand-dark` | `#9d174d` | Títulos y hover |
| `--color-brand-soft` | `#fff1f2` | Fondos de sección |
| `--color-wa` | `#25d366` | Solo botones de WhatsApp |
