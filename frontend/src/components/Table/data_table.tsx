import { DataGrid } from "@mui/x-data-grid"
import { ReactElement, useEffect, useState } from "react"
import BankService  from "../../services/bank.service"
import { Bank } from "@/types/bank"
import { useQuery } from "@tanstack/react-query"
import columns from "./columns"




  const loading = (
    <div className="bg-white">
      <p>Loading...</p>
    </div>
  )

export const DataTable = () : ReactElement => {
  const [pagination, setPagination] = useState({
    pageSize: 10,
    page: 1  
  })

  const { data, error, isLoading } = useQuery({
    queryKey: ["loadBanks"],
    queryFn:() => BankService.findBankPagination(pagination.pageSize),
  }) 
  useEffect(() => {
    console.log(data)
  })

  if(isLoading) return loading
  return(
    <DataGrid
      className="w-[70%]" 
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      paginationModel={pagination}
      onPaginationModelChange={setPagination}
      pageSizeOptions={[5, 10, 20, 30]}
      disableRowSelectionOnClick
    />
  )

}


