import { BottonBar } from "@/components/BottonBar"
import { Header } from "@/components/Header"
import { Outlet } from "react-router-dom"

export default function AppLayout(){
    return(
        <div className="relative min-h-screen bg-background-primario pb-20">
            <Header/>

            <main className="w-full h-full">
                <Outlet/>
            </main>

            <BottonBar/>
        </div>
    )
}