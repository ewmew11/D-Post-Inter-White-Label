import type { Metadata, Viewport } from "next";

// Self-hosted fonts (bundled from npm, no request to Google at build or run time).
// Same families and weights the prototype loaded from Google Fonts.
import "@fontsource/sarabun/thai-400.css";
import "@fontsource/sarabun/thai-500.css";
import "@fontsource/sarabun/thai-600.css";
import "@fontsource/sarabun/thai-700.css";
import "@fontsource/sarabun/latin-400.css";
import "@fontsource/sarabun/latin-500.css";
import "@fontsource/sarabun/latin-600.css";
import "@fontsource/sarabun/latin-700.css";
import "@fontsource/kanit/thai-500.css";
import "@fontsource/kanit/thai-600.css";
import "@fontsource/kanit/thai-700.css";
import "@fontsource/kanit/latin-500.css";
import "@fontsource/kanit/latin-600.css";
import "@fontsource/kanit/latin-700.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-700.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "D-Post Inter White-label",
  description:
    "ตัวอย่างระบบ white-label จัดทำโดย FastShip (CloudCommerce) เพื่อเสนอไปรษณีย์ไทย · ไม่ใช่ระบบทางการของ ปณท",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      {/* The prototype script writes data-mode / data-staff / classes on <body>. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
