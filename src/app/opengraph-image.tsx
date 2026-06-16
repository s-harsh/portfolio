import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Harshvardhan Soni — Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#030308",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(79,142,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Top-right glow orb */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,142,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-left glow */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(180,144,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "56px 72px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Top row — logo + status */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #4f8eff, #b490ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 900,
                  color: "white",
                }}
              >
                H
              </div>
              <span style={{ color: "white", fontSize: 24, fontWeight: 900, letterSpacing: "-0.5px" }}>
                HS<span style={{ color: "#ffd166" }}>.</span>
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 999,
                border: "1px solid rgba(79,142,255,0.25)",
                backgroundColor: "rgba(79,142,255,0.08)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#4ade80",
                }}
              />
              <span style={{ color: "#4ade80", fontSize: 14, fontWeight: 600 }}>
                Open to SDE-2 roles
              </span>
            </div>
          </div>

          {/* Center — name + title */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
              <span
                style={{
                  fontSize: 92,
                  fontWeight: 900,
                  color: "white",
                  letterSpacing: "-4px",
                  lineHeight: 1,
                }}
              >
                Harsh
              </span>
              <span
                style={{
                  fontSize: 92,
                  fontWeight: 900,
                  color: "transparent",
                  letterSpacing: "-4px",
                  lineHeight: 1,
                  WebkitTextStroke: "2px rgba(255,255,255,0.2)",
                }}
              >
                vardhan
              </span>
            </div>
            <span
              style={{
                fontSize: 92,
                fontWeight: 900,
                color: "#4f8eff",
                letterSpacing: "-4px",
                lineHeight: 1,
                marginTop: -8,
              }}
            >
              Soni
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 20,
              }}
            >
              <div style={{ height: 2, width: 32, backgroundColor: "#ffd166" }} />
              <span style={{ color: "#94a3b8", fontSize: 22, fontWeight: 400, letterSpacing: "0.05em" }}>
                BACKEND ENGINEER · PUNE, INDIA
              </span>
            </div>
          </div>

          {/* Bottom — tech tags + site */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 10 }}>
              {["Java · Spring Boot", "LDAP / NTLM / SSO", "RAG · LLM", "Docker · AWS"].map((tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.08)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    color: "#64748b",
                    fontSize: 13,
                    fontFamily: "monospace",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>

            <span style={{ color: "#1e293b", fontSize: 14, fontFamily: "monospace" }}>
              harshvardhan-portfolio-two.vercel.app
            </span>
          </div>
        </div>

        {/* Right-side vertical accent line */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "10%",
            width: 3,
            height: "80%",
            background: "linear-gradient(to bottom, transparent, #4f8eff40, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
