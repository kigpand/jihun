import create from 'zustand';

interface IPortFolio {
    portFolio: string;
    changePortFolio: (item: string) => void;
}

const usePortFolio = create<IPortFolio>(set => ({
    portFolio: '포켓몬도감',
    changePortFolio: (item: string) => set({ portFolio: item }),
}));

export default usePortFolio;