import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24",
        className
      )}
    >
      <div className="container max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
