"use client"
import { DataTable } from "@/components/Table/data_table"
import { NextPage } from "next"


const Page : NextPage = () => {
    return(
        <div className="bg-white">
            <DataTable />
        </div>
    )
}


export default Page