import { Button } from "../ui/button"
import { Activity, FileText, Settings, ChartNoAxesCombined } from "lucide-react"

export function BottonBar(){

    return(
        <div className="w-full flex justify-center bg-amarelo-alerta items-center fixed bottom-0 left-0 right-0 z-50">

            <Button className="flex bg-amber-50 text-background-primario flex-col h-20">
                <Activity />
                Telemetria
            </Button>

            <Button className="flex bg-amber-50 text-background-primario flex-col h-20">
                <FileText />
                Processar PDF
            </Button>

            <Button className="flex bg-amber-50 text-background-primario flex-col h-20">
                <Settings />
                Veículo
            </Button>

            <Button className="flex bg-amber-50 text-background-primario flex-col h-20">
                <ChartNoAxesCombined />
                Analytics
            </Button>
        </div>
    )
}