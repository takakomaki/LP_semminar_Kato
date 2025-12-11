"use client"

import Link from "next/link"
import { Facebook, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* 会社情報 */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">加藤雅俊セミナー</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              薬に頼らない健康法を提唱する加藤雅俊による特別セミナー。
              経営者の健康をサポートします。
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">メニュー</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                セミナー内容
              </button>
              <button
                onClick={() => scrollToSection("profile")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                講師紹介
              </button>
              <button
                onClick={() => scrollToSection("schedule")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                スケジュール
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                FAQ
              </button>
            </nav>
          </div>

          {/* リーガル */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">法的情報</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                利用規約
              </Link>
              <Link
                href="/commercial"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                特定商取引法
              </Link>
            </nav>
          </div>

          {/* お問い合わせ・SNS */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">お問い合わせ</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@example.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                info@example.com
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} 加藤雅俊セミナー. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
