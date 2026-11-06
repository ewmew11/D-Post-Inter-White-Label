import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D-Post Inter White-label",
  description: "ระบบตัวอย่าง white-label · จัดทำโดย FastShip (CloudCommerce) · ข้อมูลจำลอง",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@500;600;700&family=Bai+Jamjuree:wght@500;600;700&family=IBM+Plex+Mono:wght@500;700&family=Sarabun:wght@400;500;600;700&display=swap" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
