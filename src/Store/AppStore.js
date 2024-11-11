import {create} from 'zustand'

const useAllStore = create((set) => ({
    dasboardPath: "Dashboard",
    modalStatusShow: false,
    setDashboardPath: (path) => set({ dasboardPath: path }),
    setModalStatusShow: (status) => set({ modalStatusShow: status }),
  }))


  export {useAllStore };