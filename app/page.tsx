import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProfileSection } from "@/components/profile-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ScheduleSection } from "@/components/schedule-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ProfileSection />
      <TestimonialsSection />
      <ScheduleSection />
    </main>
  )
}
