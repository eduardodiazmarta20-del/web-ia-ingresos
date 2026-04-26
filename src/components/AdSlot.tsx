type AdSlotProps = {
  slot: string;
  label?: string;
};

export function AdSlot({ slot, label = "Anuncio" }: AdSlotProps) {
  return (
    <aside className="my-8 rounded-lg border border-dashed border-slate-300 bg-white/80 p-5 text-center text-sm text-slate-500">
      <span className="block text-xs uppercase tracking-[0.16em] text-slate-400">{label}</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <p className="mt-2">Slot AdSense preparado: {slot}</p>
    </aside>
  );
}
