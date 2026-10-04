import {Avatar, AvatarBadge, AvatarFallback, AvatarImage} from "../ui/avatar"
import { Button } from "../ui/button"
import { CircleFadingArrowUpIcon } from "lucide-react"
import perfil from "../assets/img1.jpg"

export function Navbar(){
    return(
        <div className="border-b-2 border-amarelo-alerta w-100 flex items-start justify-between pb-5">
            <div className="flex gap-5">
                <Avatar>
                    <AvatarFallback>Will</AvatarFallback>
                    <AvatarImage src={perfil}></AvatarImage>
                    <AvatarBadge className="bg-green-500 border-amarelo-alerta"></AvatarBadge>
                </Avatar>
                <p className="text-amber-50 font-normal text-center mt-2"><i className="text-laranja-motor font-black">KM</i> Finance</p>
            </div>
            
            <Button variant="outline" className="p-2 cursor-pointer font-bold hover:text-amarelo-alerta hover:bg-background-secundario hover:outline-none hover:border-none">
                <CircleFadingArrowUpIcon/> Processar PDF
            </Button>

        </div>
    )
}

