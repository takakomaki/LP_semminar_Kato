import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/serene-zen-garden-with-morning-mist-soft-light-min.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-background/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] text-muted-foreground mb-6 uppercase">加藤雅俊 特別セミナー</p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 text-balance">薬ゼロ革命</h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          薬に頼らず、自分の力で健康を取り戻す。
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          科学と東洋医学の叡智が融合した、
          <br className="hidden md:block" />
          経営者のための本質的な健康法をお伝えします。
        </p>

        <Button size="lg" className="px-10 py-6 text-base tracking-wide">
          セミナーに申し込む
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
