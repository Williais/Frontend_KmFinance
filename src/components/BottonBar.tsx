import { Button } from "../ui/button"
import { Activity, FileText, Settings, ChartNoAxesCombined } from "lucide-react"

export function BottonBar(){

    return(
        <div className="w-full flex justify-center items-center fixed bottom-0 left-0 right-0 z-50">

            <Button className="flex flex-col h-20 w-1/4 bg-background-primario text-gray-400 rounded-none border-background-secundario focus:border-0 focus:border-t-2 focus:border-laranja-motor focus:text-amber-50">
                <Activity />
                Telemetria
            </Button>

            <Button className="flex flex-col h-20 w-1/4 bg-background-primario text-gray-400 rounded-none border-2 border-background-secundario  border-l-0 focus:border-0 focus:border-t-2 focus:border-laranja-motor focus:text-amber-50">
                <FileText />
                Processar PDF
            </Button>

            <Button className="flex  flex-col h-20 w-1/4 bg-background-primario text-gray-400 rounded-none border-background-secundario  border-l-0 focus:border-0 focus:border-t-2 focus:border-laranja-motor focus:text-amber-50">
                <Settings />
                Veículo
            </Button>

            <Button className="flex flex-col h-20 w-1/4 bg-background-primario text-gray-400 rounded-none border-background-secundario border-l-none focus:border-0 focus:border-t-2 focus:border-laranja-motor focus:text-amber-50">
                <ChartNoAxesCombined />
                Analytics
            </Button>
        </div>
    )
}