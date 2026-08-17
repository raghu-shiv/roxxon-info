"use client";

interface Props {
  children: React.ReactNode;
  gradient?: string;
}

export default function IconWrapper({
  children,
  gradient = "from-cyan-500 to-blue-600",
}: Props) {
  return (
    <div
      className={`
        inline-flex
        rounded-2xl
        bg-gradient-to-br
        ${gradient}
        p-4
        text-white
        shadow-lg
      `}
    >
      {children}
    </div>
  );
}
