import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

const schedules = [
  {
    date: "2026年1月25日（土）",
    time: "14:00〜17:00",
    location: "都内にて",
    venue: "ご参加者のみにご連絡します",
    capacity: "定員20名",
    status: "残りわずか",
  },
]

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4">SCHEDULE & PRICING</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">日程・料金</h2>
          <div className="w-12 h-px bg-border mx-auto" />
        </div>

        {/* Pricing */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="bg-card border border-border p-10">
            <p className="text-sm text-muted-foreground mb-2">セミナー参加費</p>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-4xl md:text-5xl font-medium">¥10,000</span>
              <span className="text-muted-foreground">（税込）</span>
            </div>
          </div>
        </div>

        {/* Schedule Cards */}
        <div className="flex justify-center max-w-5xl mx-auto mb-16">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 hover:border-accent/30 transition-colors max-w-md w-full"
            >
              {schedule.status === "残りわずか" && (
                <span className="inline-block text-xs bg-accent text-accent-foreground px-3 py-1 mb-4">
                  {schedule.status}
                </span>
              )}
              {schedule.status === "受付中" && (
                <span className="inline-block text-xs bg-muted text-muted-foreground px-3 py-1 mb-4">
                  {schedule.status}
                </span>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{schedule.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{schedule.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <span className="text-muted-foreground">{schedule.location}</span>
                    <br />
                    <span className="text-sm text-muted-foreground">{schedule.venue}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{schedule.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="px-12 py-6 text-base tracking-wide">
            セミナーに申し込む
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">お申し込み後、詳細をメールでお送りいたします</p>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2025 加藤雅俊オフィス. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
