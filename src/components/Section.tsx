interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 min-h-[50vh] ${className}`}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 tracking-tight">{title}</h2>
        {children}
      </div>
    </section>
  );
}
