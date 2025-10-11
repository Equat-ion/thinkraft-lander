"use client"

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Primary brand blob */}
      <div className="absolute left-[-20%] top-[-15%] h-[55vmax] w-[55vmax] rounded-full bg-brand/50 blur-[100px] animate-blob-1" />
      {/* Secondary pass using same brand with different opacity for depth without adding new colors */}
      <div className="absolute right-[-15%] bottom-[-20%] h-[60vmax] w-[60vmax] rounded-full bg-brand/30 blur-[110px] animate-blob-2" />
    </div>
  )
}
