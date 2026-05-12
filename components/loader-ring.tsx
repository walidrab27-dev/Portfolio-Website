export function LoaderRing() {
  return (
    <div className="relative grid h-24 w-24 place-items-center">
      <span className="loader-ring absolute inset-0 rounded-full border border-cyan/35" />
      <span className="loader-ring-reverse absolute inset-4 rounded-full border border-violet/35" />
      <span className="font-display text-sm font-black text-pearl">WR</span>
    </div>
  );
}
