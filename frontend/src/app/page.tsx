"use client"
import { DataTable } from "@/components/Table/data_table"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { NextPage } from "next"

const queryClient = new QueryClient()

const Page : NextPage = () => {
    return(
        <div>
            <QueryClientProvider client={queryClient}>
                <DataTable />
            </QueryClientProvider>
        </div>
    )
}


export default Page