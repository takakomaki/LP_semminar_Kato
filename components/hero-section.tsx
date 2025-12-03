import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E1C36] text-[#F9F9F9]">
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
                血管革命――体の根本から、
                <br className="hidden md:block" />
                人生の健康基盤を静かに整える
              </h1>
            </div>

            <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#E9E9E9] max-w-xl mx-auto md:mx-0">
              <p>
                「薬に頼り続ける毎日」から、そっと一歩抜け出してみませんか。
                血圧やコレステロールの数値に振り回される前に、まずは
                全身を支える土台である「血管」の働きを知ることが、
                本来のコンディションを取り戻す第一歩になります。
              </p>
              <p>
                製薬会社での研究と臨床現場での経験をもとに、
                最新のホリスティック医療の視点から、
                経営者が今日から実践できる
                <span className="font-medium">「血管からの再設計」</span>
                のポイントを、誠実にお伝えします。
              </p>
              <p className="text-xs md:text-sm text-[#F5D193]/90">
                静かに、確実に。血管は、これからのあなたの未来を支える見えないインフラです。
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 justify-center md:justify-start">
              <Button
                size="lg"
                className="px-10 py-6 text-sm md:text-base tracking-wide border border-[#F5D193] bg-transparent text-[#F5D193] hover:bg-[#F5D193]/10 hover:text-[#F5D193]"
                variant="outline"
              >
                無料セミナーに参加する
              </Button>
              <p className="text-[11px] md:text-xs text-[#D0D0D0]">
                ※ 経営者・経営幹部の方対象／オンライン開催
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
