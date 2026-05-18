import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Minh Le — Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fafafa 0%, #e4e4e7 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#71717a",
          }}
        >
          Product Manager
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 120,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              color: "#18181b",
              lineHeight: 1,
            }}
          >
            Minh Le
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#3f3f46",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Turning ambiguous problems into shipped solutions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#71717a",
          }}
        >
          <div>8 years · Workforce · Marketplaces · Logistics</div>
          <div>portfolio</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
