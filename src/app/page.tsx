import AnimatedBackground from "@/components/animated-background"

export default function Page() {
  return (
    <main className="fixed inset-0 flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <section className="relative z-10 px-6 text-center">
        <h1 className="text-balance font-sans text-6xl font-extrabold tracking-tight md:text-7xl text-text-accent">
          Thinkraft
        </h1>
        <p className="mt-4 font-serif italic text-2xl font-normal md:mt-6 md:text-2xl text-text-accent/90">
          Coming Soon.
        </p>
      </section>
    </main>
  )
}
