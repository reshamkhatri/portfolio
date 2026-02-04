import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Code2, Copy, Loader2, MousePointer2, Sparkles, Wand2 } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'

type LabItem = {
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
  demo: React.ReactNode
}

function SectionHeader() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-7xl font-bold font-space mb-6">
        UI <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Lab</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Small interaction experiments I use to make interfaces feel premium—smooth, responsive, and delightful.
      </p>
    </div>
  )
}

function LabCard({ item, index }: { item: LabItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative p-7 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-space text-white truncate">
                {item.title}
              </h3>
            </div>
            <p className="mt-3 text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="hidden md:flex flex-wrap gap-2 justify-end">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs bg-black/30 border border-white/10 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-5 md:p-6">
          {item.demo}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="md:hidden flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs bg-black/30 border border-white/10 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2 text-xs text-gray-500">
            <Code2 className="h-4 w-4" />
            Interactive snippet
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MagneticButtonDemo() {
  const containerRef = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 })

  const onMove = (e: React.MouseEvent) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.18)
    y.set(dy * 0.18)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      <div className="space-y-1.5">
        <p className="text-sm text-gray-300 font-semibold">Magnetic button</p>
        <p className="text-sm text-gray-500">Hover and move your cursor inside.</p>
      </div>

      <motion.button
        ref={containerRef}
        type="button"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ x: springX, y: springY }}
        className="relative w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-semibold overflow-hidden"
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          Hover me <MousePointer2 className="h-4 w-4" />
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-orange-200 to-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </div>
  )
}

function CopyChipDemo() {
  const [copied, setCopied] = useState(false)

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      <div className="space-y-1.5">
        <p className="text-sm text-gray-300 font-semibold">Copy micro-interaction</p>
        <p className="text-sm text-gray-500">A tiny feedback pattern for UI chips.</p>
      </div>

      <button
        type="button"
        onClick={() => {
          setCopied(true)
          window.setTimeout(() => setCopied(false), 900)
        }}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-gray-200"
      >
        <Copy className="h-4 w-4 text-orange-400" />
        {copied ? 'Copied' : 'Copy style token'}
      </button>
    </div>
  )
}

function LoaderDemo() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      <div className="space-y-1.5">
        <p className="text-sm text-gray-300 font-semibold">Elegant loader</p>
        <p className="text-sm text-gray-500">Works nicely inside buttons and cards.</p>
      </div>

      <div className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 text-gray-200">
        <Loader2 className="h-4 w-4 animate-spin text-orange-400" />
        Loading preview…
      </div>
    </div>
  )
}

function SegmentedDemo() {
  const options = useMemo(() => ['Design', 'Motion', 'Dev'], [])
  const [active, setActive] = useState(options[0]!)

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      <div className="space-y-1.5">
        <p className="text-sm text-gray-300 font-semibold">Segmented control</p>
        <p className="text-sm text-gray-500">A clean way to switch content.</p>
      </div>

      <div className="w-full sm:w-auto p-1 rounded-full border border-white/10 bg-black/40 flex gap-1">
        {options.map((opt) => {
          const isActive = opt === active
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setActive(opt)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive ? 'bg-white text-black' : 'text-gray-300 hover:bg-white/10'
              }`}
              aria-pressed={isActive}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ShimmerDemo() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="relative h-16 rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.2s_infinite]" />
        </div>
      ))}
    </div>
  )
}

export function UILab() {
  const items: LabItem[] = useMemo(
    () => [
      {
        title: 'Magnetic CTA',
        description: 'A subtle magnetic hover that makes CTAs feel alive without being distracting.',
        tags: ['Hover', 'Spring', 'CTA'],
        icon: <Wand2 className="h-5 w-5 text-orange-400" />,
        demo: <MagneticButtonDemo />,
      },
      {
        title: 'Copy Feedback',
        description: 'Instant feedback improves trust—especially for small actions like copying info.',
        tags: ['UX', 'Micro', 'Feedback'],
        icon: <Copy className="h-5 w-5 text-orange-400" />,
        demo: <CopyChipDemo />,
      },
      {
        title: 'Segmented Switch',
        description: 'A clean switcher that works for tabs, filters, or content modes.',
        tags: ['Controls', 'UI', 'States'],
        icon: <Sparkles className="h-5 w-5 text-orange-400" />,
        demo: <SegmentedDemo />,
      },
      {
        title: 'Shimmer Skeletons',
        description: 'Lightweight skeletons that match dark UIs and reduce perceived wait time.',
        tags: ['Loading', 'Skeleton', 'Polish'],
        icon: <Loader2 className="h-5 w-5 text-orange-400" />,
        demo: <ShimmerDemo />,
      },
      {
        title: 'Soft Loader Row',
        description: 'A calm loading row that looks great in lists, cards, and modals.',
        tags: ['Loading', 'Motion', 'UI'],
        icon: <Loader2 className="h-5 w-5 text-orange-400" />,
        demo: <LoaderDemo />,
      },
    ],
    [],
  )

  return (
    <section id="ui-lab" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {items.map((item, index) => (
            <LabCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center text-sm text-gray-500">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">
            <Code2 className="h-4 w-4 text-orange-400" />
            Want more experiments here? I can add tilt cards, cursor-follow gradients, and modal transitions next.
          </span>
        </div>
      </div>
    </section>
  )
}

