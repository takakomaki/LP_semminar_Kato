import { Leaf, Brain, Heart, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Brain,
    number: "01",
    title: "薬に頼らない\n体質改善の本質",
    description: "なぜ薬を減らすことが可能なのか。身体の自然治癒力を最大限に引き出す科学的根拠をお伝えします。",
  },
  {
    icon: Heart,
    number: "02",
    title: "経営者特有の\nストレス解消法",
    description: "重責を担う経営者だからこそ必要な、心身のバランスを整える実践的なメソッドを学びます。",
  },
  {
    icon: Leaf,
    number: "03",
    title: "東洋医学と\n現代科学の融合",
    description: "2000年の歴史を持つ東洋医学の知恵と、最新の科学的エビデンスを組み合わせたアプローチ。",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "明日から実践できる\nセルフケア",
    description: "忙しい経営者でも毎日続けられる、シンプルで効果的なセルフケアの技術を習得します。",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4">BENEFITS</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">セミナーで得られること</h2>
          <div className="w-12 h-px bg-border mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="group p-8 border border-border bg-background hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl font-light text-muted-foreground/40">{benefit.number}</span>
                <div className="flex-1">
                  <benefit.icon className="w-6 h-6 text-accent mb-4" />
                  <h3 className="text-lg font-medium mb-3 whitespace-pre-line leading-relaxed">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
