const fs = require("fs")
const csv = require("csv-parser")

const csvData: any[] = []
let csvConvertido: any[] = []
const numberFormat = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
})
const readableStream = fs.createReadStream("data.csv").pipe(csv({ columns: true }))


readableStream.on("data", (data: Buffer) => {
    csvData.push(data as ArrayBuffer)
})

readableStream.on("end", () => {
    csvConvertido = csvData.map((el) => {
        return Object.entries(el).map((entry: [string, any]) => {
            const k = entry[0]
            if (k.startsWith("vl")) {
                return {key: k, val: numberFormat.format(entry[1])}
            }
            if (k.startsWith("dt")) {
                const ano: string =  entry[1].substring(0,4)
                const mes: string =  entry[1].substring(4,6)
                const dia: string = entry[1].substring(6)
                const data = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia))
                return {key: k, val: data}
            }
            return { key: k, value: entry[0] }
        })
    })
})



export {
    csvConvertido
}
