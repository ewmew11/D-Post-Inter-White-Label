import { readFileSync } from "node:fs";
import path from "node:path";
import LegacyBoot from "@/components/LegacyBoot";

// The page is fully static: the markup is read once at build time.
export const dynamic = "force-static";

const markup = readFileSync(path.join(process.cwd(), "legacy", "markup.html"), "utf8");

export default function Page() {
  return (
    <>
      {/* display:contents keeps the prototype's elements laid out as direct children of <body>. */}
      <div id="legacy-root" style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: markup }} />
      <LegacyBoot />
    </>
  );
}
