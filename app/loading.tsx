export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold/30 border-t-gold" />
        <p className="text-sm text-gray-300">Loading…</p>
      </div>
    </div>
  );
}
