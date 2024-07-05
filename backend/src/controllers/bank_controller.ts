import { Request, Response } from "express"
import { prisma } from "../database"
import { Bank } from "@prisma/client"

export default  {

    async findAllBanks(req: Request, res: Response): Promise<{}> {
        try {
            const banks = await prisma.bank.findMany()
            if (!banks) {
                return res.json({
                    error: true,
                    message: "Não existe nenhum resultado"
                })
            }
            return res.json({
                error: false, 
                banks: banks
            })
        } catch (err) {
            return res.json({
                error: true,
                message: "Não foi possível concluír a requisição!"
            })
        }
    },

    async createBank(req: Request, res: Response): Promise<{}> {
        try {
            const bank: Bank = req.body
            await prisma.bank.create({
                data: bank
            })
            return res.json({
                error: false,
                message: "Bank Infos Added with Successful!",
                bank
            })
        } catch (err) {
            return res.json({
                error: true,
                message: err
            })
        }
    },

    async deleteBank(req: Request, res: Response): Promise<{} | undefined> {
        try {
            const bank = await prisma.bank.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            })
            if (!bank) {
                return res.json({
                    error: false,
                    message: "Bank not found!",
                })
            }
            await prisma.bank.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })
            return res.json({
                error: false,
                message: "Bank Infos Excluded!",
                bank: bank
            })
        } catch (err) {
            res.json({
                error: true,
                message: err
            })
        }

        
    },

    async findBankById(req: Request, res: Response): Promise<{} | undefined> {
        try {
            const bank = await prisma.bank.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            })

            if (!bank) {
                return res.json({
                    error: true,
                    message: "Bank Info not found!"
                })  
            }

            return res.json({
                error: false,
                bank: bank
            })

        } catch (err) {
            return res.json({
                error: true,
                message: err
            })
        }
    },

    async updateBank(req: Request, res: Response): Promise<{} | undefined> {
        try {
            const data : Partial<Bank> = req.body

            const bankOld = await prisma.bank.findUnique({
                where: {
                   id: parseInt(req.body.id)
               }
            })
            if (!bankOld) {
                return res.json({
                    error: true,
                    message: "Bank Info not found!"
                })  
            }
            console.log(data)
            const bank = await prisma.bank.update({
                where: {
                    id: parseInt(req.body.id)
                },
                data: data
            })

            
            return res.json({
                error: false,
                message: "Bank Info updated successfully!",
                bank: bank
            })
        } catch (err) {
            return res.json({
                error: true,
                message: err
            })
        }
    }


}