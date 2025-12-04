#!/usr/bin/env python3
"""
AI コラボレーション管理スクリプト

複数の AI API を統合して、自動コードレビューとフィードバック生成を行います。
"""

import os
import json
import argparse
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional

# API キーを環境変数から読み込む
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")


class AICollaboManager:
    """AI コラボレーション管理クラス"""

    def __init__(self, project_root: str = "."):
        self.project_root = Path(project_root)
        self.workflow_dir = self.project_root / ".ai-workflow"
        self.workflow_dir.mkdir(exist_ok=True)

    def create_task_from_template(self, task_name: str) -> Dict:
        """タスクテンプレートから新しいタスクを作成"""
        template_path = self.workflow_dir / "task-template.md"

        if not template_path.exists():
            print(f"❌ テンプレートが見つかりません: {template_path}")
            return {}

        # テンプレートを読み込む
        with open(template_path, "r", encoding="utf-8") as f:
            template_content = f.read()

        # 新しいタスクファイルを作成
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        task_file = self.workflow_dir / f"task_{task_name}_{timestamp}.md"

        with open(task_file, "w", encoding="utf-8") as f:
            f.write(template_content)

        print(f"✅ タスクを作成しました: {task_file}")
        return {"task_file": str(task_file), "task_name": task_name}

    def log_ai_consultation(
        self, task_id: str, ai_name: str, question: str, answer: str
    ) -> Dict:
        """AI との相談をログに記録"""
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "task_id": task_id,
            "ai": ai_name,
            "question": question,
            "answer": answer,
        }

        # ログファイルに追加
        log_dir = self.workflow_dir / "logs"
        log_dir.mkdir(exist_ok=True)
        log_file = log_dir / f"ai_consultations_{task_id}.json"

        logs = []
        if log_file.exists():
            with open(log_file, "r", encoding="utf-8") as f:
                logs = json.load(f)

        logs.append(log_entry)

        with open(log_file, "w", encoding="utf-8") as f:
            json.dump(logs, f, ensure_ascii=False, indent=2)

        print(f"✅ AI との相談を記録しました ({ai_name})")
        return log_entry

    def generate_review_summary(self, task_id: str) -> str:
        """AI レビューのサマリーを生成"""
        log_dir = self.workflow_dir / "logs"
        log_file = log_dir / f"ai_consultations_{task_id}.json"

        if not log_file.exists():
            return "❌ レビューログが見つかりません"

        with open(log_file, "r", encoding="utf-8") as f:
            logs = json.load(f)

        # サマリーを生成
        summary = f"# AI レビューサマリー\n\n**タスク ID**: {task_id}\n\n"

        ai_reviews = {}
        for log in logs:
            ai_name = log["ai"]
            if ai_name not in ai_reviews:
                ai_reviews[ai_name] = []
            ai_reviews[ai_name].append(log)

        for ai_name, reviews in ai_reviews.items():
            summary += f"\n## {ai_name} のレビュー\n\n"
            for review in reviews:
                summary += f"### 質問\n{review['question']}\n\n"
                summary += f"### 回答\n{review['answer']}\n\n"

        return summary

    def create_pr_template_with_ai_reviews(self) -> str:
        """AI レビューを含む PR テンプレートを生成"""
        template = """# PR テンプレート（AI コラボレーション版）

## 📋 概要
[このプルリクエストの目的を説明]

## 🔄 変更内容
- [ ] 新機能追加
- [ ] バグ修正
- [ ] リファクタリング
- [ ] ドキュメント更新

## 🤖 AI レビュー

### Claude: アーキテクチャレビュー
```
[Claude からの設計レビューをここに貼り付け]
```

**評価**: ✅ / ⚠️ / ❌

### ChatGPT: コード品質レビュー
```
[ChatGPT からのコード品質フィードバックをここに貼り付け]
```

**評価**: ✅ / ⚠️ / ❌

### Deepseek: パフォーマンスレビュー
```
[Deepseek からのパフォーマンス分析をここに貼り付け]
```

**評価**: ✅ / ⚠️ / ❌

### Gemini: UI/UX レビュー
```
[Gemini からの UI/UX フィードバックをここに貼り付け]
```

**評価**: ✅ / ⚠️ / ❌

## ✅ チェックリスト

### コード品質
- [ ] TypeScript の型チェック OK
- [ ] ESLint エラーなし
- [ ] Prettier フォーマット OK

### テスト
- [ ] ユニットテスト追加/更新
- [ ] インテグレーションテスト確認
- [ ] 手動テスト完了

### ドキュメント
- [ ] README 更新（必要な場合）
- [ ] コメント追加（複雑なロジック）
- [ ] .ai-workflow/decisions.md 更新（設計判断がある場合）

### パフォーマンス
- [ ] バンドルサイズ確認
- [ ] re-render パフォーマンス確認
- [ ] API 呼び出し最適化確認

## 📊 メトリクス
- **変更ファイル数**: X
- **追加行数**: Y
- **削除行数**: Z
- **テストカバレッジ**: X%

## 🔗 関連 Issue
Closes #XXX

## 📝 備考
[その他の情報があれば記入]
"""
        return template

    def validate_ai_integration(self) -> Dict[str, bool]:
        """AI 統合の状態をチェック"""
        status = {
            "copilot_available": bool(OPENAI_API_KEY),
            "claude_available": bool(ANTHROPIC_API_KEY),
            "deepseek_available": bool(DEEPSEEK_API_KEY),
            "workflow_files_exist": all(
                (self.workflow_dir / f).exists()
                for f in [
                    "config.md",
                    "task-template.md",
                    "review-checklist.md",
                    "decisions.md",
                    "execution-guide.md",
                ]
            ),
            "github_actions_configured": (
                self.project_root / ".github" / "workflows" / "ai-code-review.yml"
            ).exists(),
        }

        return status


