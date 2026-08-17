"use client";

import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export default function ContactInfoCard({
  icon: Icon,
  title,
  value,
}: ContactInfoCardProps) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Icon size={22} className="text-cyan-600" />
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>

          <p className="text-slate-500">{value}</p>
        </div>
      </div>
    </GlassCard>
  );
}
