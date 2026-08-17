"use client";

interface Props {
  dark?: boolean;
}

export default function GradientBackground({ dark = false }: Props) {
  return (
    <>
      <div
        className={`absolute left-0 top-0 h-[450px] w-[450px] rounded-full blur-[120px]
        ${dark ? "bg-cyan-500/10" : "bg-cyan-100"}`}
      />

      <div
        className={`absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full blur-[120px]
        ${dark ? "bg-blue-500/10" : "bg-blue-100"}`}
      />
    </>
  );
}
