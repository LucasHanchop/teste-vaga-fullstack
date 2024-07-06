import { Bank } from "@/types/bank"
import { GridColDef } from "@mui/x-data-grid"
const numberFormat = new Intl.NumberFormat("pt-Br", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2
})
const columns: Array<GridColDef<Bank>> = [
  {
    field: "id",
    headerName: "ID",
    width: 50
  },
  {
    field: "nrInst",
    headerName: "Nr Instalação",
    width: 120
  },
  {
    field: "nrAgencia",
    headerName: "Nr Agência",
    width: 120
  },
  {
    field: "cdClient",
    headerName: "Código Cliente",
    width: 120
  },
  {
    field: "nmClient",
    headerName: "Nome Cliente",
    width: 200
  },
  {
    field: "nrCpfCnpj",
    headerName: "CPF/CNPJ",
    width: 120
  },
  {
    field: "nrContrato",
    headerName: "Número Contrato",
    width: 150
  },
  {
    field: "dtContrato",
    headerName: "Data Contrato",
    width: 150,
    valueGetter: (value) => {return new Date(value)},
    valueFormatter: (value?: Date) => {
      if (value == null) {
        return ""
      }
      return `${value.getDate()}/0${value.getMonth() + 1}/${value.getFullYear()}`
    }
  },
  {
    field: "qtPrestacoes",
    headerName: "Quantidade Parcelas",
    width: 120
  },
  {
    field: "vlTotal",
    headerName: "Valor Total",
    width: 120,
    valueGetter: (value: string) => { return value },
    valueFormatter: (value: string) => {
      if (value == null) {
        return ""
      }
      return numberFormat.format(parseFloat(value))
    }
  },
  {
    field: "cdProduto",
    headerName: "Código Produto",
    width: 120
  },
  {
    field: "dsProduto",
    headerName: "Descrição Produto",
    width: 200
  },
  {
    field: "cdCarteira",
    headerName: "Código Carteira",
    width: 120
  },
  {
    field: "dsCarteira",
    headerName: "Descrição Carteira",
    width: 200
  },
  {
    field: "nrProposta",
    headerName: "Número Proposta",
    width: 120
  },
  {
    field: "nrPresta",
    headerName: "Número Parcela",
    width: 120
  },
  {
    field: "tpPresta",
    headerName: "Tipo Prestação",
    width: 150
  },
  {
    field: "nrSeqPre",
    headerName: "Sequência Prestação",
    width: 120
  },
  {
    field: "dtVctPre",
    headerName: "Data Vencimento",
    width: 150,
    valueGetter: (value) => {return new Date(value)},
    valueFormatter: (value?: Date) => {
      if (value == null) {
        return ""
      }
      return `${value.getDate()}/0${value.getMonth() + 1}/${value.getFullYear()}`
    }
  },
  {
    field: "vlPresta",
    headerName: "Valor Parcela",
    width: 120,
    valueGetter: (value: string) => { return value },
    valueFormatter: (value: string) => {
      if (value == null) {
        return ""
      }
      return numberFormat.format(parseFloat(value))
    }
  },
  {
    field: "vlMora",
    headerName: "Valor Multa",
    width: 120,
    valueGetter: (value: string) => { return value },
    valueFormatter: (value: string) => {
      if (value == null) {
        return ""
      }
      return numberFormat.format(parseFloat(value))
    }
  },
  {
    field: "vlMulta",
    headerName: "Valor Multa",
    width: 120,
    valueGetter: (value: string) => { return value },
    valueFormatter: (value: string) => {
      if (value == null) {
        return ""
      }
      return numberFormat.format(parseFloat(value))
    }
  },
  {
    field: "vlOutAcr",
    headerName: "Valor Outras Acrescimos",
    width: 150,
    valueGetter: (value: string) => { return value },
    valueFormatter: (value: string) => {
      if (value == null) {
        return ""
      }
      return numberFormat.format(parseFloat(value))
    }
  },
  {
    field: "vlIof",
    headerName: "Valor IOF",
    width: 120,
    valueGetter: (value: string) => { return value },
    valueFormatter: (value: string) => {
      if (value == null) {
        return ""
      }
      return numberFormat.format(parseFloat(value))
    }
  },
  {
    field: "vlDescon",
    headerName: "Valor Desconto",
    width: 120,
    valueGetter: (value: string) => { return value },
    valueFormatter: (value: string) => {
      if (value == null) {
        return ""
      }
      return numberFormat.format(parseFloat(value))
    }
  },
  {
    field: "vlAtual",
    headerName: "Valor Atual",
    width: 120,
    valueGetter: (value: string) => { return value },
    valueFormatter: (value: string) => {
      if (value == null) {
        return ""
      }
      return numberFormat.format(parseFloat(value))
    }
  },
  {
    field: "idSituac",
    headerName: "Situacao",
    width: 150
  },
  {
    field: "idSitVen",
    headerName: "Situacao Vencimento",
    width: 180
  }
]
  
  export default columns