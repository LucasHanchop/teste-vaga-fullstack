"use client"
import { DataTable } from "@/components/Table/data_table"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { NextPage } from "next"

const queryClient = new QueryClient()

const Page : NextPage = () => {
    return(
        <QueryClientProvider client={queryClient}>
            <div className="bg-white">
                <DataTable />
            </div>
        </QueryClientProvider>
    )
}


export default Page