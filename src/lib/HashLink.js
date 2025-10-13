"use client";
import { useRouter, usePathname } from "next/navigation";

export default function HashLink({ hash, children,className }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push(`/${hash}`);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a href={hash} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
