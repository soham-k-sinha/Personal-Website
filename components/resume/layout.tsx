import { cn } from "@/lib/utils";

interface ResumeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function ResumeLayout({ children, className }: ResumeLayoutProps) {
  return (
    <div
      className={cn(
        "max-w-4xl mx-auto bg-background text-foreground",
        "print:max-w-none print:bg-white print:text-black",
        className
      )}
    >
      {children}
    </div>
  );
}
