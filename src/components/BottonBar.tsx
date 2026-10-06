import { NavLink } from "react-router-dom"
import { Activity, Motorbike, DollarSign, Terminal, ChartNoAxesCombined } from "lucide-react"

export function BottonBar(){
    const navLinkClass = ({isActive}: {isActive:boolean})=> {

        const baseClass = "flex flex-col justify-center items-center h-20 w-1/4 bg-background-primario rounded-none border-background-secundario transition-colors"
        
        const activeState = isActive 
            ? "border-t-2 border-laranja-motor text-amber-50" 
            : "text-gray-400 border-t-0"
            
        return `${baseClass} ${activeState}`
    }

    return(
        <div className="w-full flex justify-center items-center fixed bottom-0 left-0 right-0 z-50">

            <NavLink to="/resumo" className={navLinkClass}>
                <Activity className="text-amarelo-alerta"/>
                <span>Resumo</span>
            </NavLink>

            <NavLink to="/corridas" className={navLinkClass}>
                <Terminal className="text-amarelo-alerta"/>
                <span>Corridas</span>
            </NavLink>

            <NavLink to="/financeiro" className={navLinkClass}>
                <DollarSign className="text-amarelo-alerta"/>
                <span>Financeiro</span>
            </NavLink>

            <NavLink to="/veiculo" className={navLinkClass}>
                <Motorbike className="text-amarelo-alerta"/>
                <span>Veículo</span>
            </NavLink>

            <NavLink to="/analytics" className={navLinkClass}>
                <ChartNoAxesCombined className="text-amarelo-alerta"/>
                <span>Analytics</span>
            </NavLink>
            
        </div>
    )
}