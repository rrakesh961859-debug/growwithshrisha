import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type SiteButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "primary" | "secondary";
};

export function SiteButton({ children, tone = "primary", className = "", ...props }: SiteButtonProps) {
  return (
    <a
      className={`site-button ${tone === "secondary" ? "site-button-secondary" : ""} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}