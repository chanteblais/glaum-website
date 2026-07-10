"use client";

import { useState } from "react";

export function CopyKeyLink() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable — the user can copy from the address bar.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="px-5 py-2 rounded-full font-tokyo tracking-widest text-xs bg-plum text-cream cursor-pointer transition-colors hover:bg-plum-deep"
    >
      {copied ? "KEY COPIED. WELL GUARDED." : "COPY AMENDMENT LINK"}
    </button>
  );
}
