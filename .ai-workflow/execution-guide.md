# 🚀 AI コラボレーション実行ガイド

## クイックスタート

複数の AI と効率的にコラボレーションするための実行手順です。

---

## 📌 1 日のワークフロー例

### 朝：計画フェーズ（15 分）

```bash
# ステップ 1: 今日の目標をまとめる
# ファイル: .ai-workflow/task-template.md をコピー

# ステップ 2: Claude に相談（5 分）
# 質問: 「この3つの機能実装の最適な順序は？」
# → Claude が設計レビューを行い、推奨順序を提案

# ステップ 3: タスクを GitHub Issues に作成
git checkout -b feature/[feature-name]
```

### 中：実装フェーズ（60 分）

```bash
# ステップ 1: VS Code で実装開始
# Copilot を活用: Ctrl+I で質問、Ctrl+K でリファクタリング

# ステップ 2: 複雑な部分は ChatGPT に相談
# 実装パターン、ベストプラクティスを確認

# ステップ 3: コード保存・コミット
git add .
git commit -m "feat: [機能説明]"
```

### 午後：最適化・レビュー（30 分）

```bash
# ステップ 1: Deepseek でパフォーマンス確認
# 質問: 「このアルゴリズムの最適化方法は？」

# ステップ 2: claude でアーキテクチャレビュー
# 質問: 「この実装に改善の余地があるか？」

# ステップ 3: Grok で最新技術確認
# 質問: 「React 19 で更新すべき部分は？」

# ステップ 4: テストとドキュメント
npm run test
npm run lint
```

---

## 🤖 各 AI の効果的な活用方法

### GitHub Copilot (VS Code)
```typescript
// 例 1: 関数の実装をアシスト
const handleUserSignup = (email: string) => {
  // Ctrl+I を押して、Copilot に続きを提案させる
  // "Check if email is valid, then create user..."
};

// 例 2: 型定義の補完
interface UserProfile {
  // Ctrl+I を押して、Copilot に必要なフィールドを提案させる
}

// 例 3: テストコード生成
describe('UserService', () => {
  // Ctrl+I を押して、Copilot に test case を提案させる
});
```

**効果的な質問フォーマット:**
```
Ctrl+I で以下を入力:
"Generate a React hook that manages form state with validation"

結果: Copilot がすぐにコード案を提案
```

### Claude (claude.ai)

**ステップ 1: プロジェクト背景を共有**
```markdown
## プロジェクト概要
- 名前: LP_semminar_Kato
- 技術スタック: Next.js 16, React, TypeScript, Tailwind CSS
- 目的: セミナー情報を紹介するランディングページ

## 現在の課題
1. パフォーマンス最適化が必要
2. コンポーネント構造の改善
3. 状態管理の設計

## 質問
上記の課題に対して、ベストな解決策は何か？
```

**ステップ 2: Claude の回答を受け取る**
```
Claude の回答例:
- コンポーネント分割の提案
- 状態管理パターンの推奨
- 実装計画書
```

**ステップ 3: 詳細を掘り下げる**
```
Follow-up: 「その方法で実装する際の注意点は？」
```

### ChatGPT (chatgpt.com)

**ベストプラクティス確認用:**
```
Q: "Next.js 16 でサーバーコンポーネントを使う時の注意点は？"

Q: "React Hooks で useEffect を安全に使うベストプラクティスは？"

Q: "Tailwind CSS でレスポンシブデザインを実装する時のコツは？"
```

### Deepseek (deepseek.com)

**パフォーマンス最適化用:**
```
Q: "以下のソート関数の時間計算量を O(n log n) に最適化できるか？"

Q: "このコンポーネントの re-render を 50% 削減する方法は？"

Q: "バンドルサイズを 30KB 削減するには？"
```

### Gemini (gemini.google.com)

**クロスプラットフォーム確認用:**
```
1. 実装スクリーンショットをアップロード
2. Q: "このデザインはモバイル、タブレット、デスクトップで見やすいか？"
3. Q: "アクセシビリティ面で問題はないか？"
```

### Grok (x.com/grok)

**最新情報確認用:**
```
Q: "2025年12月現在、Next.js の最新のベストプラクティスは？"

Q: "React のロードマップで近日中に導入予定の機能は？"

Q: "TypeScript 6.0 の新機能で活用できそうなものは？"
```

---

## 📝 実装パターン集

### パターン 1: 新機能開発

```
Day 1: 要件確認
├─ Claude: 要件整理 + 技術仕様書作成
├─ ChatGPT: ベストプラクティス確認
└─ 成果物: 実装計画書

Day 2-3: 実装
├─ Copilot: コード実装（VS Code）
├─ ChatGPT: コードレビュー
└─ 成果物: 実装完了 + テスト

Day 4: 最適化
├─ Deepseek: パフォーマンス最適化
├─ Grok: 最新技術確認
├─ Gemini: UI/UX 確認
└─ 成果物: 最適化完了
```

### パターン 2: バグ修正

