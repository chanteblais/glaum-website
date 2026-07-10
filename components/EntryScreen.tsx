"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";

const COOKIE_NAME = "glaum_initiated";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

const emptySubscribe = () => () => {};
const readInitiated = () => document.cookie.includes(`${COOKIE_NAME}=true`);
// On the server, assume initiated so the overlay never flashes for returning visitors.
const serverSnapshot = () => true;

export function EntryScreen() {
  const initiated = useSyncExternalStore(
    emptySubscribe,
    readInitiated,
    serverSnapshot
  );
  const [dismissed, setDismissed] = useState(false);

  const handleEnter = () => {
    document.cookie = `${COOKIE_NAME}=true; max-age=${COOKIE_MAX_AGE}; path=/`;
    setDismissed(true);
  };

  if (initiated || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-plum-deep flex flex-col items-center justify-center px-6">
      <Image
        src="/images/glaum_logo_purple_accent.png"
        alt="Glåüm"
        width={160}
        height={160}
        priority
      />

      <p className="text-cream text-lg italic tracking-wide mt-10 text-center">
        Trust is the first step toward attunement.
      </p>

      <button
        type="button"
        onClick={handleEnter}
        className="mt-10 px-10 py-3 rounded-full border border-cream/40 bg-transparent text-cream tracking-[0.15em] text-sm cursor-pointer font-tokyo transition-colors hover:bg-cream/10 hover:border-cream/70"
      >
        I am ready.
      </button>
    </div>
  );
}
