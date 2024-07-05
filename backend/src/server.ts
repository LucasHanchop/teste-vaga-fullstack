import { app } from "./app"
import { csvConvertido } from "./functions/read_convert_csv"

const port = process.env.PORT || 3100

const server = app.listen(port, () => { 
    console.log("App listening on port ", port)
})



process.on("SIGINT", () => {
    server.close()
    console.log("Server closed")
}) 