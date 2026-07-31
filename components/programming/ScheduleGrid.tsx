import { days, schedule } from "@/lib/data/schedule";

function formatHour(hhmm: string) {
  if (hhmm === "24:00") return "12:00 am";
  const [hStr, m] = hhmm.split(":");
  const h = Number(hStr);
  const period = h < 12 ? "am" : "pm";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m} ${period}`;
}

export function ScheduleGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-7">
      {days.map((day) => {
        const entries = schedule
          .filter((e) => e.day === day)
          .sort((a, b) => a.start.localeCompare(b.start));

        return (
          <div key={day} className="rounded-2xl bg-white ring-1 ring-ink/[0.06] overflow-hidden">
            <div className="bg-vinyl-black py-2.5 text-center">
              <p className="font-[family-name:var(--font-display)] tracking-wide text-cream">{day}</p>
            </div>
            <div className="flex flex-col divide-y divide-ink/[0.06]">
              {entries.map((entry, i) => (
                <div
                  key={i}
                  className={`px-3 py-2.5 ${
                    entry.openSlot ? "bg-ink/[0.02]" : "bg-guateque-gold-soft/20"
                  }`}
                >
                  <p className="text-[11px] font-medium text-ink/50">
                    {formatHour(entry.start)} – {formatHour(entry.end)}
                  </p>
                  <p className={`text-sm font-semibold ${entry.openSlot ? "text-ink/40 italic" : "text-ink"}`}>
                    {entry.show}
                  </p>
                  {entry.host ? <p className="text-xs text-salsa-red">{entry.host}</p> : null}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
