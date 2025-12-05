import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  onClick?: () => void
  href?: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg" | "sm"
  className?: string
  icon?: boolean
}

export function CTAButton({
  onClick,
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  icon = true,
}: CTAButtonProps) {
  const baseStyles = cn(
    "group transition-all duration-300",
    variant === "primary" &&
      "bg-[#00A39A] hover:bg-[#00A39A]/90 text-white shadow-lg hover:shadow-xl",
    variant === "secondary" &&
      "bg-[#F5D193] hover:bg-[#F5D193]/90 text-[#0E1C36] shadow-lg hover:shadow-xl",
    variant === "outline" &&
      "border-2 border-[#00A39A] text-[#00A39A] hover:bg-[#00A39A] hover:text-white",
    className
  )

  if (href) {
    return (
      <Button asChild size={size} className={baseStyles}>
        <a href={href}>
          {children}
          {icon && (
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          )}
        </a>
      </Button>
    )
  }

  return (
    <Button onClick={onClick} size={size} className={baseStyles}>
      {children}
      {icon && (
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      )}
    </Button>
  )
}
