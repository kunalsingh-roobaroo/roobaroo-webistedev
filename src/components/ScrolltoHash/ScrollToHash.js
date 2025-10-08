"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100); // small delay to ensure DOM is ready
        }
      }
    }
  }, [pathname, searchParams]);

  return null;
}
