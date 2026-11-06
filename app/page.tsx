import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

// The prototype UI is plain HTML driven by public/dpost-app.js (vanilla JS).
// The markup is read at build time and rendered statically; the script then wires it up in the browser.
const markup = fs.readFileSync(path.join(process.cwd(), "app", "markup.html"), "utf8");

export default function Page() {
  return (
    <>
      <div id="dpost-root" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: markup }} />
      <Script src="/dpost-app.js" strategy="afterInteractive" />
    </>
  );
}
