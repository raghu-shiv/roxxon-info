import clsx from "clsx";

interface Props {
  className?: string;
}

export default function Glow({ className }: Props) {
  return (
    <div
      className={clsx(
        "absolute rounded-full bg-cyan-500/20 blur-[140px]",
        className,
      )}
    />
  );
}
