"use client";
import { useRouter, usePathname } from "next/navigation";

export default function FooterHashLink({ hash, children, onClick, className }) {
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
    onClick();
  };

  return (
    <a href={hash} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
