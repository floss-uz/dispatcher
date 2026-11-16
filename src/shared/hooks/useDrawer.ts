import { useCallback } from "react"
import { useDrawerStore } from "@/shared/store"

/**
 *
 * @description open, close and read a named drawer from any component
 * @example
 * const userDrawer = useDrawer<{ id: number }>("user-edit")
 * userDrawer.open({ id: 1 })
 */
export const useDrawer = <TPayload = unknown>(name: string) => {
  const isOpen = useDrawerStore((state) => state.drawers[name]?.open ?? false)
  const payload = useDrawerStore((state) => state.drawers[name]?.payload) as TPayload | undefined
  const openDrawer = useDrawerStore((state) => state.openDrawer)
  const closeDrawer = useDrawerStore((state) => state.closeDrawer)

  const open = useCallback((data?: TPayload) => openDrawer(name, data), [name, openDrawer])
  const close = useCallback(() => closeDrawer(name), [name, closeDrawer])

  return { isOpen, payload, open, close }
}
