"use client";

import { useEffect, useRef } from "react";
import { logDontHackMe } from "@/lib/utils";

export default function HackWarning() {
  const hasLogged = useRef(false);

  useEffect(() => {
    if (!hasLogged.current) {
      logDontHackMe();
      hasLogged.current = true;
    }
  }, []);

  return null;
}
