import type { ReactNode } from "react";
import { contactHref, contactIsExternal } from "@/lib/site-config";

export function ContactButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={contactHref}
      {...(contactIsExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-bright ${className}`}
    >
      {children}
    </a>
  );
}
