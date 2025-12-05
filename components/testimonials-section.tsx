import { Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "経営者として常に時間に追われる日々でしたが、加藤先生のメソッドを実践してから、睡眠の質が劇的に改善しました。血圧の薬を減らすことができたのは、本当に驚きです。",
    name: "田中 誠一",
    title: "製造業 代表取締役",
    age: "58歳",
  },
  {
    content:
      "科学的な説明と東洋医学の知恵が見事に融合していて、非常に納得感がありました。セミナー後すぐに実践でき、3ヶ月で体重が8kg減少。健康診断の数値も大幅に改善しました。",
    name: "山本 美智子",
    title: "IT企業 CEO",
    age: "52歳",
  },
  {
    content:
      "最初は半信半疑でしたが、論理的な説明に納得。今では毎朝のルーティンに加藤式セルフケアを取り入れています。頭がクリアになり、経営判断の質も上がったと実感しています。",
    name: "佐藤 健太郎",
    title: "不動産会社 会長",
    age: "63歳",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">参加者の声</h2>
          <div className="w-12 h-px bg-border mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 border border-border">
              <Quote className="w-8 h-8 text-accent/30 mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">{testimonial.content}</p>
              <div className="border-t border-border pt-6">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}（{testimonial.age}）
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
