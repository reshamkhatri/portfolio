import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

type UseLenisOptions = {
  enabled?: boolean
  lerp?: number
}

export function useLenis(options: UseLenisOptions = {}) {
  const { enabled = true, lerp = 0.1 } = options
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (!enabled) return
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      lerp,
      smoothWheel: true,
      syncTouch: false,
    })

    lenisRef.current = lenis

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = window.requestAnimationFrame(raf)
    }
    rafId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(rafId)
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [enabled, lerp])

  return lenisRef
}
