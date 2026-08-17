"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: Props) {
  return (
    <section className={`relative overflow-hidden py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
