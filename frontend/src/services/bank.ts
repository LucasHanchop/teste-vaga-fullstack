import { api } from "./axios"
import { Bank } from "@/types/bank"

const BankData = () => {
    
    async function findAllBanks(): Promise<Array<Bank>> {
        const bank = await api.get("bank/findBanks")
        if (bank.data.error) {
            console.log("Erro")
        }
        return await bank.data.banks
    }

    return {
        findAllBanks
    }
}

export default BankData()