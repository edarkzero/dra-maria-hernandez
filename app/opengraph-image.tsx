import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Dra. Maria Hernandez N. — Consulta Médica Profesional";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fff1f2 0%, #fecdd3 45%, #fda4af 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 999,
              background: "#db2777",
              color: "white",
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 30, color: "#9d174d", fontWeight: 600 }}>
            Consulta Médica Profesional
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              color: "#9d174d",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Dra. Maria Hernandez N.
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 34,
              color: "#1f2937",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Cuido tu salud con cariño, cercanía y profesionalismo.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#9d174d",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#25d366",
              }}
            />
            Agenda por WhatsApp
          </div>
          <div>Venezuela · Consulta en línea</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
