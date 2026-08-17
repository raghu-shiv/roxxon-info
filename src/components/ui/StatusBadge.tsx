import clsx from "clsx";

interface Props {
  status: "Live" | "Private" | "Active" | "Available" | "Hiring";
}

const styles = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Private: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Active: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  Available: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Hiring: "bg-violet-500/15 text-violet-400 border-violet-500/20",
};

export default function StatusBadge({ status }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold",
        styles[status],
      )}
    >
      {status}
    </span>
  );
}
