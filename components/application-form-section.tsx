// app/seminar/page.tsx
"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

// === Zodスキーマ ==========================
const seminarFormSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("メールアドレスの形式が正しくありません"),
  phone: z
    .string()
    .min(1, "電話番号を入力してください")
    .regex(/^\d{3}-\d{4}-\d{4}$/, "000-0000-0000 の形式で入力してください"),
  company: z.string().optional(),
  date: z.literal("2026-01-25", {
    errorMap: () => ({ message: "参加希望日を選択してください" }),
  }),
});

type SeminarFormValues = z.infer<typeof seminarFormSchema>;

// ==========================================

export default function SeminarApplicationPage() {
  const [submitted, setSubmitted] = useState<SeminarFormValues | null>(null);

  const form = useForm<SeminarFormValues>({
    resolver: zodResolver(seminarFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      date: undefined as unknown as "2026-01-25",
    },
    mode: "onBlur",
  });

  const onSubmit = (values: SeminarFormValues) => {
    // 本来はここで API に送信する
    // await fetch("/api/seminar/apply", { ... })

    setSubmitted(values);
  };

  // 確認画面に戻るため（再編集したい場合など）
  const handleBackToForm = () => {
    if (submitted) {
      form.reset(submitted);
    }
    setSubmitted(null);
  };

  // ====== 送信後：確認画面 ====================
  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <Card className="w-full max-w-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">
              お申し込みありがとうございます
            </CardTitle>
            <CardDescription className="mt-2">
              以下の内容でセミナーのお申し込みを受け付けました。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm md:text-base">
            <div className="grid gap-2">
              <div>
                <span className="font-semibold">お名前：</span>
                <span>{submitted.name}</span>
              </div>
              <div>
                <span className="font-semibold">メールアドレス：</span>
                <span>{submitted.email}</span>
              </div>
              <div>
                <span className="font-semibold">電話番号：</span>
                <span>{submitted.phone}</span>
              </div>
              {submitted.company && (
                <div>
                  <span className="font-semibold">会社名：</span>
                  <span>{submitted.company}</span>
                </div>
              )}
              <div>
                <span className="font-semibold">参加希望日：</span>
                <span>2026年1月25日</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-muted-foreground md:text-sm">
              ※まだ正式なお席確定ではありません。後ほど、事務局より
              詳細のご案内メールをお送りしますのでご確認ください。
            </p>

            <div className="mt-6 flex flex-col gap-2 md:flex-row md:justify-end">
              <Button variant="outline" onClick={handleBackToForm}>
                入力内容を修正する
              </Button>
              {/* 実運用ではトップページや別LPへの遷移ボタンなどに */}
              <Button asChild>
                <a href="/">トップページへ戻る</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ====== 入力フォーム画面 ====================
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            セミナーお申し込みフォーム
          </CardTitle>
          <CardDescription className="mt-2 text-xs md:text-sm">
            必須項目をご入力のうえ、「送信する」ボタンを押してください。
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              {/* 名前 */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      お名前 <span className="text-red-500 text-xs">必須</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="例）山田 太郎"
                        {...field}
                        className="text-sm md:text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* メールアドレス */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      メールアドレス{" "}
                      <span className="text-red-500 text-xs">必須</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="例）example@example.com"
                        {...field}
                        className="text-sm md:text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 電話番号 */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      電話番号{" "}
                      <span className="text-red-500 text-xs">必須</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="000-0000-0000"
                        {...field}
                        className="text-sm md:text-base"
                      />
                    </FormControl>
                    <p className="mt-1 text-[11px] text-muted-foreground md:text-xs">
                      ハイフンを含めてご入力ください。
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 会社名（任意） */}
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>会社名（任意）</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="例）〇〇株式会社"
                        {...field}
                        className="text-sm md:text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 参加希望日 */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      参加希望日{" "}
                      <span className="text-red-500 text-xs">必須</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="text-sm md:text-base">
                          <SelectValue placeholder="日程を選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2026-01-25">
                            2026年1月25日（日） 東京・赤坂開催
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 送信ボタン */}
              <div className="pt-4 flex justify-end">
                <Button
                  type="submit"
                  className="w-full md:w-auto"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "送信中..." : "送信する"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
