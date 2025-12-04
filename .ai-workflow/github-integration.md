# 🔗 AI を GitHub に統合する完全ガイド

複数の AI を GitHub と連携させて、コラボレーションを効率化する実装方法です。

---

## 📌 統合の3つのレベル

### Level 1: 手動コラボレーション（今すぐ実装可能）
- VS Code + Copilot（ネイティブ統合）
- ブラウザで他の AI を並列実行
- 結果を GitHub Issues/PR にコピー&ペースト

### Level 2: 半自動化（プラグイン/拡張機能）
- VS Code 拡張機能で複数 AI にアクセス
- GitHub Comments に AI の提案を自動投稿
- GitHub Actions で AI レビューを自動実行

### Level 3: 完全自動化（API 連携）
- GitHub API + AI API の統合
- PR 作成時に自動でレビュー実行
- Issue の自動分類・優先度付け

---

## ⚡ Level 1: 手動コラボレーション（推奨・今すぐ開始）

### Step 1: VS Code に Copilot をセットアップ

```bash
# 1. VS Code でコマンドパレット開く
# Cmd/Ctrl + Shift + P

# 2. "Install Extensions" と入力
# → GitHub Copilot をインストール

# 3. GitHub アカウントでログイン
# → VS Code で自動設定完了
```

**VS Code での使い方:**
```typescript
// Copilot Chat を開く: Cmd/Ctrl + Shift + I
// インラインで質問: Cmd/Ctrl + I
// コード説明: Cmd/Ctrl + K で "explain this code"

const handleSubmit = () => {
  // Cmd/Ctrl + I で Copilot に質問
  // "Add form validation for email field"
};
```

### Step 2: ブラウザで複数 AI を並列実行

```
ブラウザ設定例:

┌─ Tab 1: VS Code (localhost:3000)
├─ Tab 2: claude.ai (Claude - 設計用)
├─ Tab 3: chatgpt.com (ChatGPT - ベストプラクティス)
├─ Tab 4: gemini.google.com (Gemini - UI確認)
├─ Tab 5: x.com/grok (Grok - 最新情報)
└─ Tab 6: deepseek.com (Deepseek - 最適化)
```

### Step 3: GitHub Issues に記録

```markdown
## Issue: ユーザー認証機能を実装する

### 説明
セミナーLP にログイン機能を追加

### AI との相談記録

#### Claude との設計相談
```
Q: ユーザー認証の最適なアーキテクチャは？
A: [Claude の回答をコピー&ペースト]
```

#### ChatGPT でのコード確認
```
Q: Next.js での OAuth 実装方法は？
A: [ChatGPT の回答をコピー&ペースト]
```

#### Deepseek でのパフォーマンス確認
```
Q: このトークン検証ロジックの最適化方法は？
A: [Deepseek の回答をコピー&ペースト]
```

### チェックリスト
- [x] Claude で設計完了
- [x] ChatGPT でコード例確認
- [ ] 実装開始（Copilot で実装）
- [ ] テスト実施
- [ ] Deepseek で最適化
- [ ] PR レビュー
```

### Step 4: PR に AI のフィードバックを含める

```markdown
## PR: ユーザー認証機能の実装

### 変更内容
ユーザー認証機能を実装しました。

### Claude のアーキテクチャレビュー
✅ 承認: 設計パターンが適切
- 依存性注入が正しく実装されている
- 拡張性が高い設計

### ChatGPT のコード品質確認
✅ ベストプラクティスに準拠
- React Hooks の使い方が正しい
- エラーハンドリングが適切

### Deepseek のパフォーマンス分析
⚠️ 改善提案:
- トークン検証のキャッシュ時間を 5 秒→10 秒に延長
- 期待効果: API 呼び出し 30% 削減

### テスト結果
- [x] ユニットテスト: 100% パス
- [x] インテグレーションテスト: 100% パス
- [x] E2E テスト: 100% パス
```

---

## 🔌 Level 2: 半自動化（VS Code 拡張機能）

### Step 1: 複数 AI アクセス用の拡張機能をインストール

```bash
# VS Code 拡張機能のインストール

# 1. GitHub Copilot Chat（メイン）
# 出版社: GitHub
# ID: github.copilot-chat

# 2. Continue - ChatGPT、Claude、その他
# 出版社: Continue Dev
# ID: continue.continue
# 用途: 複数の LLM に同時アクセス

# 3. Codeium（オプション）
# 出版社: Codeium
# ID: Codeium.codeium
```

### Continue の設定方法

**ステップ 1: Continue をインストール**
```bash
# VS Code マーケットプレイスから "Continue" をインストール
# または VS Code コマンドパレット: "Install Continue"
```

