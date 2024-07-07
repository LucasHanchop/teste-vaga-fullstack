import { create } from "zustand"


interface BankState {
    bank: number,
    increase: (by: number) => void
    decrease: (by: number) => void
}

const useBankStore = create<BankState>((set) => ({
    bank: 5,
    increase: (by: number) => (set((state) => ({ bank: state.bank + by }))),
    decrease: (by: number) => (set((state) => ({ bank: state.bank - by })))
}))

export default useBankStore