import { cn } from "@/lib/utils";

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ResumeSection({ title, children, className }: ResumeSectionProps) {
  return (
    <section className={cn("mb-8 print:mb-6", className)}>
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary print:text-xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
