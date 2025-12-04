# LP_semminar_Kato

加藤先生セミナーLP

## 📌 プロジェクト概要

高速でスケーラブルなランディングページを Next.js + React + TypeScript で構築しています。

### 技術スタック
- **フレームワーク**: Next.js 16
- **言語**: TypeScript
- **UI**: React + shadcn/ui
- **スタイリング**: Tailwind CSS
- **ホスティング**: Vercel

## 🤖 AI コラボレーションワークフロー

複数の AI（ChatGPT、Claude、Gemini、Grok、Deepseek）と協働してプロジェクトを進めています。

### ワークフロー資料
- 📋 [コンフィグ & ガイド](./.ai-workflow/config.md) - 各 AI の役割分担と使い方
- 📝 [タスクテンプレート](./.ai-workflow/task-template.md) - 新しいタスク作成時のテンプレート
- ✅ [レビューチェックリスト](./.ai-workflow/review-checklist.md) - 複数 AI によるコードレビュー
- 📊 [設計決定ログ](./.ai-workflow/decisions.md) - 重要な技術決定と推奨理由
- 🚀 [実行ガイド](./.ai-workflow/execution-guide.md) - 日常的なワークフローの実行方法

### 各 AI の役割

| AI | 役割 | 用途 |
|----|------|------|
| **GitHub Copilot** | リアルタイムコード補完 | VS Code でのコード実装・バグ修正 |
| **Claude** | アーキテクチャ設計 | システム設計、リファクタリング戦略 |
| **ChatGPT** | ベストプラクティス | 実装パターン、ドキュメント作成 |
| **Deepseek** | パフォーマンス最適化 | アルゴリズム最適化、効率化 |
| **Gemini** | クロスプラットフォーム確認 | モバイル対応、アクセシビリティ |
| **Grok** | 最新技術動向 | トレンド情報、セキュリティ |

### クイックスタート

#### 開発環境の起動（3 分）
```bash
# 1. 環境構築
npm install

# 2. 開発サーバー起動
npm run dev

# 3. ブラウザで確認
open http://localhost:3000
```

#### AI コラボレーションの開始（5 分）
```bash
# 1. 🔗 GitHub に AI を統合
# → .ai-workflow/quickstart.md を確認

# 2. VS Code に Copilot をインストール

# 3. ブラウザで以下を開く:
# - claude.ai
# - chatgpt.com
# - gemini.google.com
# - deepseek.com

# 4. GitHub Issues に相談記録を追加
```

**詳細**: [🚀 AI コラボレーション 5 分スタートガイド](./.ai-workflow/quickstart.md)

## 📂 ディレクトリ構造

```
LP_semminar_Kato/
├── .ai-workflow/           # AI コラボレーション資料
│   ├── config.md          # 設定・ガイド
│   ├── task-template.md   # タスクテンプレート
│   ├── review-checklist.md # コードレビューチェックリスト
│   ├── decisions.md       # 設計決定ログ
│   └── execution-guide.md # 実行ガイド
├── app/                   # Next.js アプリケーション
├── components/            # React コンポーネント
├── hooks/                 # カスタム Hooks
├── lib/                   # ユーティリティ関数
├── public/                # 静的ファイル
├── styles/                # グローバルスタイル
└── README.md             # このファイル
```

## 🚀 デプロイ

### Vercel へのデプロイ

```bash
# Vercel CLI を使用
vercel

# または GitHub から自動デプロイ
git push origin main
```

## 📖 ドキュメント

詳細なドキュメントは `.ai-workflow/` ディレクトリをご覧ください：

1. **はじめに** → [config.md](./.ai-workflow/config.md)
2. **タスク作成** → [task-template.md](./.ai-workflow/task-template.md)
3. **コードレビュー** → [review-checklist.md](./.ai-workflow/review-checklist.md)
4. **設計決定** → [decisions.md](./.ai-workflow/decisions.md)
5. **日常業務** → [execution-guide.md](./.ai-workflow/execution-guide.md)

## 🔗 関連リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)

## 📝 ライセンス

このプロジェクトは加藤先生セミナーの一部です。

---

**最終更新**: 2025-12-04
