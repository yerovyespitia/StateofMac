import { create } from 'zustand'

interface Toggle {
  reportToggle: boolean
  setTrueReportToggle: () => void
  setFalseReportToggle: () => void
}

export const useReportStore = create<Toggle>((set) => ({
  reportToggle: false,
  setTrueReportToggle: () => set({ reportToggle: true }),
  setFalseReportToggle: () => set({ reportToggle: false }),
}))
