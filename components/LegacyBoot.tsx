"use client";

import { useEffect } from "react";

// Starts the prototype's original browser script once the server-rendered markup is
// on the page. The module runs a single time (imports are cached), so React's
// development double-run of effects doesn't start it twice.
export default function LegacyBoot() {
  useEffect(() => {
    import("@/legacy/app.js").catch((err) => {
      console.error("[legacy] failed to start the prototype script", err);
    });
  }, []);
  return null;
}
