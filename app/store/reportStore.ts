import { create } from 'zustand'

interface Toggle {
  reportToggle: boolean
  setReportToggle: () => void
}

export const useReportStore = create<Toggle>((set) => ({
  reportToggle: false,
  setReportToggle: () =>
    set((state) => ({ reportToggle: !state.reportToggle })),
}))
