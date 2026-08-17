import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={clsx(
        "w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10",
        className,
      )}
    />
  );
});

Input.displayName = "Input";

export default Input;
