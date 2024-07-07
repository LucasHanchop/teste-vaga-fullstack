import { ReactElement, useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useQuery } from "@tanstack/react-query"
import columns from "./columns"
import BankService  from "../../services/bank.service"
import { Bank } from "@/types/bank"
import { CircularProgress } from "@mui/material"

export const DataTable = () : ReactElement => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  })
  const { data, error, isLoading } = useQuery({
    queryKey: ["loadBanks"],
    queryFn: BankService.findAllBanks,
  }) 
  const banks: Array<Bank> | undefined = data
  
  if(isLoading)  {
    return (
      <div className="bg-white m-[20%] ml-[50%]">
        <CircularProgress />
      </div>
    )
  }

  return(
    <DataGrid
      className="w-[80%] m-32" 
      rows={banks}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5
          }
        }
      }}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      loading={isLoading}
      pageSizeOptions={[5, 10, 20, 30]}
      disableRowSelectionOnClick
    />
  )

}


