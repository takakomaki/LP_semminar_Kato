import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  variant?: "primary" | "secondary"
  children: ReactNode
  className?: string
}

export function SectionWrapper({
  id,
  variant = "primary",
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32",
        variant === "primary" ? "bg-white" : "bg-[#F9F9F9]",
        className
      )}
    >
      <div className="container mx-auto px-6">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16 md:mb-20", className)}>
      <p className="text-sm tracking-[0.2em] text-[#0E1C36]/60 mb-4 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-medium text-[#0E1C36] mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-base text-[#0E1C36]/70 max-w-2xl mx-auto mb-6">
          {description}
        </p>
      )}
      <div className="w-12 h-px bg-[#F5D193] mx-auto" />
    </div>
  )
}
