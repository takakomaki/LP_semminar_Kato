import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E1C36] text-[#F9F9F9]"
    >
      {/* 光のレイヤー（透明な層） */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full bg-[#F5D193]/15 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-5rem] w-[36rem] h-[36rem] rounded-full bg-[#00A39A]/18 blur-3xl" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* 左：コピー */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-xs md:text-sm tracking-[0.3em] text-[#F5D193]/80 uppercase">
                加藤雅俊 特別セミナー
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-relaxed tracking-wide border-b border-[#F5D193]/60 pb-4">
                薬に頼らない人生への第一歩
                <br className="hidden md:block" />
                60代からの「血管・自律神経」健康セミナー
              </h1>
            </div>

            <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#E9E9E9] max-w-xl mx-auto md:mx-0">
              <p>
                「このままずっと、薬を飲み続けるしかないのかな…」
                血圧・血糖・コレステロールの薬を続けながら、そんな不安を抱えていませんか。
              </p>
              <p>
                本セミナーでは、製薬会社の研究・現場経験を重ねてきた薬剤師・加藤雅俊が、
                『なぜ薬を飲み続けても根本的には良くならないのか』という真実と、
                薬に頼りきらずに体を整えるための具体的な道筋をお伝えします。
              </p>
              <p className="text-xs md:text-sm text-[#F5D193]/90">
                「もう年だから仕方ない」とあきらめる前に、ご自身の体にまだ残された
                “回復力” を、一緒に思い出してみませんか。
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start">
              <Button
                size="lg"
                className="px-10 py-6 text-sm md:text-base tracking-wide border border-[#F5D193] bg-transparent text-[#F5D193] hover:bg-[#F5D193]/10 hover:text-[#F5D193]"
                variant="outline"
              >
                10,000円セミナーに申し込む
              </Button>
              <p className="text-[11px] md:text-xs text-[#D0D0D0]">
                ※ どなたでもご参加いただけます
              </p>
            </div>
          </div>

          {/* 右：抽象ビジュアル（透明な層 & 流れ） */}
          <div className="relative h-64 md:h-80 lg:h-96">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <div className="w-[80%] h-[2px] bg-gradient-to-r from-[#F5D193] via-[#F9F9F9] to-[#00A39A] opacity-80" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 items-center gap-2 text-xs text-[#D0D0D0]">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}
