import create from 'zustand';

interface IStore {
    modal: string | null;
    onOpenModal: (item: string) => void;
    onCloseModal: () => void;
}

const useUserStore = create<IStore>(set => ({
    modal: null,
    onOpenModal: (item: string) => set({ modal: item }),
    onCloseModal: () => set({ modal: null })
}));

export default useUserStore;