**ステップ 2: config.json を編集**
```json
{
  "models": [
    {
      "title": "Claude 3.5 Sonnet",
      "provider": "anthropic",
      "model": "claude-3-5-sonnet-20241022"
    },
    {
      "title": "GPT-4o",
      "provider": "openai",
      "model": "gpt-4o"
    },
    {
      "title": "GitHub Copilot",
      "provider": "copilot",
      "model": "gpt-4"
    },
    {
      "title": "Gemini Pro",
      "provider": "google",
      "model": "gemini-1.5-pro"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Claude",
    "provider": "anthropic",
    "model": "claude-3-5-sonnet-20241022"
  }
}
```

**ステップ 3: API キーを設定**
```bash
# macOS/Linux
export ANTHROPIC_API_KEY="your-anthropic-key"
export OPENAI_API_KEY="your-openai-key"
export GOOGLE_API_KEY="your-google-key"

# 環境変数を .env に保存
echo 'ANTHROPIC_API_KEY="your-anthropic-key"' >> ~/.env
echo 'OPENAI_API_KEY="your-openai-key"' >> ~/.env
```

### Continue での使い方

```typescript
// 1. Continue パネルを開く: Cmd/Ctrl + Shift + M

// 2. モデル選択: 左下のドロップダウンで切り替え

// 3. 質問を入力
// 例: "This function needs error handling. Add try-catch blocks"

// 4. 複数モデルで比較
// Claude: 1つのモデルで質問
// GPT-4o に切り替え: 同じ質問で比較
// → 最適な回答を選択
```

---

## 🚀 Level 3: 完全自動化（GitHub Actions + AI API）

### GitHub Actions による自動 AI レビュー

#### Step 1: リポジトリに Actions を追加

```bash
# ディレクトリ作成
mkdir -p .github/workflows

# ファイル作成
touch .github/workflows/ai-code-review.yml
```

#### Step 2: AI レビューの自動実行設定

```yaml
name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  copilot-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Extract PR diff
        run: |
          git fetch origin ${{ github.base_ref }}
          git diff origin/${{ github.base_ref }} HEAD > pr_diff.txt

      - name: GitHub Copilot Code Review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          cat > review.js << 'EOF'
          const fs = require('fs');
          const https = require('https');

          const diff = fs.readFileSync('pr_diff.txt', 'utf8');

          const prompt = `Review this code diff and provide feedback on:
          1. Code quality and readability
          2. Performance issues
          3. Security concerns
          4. Best practices violations
          
          Diff:
          ${diff}`;

          // OpenAI API を呼び出し
          const options = {
            hostname: 'api.openai.com',
            path: '/v1/chat/completions',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
          };

          const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
              const response = JSON.parse(data);
              const review = response.choices[0].message.content;
              fs.writeFileSync('copilot_review.txt', review);
              console.log(review);
            });
          });

          req.write(JSON.stringify({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7
          }));
          req.end();
          EOF
          
          node review.js

      - name: Post review as comment
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const review = fs.readFileSync('copilot_review.txt', 'utf8');
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `## 🤖 GitHub Copilot Code Review\n\n${review}`
            });
```

#### Step 3: 複数 AI による自動レビュー

```yaml
name: Multi-AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  claude-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Claude Code Review
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          curl -X POST https://api.anthropic.com/v1/messages \
            -H "x-api-key: $ANTHROPIC_API_KEY" \
            -H "anthropic-version: 2023-06-01" \
            -H "content-type: application/json" \
            -d '{
              "model": "claude-3-5-sonnet-20241022",
              "max_tokens": 1024,
              "messages": [
                {
                  "role": "user",
                  "content": "Review the PR diff for architecture quality, scalability, and maintainability"
                }
              ]
            }' > claude_review.json
          
          cat claude_review.json

  deepseek-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deepseek Performance Review
        env:
          DEEPSEEK_API_KEY: ${{ secrets.DEEPSEEK_API_KEY }}
        run: |
          curl -X POST https://api.deepseek.com/v1/chat/completions \
            -H "Authorization: Bearer $DEEPSEEK_API_KEY" \
            -H "content-type: application/json" \
            -d '{
              "model": "deepseek-coder",
              "messages": [
                {
                  "role": "user",
                  "content": "Review this code for performance optimizations and algorithm efficiency"
                }
              ]
            }' > deepseek_review.json
          
          cat deepseek_review.json

  post-reviews:
    needs: [claude-review, deepseek-review]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const claudeReview = fs.readFileSync('claude_review.json', 'utf8');
            const deepseekReview = fs.readFileSync('deepseek_review.json', 'utf8');
            
            const comment = `
            ## 🤖 Multi-AI Code Review

            ### Claude: Architecture & Design
            ${claudeReview}

            ### Deepseek: Performance & Optimization
            ${deepseekReview}
            `;
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });
```

#### Step 4: GitHub Secrets を設定

```bash
# リポジトリ設定画面から Secrets を追加
# Settings → Secrets and variables → Actions

