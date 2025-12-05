// components/faq-section.tsx
"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: "q1",
    question: "誰でも参加できますか？",
    answer:
      "健康に関心のある方であれば、どなたでもご参加いただけます。医療・健康分野の専門知識がない方でも、わかりやすくお伝えします。",
  },
  {
    id: "q2",
    question: "当日の持ち物は何ですか？",
    answer:
      "筆記用具とメモ帳をご持参ください。服装はリラックスできる平服でかまいません。必要な資料は会場でお渡しいたします。",
  },
  {
    id: "q3",
    question: "キャンセルポリシーは？",
    answer:
      "開催日の◯日前までは全額返金、◯日以降のキャンセルは返金致しかねます。詳細はお申し込み完了メールにてご案内いたします。",
  },
  {
    id: "q4",
    question: "オンライン参加は可能ですか？",
    answer:
      "今回のセミナーは【会場参加のみ】を基本としております。オンライン開催回が決まり次第、公式サイト・メールマガジン等でご案内いたします。",
  },
  {
    id: "q5",
    question: "参加費はいくらですか？",
    answer:
      "本ページでご案内している日程のセミナー参加費は、お一人さま税込¥10,000です。早期申込特典やペア割がある場合は、別途ご案内いたします。",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="w-full bg-[#F9F9F9] px-4 py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0E1C36]/60">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl text-[#0E1C36]">
            よくあるご質問
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            セミナー参加にあたって、よくいただくご質問をまとめました。
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-[#0E1C36]/10 bg-white px-4 rounded-xl hover:border-[#F5D193] transition-colors"
            >
              <AccordionTrigger className="text-left text-sm font-medium md:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-slate-700 md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
