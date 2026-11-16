import { create } from "zustand"

interface DrawerEntry {
  open: boolean
  payload?: unknown
}

interface DrawerState {
  drawers: Record<string, DrawerEntry>
  openDrawer: (name: string, payload?: unknown) => void
  closeDrawer: (name: string) => void
}

/**
 *
 * @description open/closed state of every named drawer, so a drawer can be opened from anywhere
 */
export const useDrawerStore = create<DrawerState>((set) => ({
  drawers: {},
  openDrawer: (name, payload) =>
    set((state) => ({ drawers: { ...state.drawers, [name]: { open: true, payload } } })),
  closeDrawer: (name) =>
    set((state) => ({
      drawers: { ...state.drawers, [name]: { ...state.drawers[name], open: false } },
    })),
}))
