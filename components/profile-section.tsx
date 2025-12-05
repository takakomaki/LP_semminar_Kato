export function ProfileSection() {
  return (
    <section id="profile" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4">INSTRUCTOR</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">講師紹介</h2>
          <div className="w-12 h-px bg-border mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Profile Image */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img
                  src="/images/e2-98-85-e5-8a-a0-e8-97-a4prof.jpeg"
                  alt="加藤雅俊先生"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Content */}
            <div className="md:col-span-3">
              <p className="text-sm text-muted-foreground mb-2">薬剤師 / 体内環境師®</p>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">
                加藤 雅俊
                <span className="text-base font-normal text-muted-foreground ml-3">Masatoshi Kato</span>
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  薬剤師として30年以上の臨床経験を持ちながら、東洋医学や自然療法を学び、「薬に頼らない健康法」を提唱。
                </p>
                <p>
                  大手製薬会社での研究開発を経て、予防医学の重要性に目覚め独立。これまでに10,000人以上の健康相談に応じ、多くの経営者・ビジネスリーダーの健康改善をサポートしてきた。
                </p>
                <p>
                  著書『薬に頼らず血圧を下げる方法』はベストセラーとなり、テレビ・雑誌など多数のメディアに出演。科学的根拠に基づきながらも、心と体の調和を重視した独自のメソッドが支持を集めている。
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">資格・実績</p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>・薬剤師</li>
                  <li>・体内環境師®</li>
                  <li>・薬学研究者</li>
                  <li>・著書累計265万部</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
