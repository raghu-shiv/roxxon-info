"use client";

import CountUp from "react-countup";
import IconWrapper from "./IconWrapper";

interface Props {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  title: string;
}

export default function MetricCard({ icon, value, suffix, title }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <IconWrapper>{icon}</IconWrapper>

      <div className="mt-8">
        <h3 className="text-5xl font-bold text-slate-900">
          <CountUp end={value} duration={2} />

          {suffix}
        </h3>

        <p className="mt-4 text-lg font-medium text-slate-700">{title}</p>
      </div>
    </div>
  );
}
