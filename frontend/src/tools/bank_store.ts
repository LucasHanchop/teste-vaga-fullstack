import BankService from "@/services/bank.service"
import { Bank } from "@/types/bank"
import { create } from "zustand"


interface BankState {
    bank: number,
    loading: boolean,
    setLoading?: (state: boolean) => void,
}

const useBankStore = create<BankState>((set) => ({
    bank: 0,
    loading: false,
    // setLoading: (state) => set( state => {sta} )
}))

export default useBankStore;