"use client";

interface Props {
  currentStep: number;
}

const steps = ["Choose Service", "Project Details", "Start Conversation"];

export default function StepIndicator({ currentStep }: Props) {
  return (
    <div className="mb-10 flex items-center justify-between">
      {steps.map((step, index) => {
        const active = index + 1 <= currentStep;

        return (
          <div key={step} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div
                className={`
                  flex h-10 w-10 items-center justify-center rounded-full
                  text-sm font-bold transition-all
                  ${
                    active
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }
                `}
              >
                {index + 1}
              </div>

              <span
                className={`
                  mt-3 text-xs font-medium
                  ${active ? "text-cyan-600" : "text-slate-400"}
                `}
              >
                {step}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`
                  mx-4 h-[2px] flex-1
                  ${index + 1 < currentStep ? "bg-cyan-500" : "bg-slate-200"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
