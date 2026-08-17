import { forwardRef, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={clsx(
        "w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10",
        className,
      )}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
