import express from "express"
import cors from "cors"
import morgan from "morgan"
import { bankRouter } from "./routes"

export const app = express()
const logger = morgan

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use("/bank", bankRouter)

