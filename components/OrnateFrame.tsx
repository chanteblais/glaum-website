export function OrnateFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ornate-frame rounded-sm max-w-2xl mx-auto px-7 py-9 sm:px-12 sm:py-12">
      <h3 className="font-tokyo text-2xl sm:text-3xl text-gold-deep text-center mb-2 text-balance">
        {title}
      </h3>
      <p className="text-center text-gold mb-5 tracking-[0.4em]">•••</p>
      <div className="text-base sm:text-lg leading-relaxed text-ink/85 space-y-4 text-left">
        {children}
      </div>
    </div>
  );
}
