import { useEffect, useRef, useCallback } from "react"

interface UseAutoScrollOptions {
  threshold?: number
  scrollSpeed?: number
  enabled?: boolean
}

export const useAutoScroll = (options: UseAutoScrollOptions = {}) => {
  const { threshold = 50, scrollSpeed = 1, enabled = true } = options

  const containerRef = useRef<HTMLElement>(null)
  const scrollIntervalRef = useRef<number | null>(null)
  const isScrollingRef = useRef(false)

  const startAutoScroll = useCallback(
    (deltaX: number, deltaY: number) => {
      if (scrollIntervalRef.current || !containerRef.current) return

      isScrollingRef.current = true

      const scroll = () => {
        if (!containerRef.current || !isScrollingRef.current) return

        containerRef.current.scrollBy({
          left: deltaX * scrollSpeed,
          top: deltaY * scrollSpeed,
          behavior: "auto",
        })

        scrollIntervalRef.current = requestAnimationFrame(scroll)
      }

      scrollIntervalRef.current = requestAnimationFrame(scroll)
    },
    [scrollSpeed]
  )

  const stopAutoScroll = useCallback(() => {
    isScrollingRef.current = false
    if (scrollIntervalRef.current) {
      cancelAnimationFrame(scrollIntervalRef.current)
      scrollIntervalRef.current = null
    }
  }, [])

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!enabled || !containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      let deltaX = 0
      let deltaY = 0

      // Check horizontal scrolling
      if (mouseX < threshold && container.scrollLeft > 0) {
        // Near left edge, scroll left
        deltaX = -Math.max(1, (threshold - mouseX) / 10)
      } else if (
        mouseX > rect.width - threshold &&
        container.scrollLeft < container.scrollWidth - container.clientWidth
      ) {
        // Near right edge, scroll right
        deltaX = Math.max(1, (mouseX - (rect.width - threshold)) / 10)
      }

      // Check vertical scrolling
      if (mouseY < threshold && container.scrollTop > 0) {
        // Near top edge, scroll up
        deltaY = -Math.max(1, (threshold - mouseY) / 10)
      } else if (
        mouseY > rect.height - threshold &&
        container.scrollTop < container.scrollHeight - container.clientHeight
      ) {
        // Near bottom edge, scroll down
        deltaY = Math.max(1, (mouseY - (rect.height - threshold)) / 10)
      }

      if (deltaX !== 0 || deltaY !== 0) {
        startAutoScroll(deltaX, deltaY)
      } else {
        stopAutoScroll()
      }
    },
    [enabled, threshold, startAutoScroll, stopAutoScroll]
  )

  const handleMouseLeave = useCallback(() => {
    stopAutoScroll()
  }, [stopAutoScroll])

  useEffect(() => {
    const container = containerRef.current
    if (!container || !enabled) return

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
      stopAutoScroll()
    }
  }, [enabled, handleMouseMove, handleMouseLeave, stopAutoScroll])

  return { containerRef, stopAutoScroll }
}
