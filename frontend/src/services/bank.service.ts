import { api } from "./axios"
import { Bank } from "@/types/bank"

const BankService = () => {

    async function findAllBanks(): Promise<Array<Bank>> {
        const bank = await api.get("bank/findBanks")
        if (bank.data.error) {
            console.log("Erro")
        }
        return await bank.data.banks
    }

    async function findBankPagination(take: number, skip?: number): Promise<Array<Bank>> {
        const bank = await api.post("bank/findBankPagination", {
            take: take,
            skip: skip!
        })

        return bank.data.banks
    }

    return {
        findAllBanks,
        findBankPagination
    }
}

export default BankService()