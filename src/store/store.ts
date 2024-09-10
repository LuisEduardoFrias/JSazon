import { create } from 'zustand';
import { GlobalState } from 'md/global_state';
import GetSession from 'hp/get_session';

const useStore = create<GlobalState>((set) =>
({
  showMenu: false,
  showAlert: false,
  session: null,
  addSession: (session: any) => set((state) => ({ session: session })),
  changeShowMenu: (value: boolean) => set((state) => ({ showMenu: value })),
}));

GetSession().then((session) => {
  useStore.setState({ ...useStore.getState(), session: session });
});

export default useStore;