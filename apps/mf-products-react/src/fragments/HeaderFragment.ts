type HeaderFragmentProps = {
  title: string;
  subtitle: string;
  source: string;
};

const styles = {
  shell:
    "border:1px solid rgba(52, 211, 153, 0.22);background:linear-gradient(135deg, rgba(6, 78, 59, 0.95), rgba(15, 23, 42, 0.96));border-radius:32px;padding:32px;box-shadow:0 20px 80px rgba(6, 78, 59, 0.28);color:#ffffff;font-family:Inter, Arial, sans-serif",
  badges: "display:flex;flex-wrap:wrap;gap:12px;align-items:center",
  badge:
    "border:1px solid rgba(167, 243, 208, 0.18);background:rgba(167, 243, 208, 0.08);border-radius:999px;padding:8px 12px;font-size:12px;letter-spacing:0.28em;text-transform:uppercase;color:#d1fae5",
  source:
    "border:1px solid rgba(255, 255, 255, 0.12);background:rgba(255, 255, 255, 0.06);border-radius:999px;padding:8px 12px;font-size:12px;color:#e2e8f0",
  title:
    "margin-top:20px;margin-bottom:0;font-size:clamp(2.2rem, 5vw, 3.4rem);line-height:1.05;font-weight:700",
  subtitle:
    "margin-top:16px;margin-bottom:0;max-width:760px;font-size:16px;line-height:1.7;color:rgba(236, 253, 245, 0.86)",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function HeaderFragment({
  title,
  subtitle,
  source,
}: HeaderFragmentProps) {
  return [
    `<header style="${styles.shell}">`,
    `<div style="${styles.badges}">`,
    `<span style="${styles.badge}">Remote React fragment</span>`,
    `<span style="${styles.source}">Source: ${escapeHtml(source)}</span>`,
    `</div>`,
    `<h1 style="${styles.title}">${escapeHtml(title)}</h1>`,
    `<p style="${styles.subtitle}">${escapeHtml(subtitle)}</p>`,
    `</header>`,
  ].join("");
}