def main():
    """メイン処理"""
    parser = argparse.ArgumentParser(
        description="AI コラボレーション管理ツール"
    )
    parser.add_argument(
        "command",
        choices=["create-task", "log-consultation", "generate-summary", "check-status"],
        help="実行するコマンド",
    )
    parser.add_argument("--task-id", help="タスク ID")
    parser.add_argument("--task-name", help="タスク名")
    parser.add_argument("--ai-name", help="AI 名（Copilot, Claude, ChatGPT など）")
    parser.add_argument("--question", help="質問内容")
    parser.add_argument("--answer", help="AI からの回答")
    parser.add_argument("--project-root", default=".", help="プロジェクトルート")

    args = parser.parse_args()
    manager = AICollaboManager(args.project_root)

    if args.command == "create-task":
        if not args.task_name:
            print("❌ --task-name を指定してください")
            return
        result = manager.create_task_from_template(args.task_name)
        print(json.dumps(result, ensure_ascii=False, indent=2))

    elif args.command == "log-consultation":
        if not all([args.task_id, args.ai_name, args.question, args.answer]):
            print("❌ --task-id, --ai-name, --question, --answer を指定してください")
            return
        result = manager.log_ai_consultation(
            args.task_id, args.ai_name, args.question, args.answer
        )
        print(json.dumps(result, ensure_ascii=False, indent=2))

    elif args.command == "generate-summary":
        if not args.task_id:
            print("❌ --task-id を指定してください")
            return
        summary = manager.generate_review_summary(args.task_id)
        print(summary)

    elif args.command == "check-status":
        status = manager.validate_ai_integration()
        print("\n🔍 AI 統合状態チェック\n")
        print("✅ = 準備完了 | ❌ = 設定が必要\n")
        for key, value in status.items():
            status_emoji = "✅" if value else "❌"
            print(f"{status_emoji} {key}: {value}")

        # PR テンプレートを生成
        print("\n📋 PR テンプレート（サンプル）:\n")
        print(manager.create_pr_template_with_ai_reviews())


if __name__ == "__main__":
    main()