# 必要なシークレット:
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
DEEPSEEK_API_KEY=sk-...
GOOGLE_API_KEY=...
```

---

## 📊 実装パターン別ガイド

### パターン A: 完全手動（今すぐ開始）

```
1. VS Code + Copilot で実装
2. ブラウザで Claude を開く → 設計レビュー
3. ブラウザで ChatGPT を開く → コードレビュー
4. GitHub Issues/PR に結果をコピー&ペースト
5. コミット・プッシュ
```

**メリット**: 即座に開始可能、柔軟性が高い  
**デメリット**: 手作業が多い、ログが分散

### パターン B: Continue を使用（推奨）

```
1. VS Code で Continue パネルを開く
2. Claude と GPT-4 を切り替えながら相談
3. VS Code 内で実装
4. PR 作成時に手動で AI レビューの結果を追加
5. コミット・プッシュ
```

**メリット**: VS Code 内で完結、複数モデルに対応  
**デメリット**: API キーの管理が必要

### パターン C: GitHub Actions 自動化（本格化）

```
1. VS Code で実装・コミット
2. PR 作成
3. GitHub Actions が自動で複数 AI にレビュー依頼
4. AI のレビュー結果が自動でコメント投稿
5. マージ
```

**メリット**: 完全に自動化、一貫性を保証  
**デメリット**: セットアップが複雑、API コスト発生

---

## 💡 推奨ステップアップパス

### Week 1-2: 手動コラボレーション
```bash
# VS Code + Copilot で実装開始
# ブラウザで他の AI を並列実行
# GitHub Issues に記録
```

### Week 3-4: Continue を導入
```bash
# Continue をインストール
# 複数モデルの API キーを設定
# VS Code 内で複数 AI を使用開始
```

### Week 5+: GitHub Actions 自動化
```bash
# AI レビューの GitHub Actions を作成
# PR 作成時に自動レビュー開始
# PR テンプレートに AI レビュー結果を統合
```

---

## ⚙️ API キーの安全な管理

### 方法 1: 環境変数（ローカル開発）

```bash
# ~/.bashrc または ~/.zshrc に追加
export ANTHROPIC_API_KEY="sk-ant-..."
export OPENAI_API_KEY="sk-..."
export DEEPSEEK_API_KEY="sk-..."

# または .env ファイル
cat > .env << 'EOF'
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
DEEPSEEK_API_KEY=sk-...
EOF

# .gitignore に追加
echo ".env" >> .gitignore
```

### 方法 2: GitHub Secrets（CI/CD）

```bash
# GitHub CLI で設定
gh secret set OPENAI_API_KEY

# または GitHub Web UI から
# Settings → Secrets and variables → Actions
```

### 方法 3: 暗号化ファイル

```bash
# GPG で暗号化
gpg --symmetric --cipher-algo AES256 secrets.json

# GitHub Actions で復号化
gpg --decrypt --quiet --batch --passphrase $GPG_PASSPHRASE secrets.json.gpg
```

---

## 🔍 実装チェックリスト

### Level 1: 手動コラボレーション
- [ ] GitHub Copilot をインストール・設定
- [ ] VS Code で Copilot Chat が動作確認
- [ ] 複数 AI のブラウザタブを開く
- [ ] 最初のタスクで AI と相談記録
- [ ] GitHub Issues に記録を追加

### Level 2: Continue 導入
- [ ] Continue 拡張機能をインストール
- [ ] config.json を設定
- [ ] API キーを環境変数に設定
- [ ] VS Code で複数モデルを試す
- [ ] GitHub Issues に記録を自動化

### Level 3: GitHub Actions 自動化
- [ ] `.github/workflows/` ディレクトリ作成
- [ ] AI レビュー Actions を作成
- [ ] GitHub Secrets に API キーを設定
- [ ] テスト PR で動作確認
- [ ] PR テンプレートを更新

---

## 📚 API ドキュメントリンク

| AI | API ドキュメント | 価格 |
|----|-----------------|------|
| OpenAI | [API Docs](https://platform.openai.com/docs) | $0.03-0.30/1K tokens |
| Anthropic | [API Docs](https://docs.anthropic.com) | $0.003-0.03/1K tokens |
| Google | [API Docs](https://developers.google.com/generative-ai) | $0.0001-0.0004/1K tokens |
| Deepseek | [API Docs](https://api-docs.deepseek.com) | $0.0001-0.001/1K tokens |

---

## 🎯 次のステップ

### すぐにできること
1. VS Code に Copilot をインストール
2. 最初の Issue で AI に相談（ブラウザで）
3. GitHub Issues に相談記録を追加

### 今週中にやること
1. Continue をインストール
2. API キーを設定
3. 複数 AI を試す

### 来週以降
1. GitHub Actions を設定
2. 自動 AI レビューを開始
3. 効果測定・改善

---

**ガイド版**: 2.0  
**最終更新**: 2025-12-04
