import {create} from 'zustand'

const useAllStore = create((set) => ({
    dasboardPath: "Dashboard",
    setDashboardPath: (path) => set({ dasboardPath: path }),
  }))


  export {useAllStore };