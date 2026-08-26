"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns true once the component has hydrated on the client.
 *
 * During SSR and the first client render it returns false, which matches the
 * server output and avoids hydration mismatches. After hydration it flips to
 * true. Use it to gate theme-dependent UI (like a theme toggle) until mount.
 */
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}