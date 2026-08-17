import { forwardRef, SelectHTMLAttributes } from "react";
import clsx from "clsx";

const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
      ref={ref}
      {...props}
      className={clsx(
        "w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10",
        className,
      )}
    />
  );
});

Select.displayName = "Select";

export default Select;
