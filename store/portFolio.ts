import create from 'zustand';

interface IPortFolio {
    portFolio: string;
    portCount: number;
    changePortFolio: (item: string) => void;
    changePortCount: (num: number) => void;
}

const usePortFolio = create<IPortFolio>(set => ({
    portFolio: '포켓몬도감',
    portCount: 0,
    changePortFolio: (item: string) => set({ portFolio: item }),
    changePortCount: (num: number) => set({ portCount: num })
}));

export default usePortFolio;