```
Step 1: 問題の詳細化
├─ エラーメッセージをコピー
├─ 再現手順をまとめる
└─ 関連コードをコピー

Step 2: ChatGPT に相談
├─ Q: "このエラーの原因は何か？"
├─ Q: "解決策は？"
└─ A: 修正コード案を取得

Step 3: Claude で検証
├─ Q: "この修正方法で他の問題は発生しないか？"
└─ 安全性を確認

Step 4: Copilot で実装
├─ VS Code で修正を適用
├─ テストを実行
└─ コミット
```

### パターン 3: リファクタリング

```
Step 1: Claude でアーキテクチャ設計
├─ 現状の問題点分析
├─ 改善案提案
└─ 実装計画書

Step 2: ChatGPT でベストプラクティス確認
├─ デザインパターン確認
├─ 実装例確認
└─ リスク検討

Step 3: Deepseek でパフォーマンス分析
├─ 改善前後のパフォーマンス比較
├─ ボトルネック検出
└─ 最適化提案

Step 4: Copilot で実装
├─ 段階的な改善
├─ テスト確認
└─ リグレッションテスト
```

---

## 🎯 効率化のコツ

### Tip 1: コンテキスト共有テンプレート
```markdown
## コンテキスト情報

**プロジェクト:**
- 名前: LP_semminar_Kato
- 言語: TypeScript + React
- フレームワーク: Next.js 16
- スタイリング: Tailwind CSS + shadcn/ui

**現在のタスク:**
[タスク説明]

**実装済みの関連機能:**
[既存コンポーネント名]

**制約条件:**
- パフォーマンス: LCP < 2.5s
- バンドルサイズ: < 100KB
- ブラウザ対応: Chrome, Safari, Firefox, Edge

[質問本文]
```

### Tip 2: コード共有の効率化
```
1. VS Code で該当コードをコピー
2. ChatGPT/Claude に直接ペースト
3. markdown フェンスで自動的に構文ハイライト
4. AI が直接修正コードを提案
```

### Tip 3: スクリーンショット活用（Gemini）
```
1. 実装結果をスクリーンショット
2. Gemini にアップロード
3. "このデザインの問題点は？" と質問
4. 即座にビジュアルフィードバック取得
```

### Tip 4: 並列実行
```
VS Code で実装中に、ブラウザで複数 AI を開く

Timeline:
14:00 - Copilot で実装開始
14:15 - Claude に設計レビュー依頼（別タブ）
14:30 - ChatGPT でベストプラクティス確認（別タブ）
14:45 - Deepseek でパフォーマンス分析開始
15:00 - すべての結果を統合
```

---

## 📊 進捗トラッキング

### GitHub Issues + AI

```markdown
## Issue: ユーザー認証機能実装

### 説明
[Claude と一緒に書いた詳細な仕様]

### 実装計画
- [ ] バックエンド API 設計 (Claude)
- [ ] フロントエンドコンポーネント実装 (Copilot)
- [ ] 統合テスト (ChatGPT)
- [ ] パフォーマンス最適化 (Deepseek)

### AI との相談記録
- **Claude**: [リンク to Claude conversation]
- **ChatGPT**: [スクリーンショットまたはメモ]
```

### GitHub Projects で可視化
```
Backlog
├─ AI 相談中
├─ 設計中
├─ 実装中
├─ レビュー中
└─ 完了
```

---

## 🔄 コラボレーション循環

```
┌─────────────────────────────────────────┐
│ 1. 要件確認 (Claude)                      │
│    ↓                                    │
│ 2. 設計・計画 (Claude + ChatGPT)         │
│    ↓                                    │
│ 3. 実装 (Copilot + ChatGPT)             │
│    ↓                                    │
│ 4. テスト・検証 (ChatGPT + Deepseek)    │
│    ↓                                    │
│ 5. 最適化 (Deepseek + Grok)             │
│    ↓                                    │
│ 6. クロスプラットフォーム確認 (Gemini)  │
│    ↓                                    │
│ 7. 最終レビュー (Claude)                 │
│    ↓                                    │
│ 8. マージ・デプロイ                      │
└─────────────────────────────────────────┘
```

---

## 💡 Q&A

### Q: 複数の AI から矛盾した意見が出たらどうする？
```
A: 
1. 各 AI の回答をまとめる
2. Claude に「なぜ異なる意見か」を質問
3. トレードオフを理解した上で決定
4. 決定ログに記録 (.ai-workflow/decisions.md)
```

### Q: AI からの提案がプロジェクトに合わない場合？
```
A:
1. 理由を明確にする
2. プロジェクト特有の制約を AI に伝える
3. 別のアプローチを提案させる
4. 最終決定をドキュメント化
```

### Q: AI の回答の信頼性をどう判断する？
```
A:
1. 複数の AI に同じ質問をして比較
2. 公式ドキュメントで検証
3. 小規模なテストで動作確認
4. 慎重な判断が必要な場合は Grok で最新情報確認
```

---

## 📚 参考資料

### 公式ドキュメント
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

### AI リソース
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [Claude Documentation](https://claude.ai/help)
- [ChatGPT Guide](https://help.openai.com/en/collections/3742473-chatgpt)

---

**ガイド版**: 1.0  
**最終更新**: 2025-12-04
