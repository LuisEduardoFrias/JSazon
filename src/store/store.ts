//
import { create } from 'zustand'
import { GlobalState } from 'md/global_state'

const useStore = create<GlobalState>((set) => ({
  showMenu: false,
  showAlert: false,
  //
  changeShowMenu: (value: boolean) => set((state) => ({ showMenu: value })),
}))

export default useStore;