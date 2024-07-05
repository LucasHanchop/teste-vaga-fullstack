import { Router } from "express"
import BankController from "../controllers/bank_controller"
export const bankRouter = Router()


bankRouter.get("/test", (req, res) => { 
    res.send("Teste Feito com sucesso!")
})


bankRouter.get("/findBanks", BankController.findAllBanks)
bankRouter.get("/findBank/:id", BankController.findBankById)
bankRouter.post("/createBank", BankController.createBank)
bankRouter.patch("/updateBank", BankController.updateBank)
bankRouter.delete("/deleteBank/:id", BankController.deleteBank)


