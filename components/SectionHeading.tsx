export function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="text-center scroll-mt-24">
      <h2 className="font-tokyo text-4xl sm:text-5xl lg:text-6xl mb-6 text-gold-deep text-balance">
        {children}
      </h2>
      <div className="flex justify-center mb-10">
        <div className="gold-rule w-48" />
      </div>
    </div>
  );
}
