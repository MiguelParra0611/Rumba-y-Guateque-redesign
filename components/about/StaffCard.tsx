import type { StaffMember } from "@/lib/data/staff";
import { CoverImage } from "@/components/ui/CoverImage";

export function StaffCard({ member, muted = false }: { member: StaffMember; muted?: boolean }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 w-full">
      <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-ink/10 ring-2 ring-guateque-gold/40">
        <CoverImage src={member.photo} alt={member.name} />
      </div>
      <div>
        <p className={`font-semibold ${muted ? "text-ink/60" : "text-ink"}`}>{member.name}</p>
        <p className={`text-sm ${muted ? "text-ink/40" : "text-salsa-red"}`}>{member.role}</p>
        {member.bio ? <p className="mt-1 max-w-[16rem] text-xs text-ink/50">{member.bio}</p> : null}
      </div>
    </div>
  );
}
