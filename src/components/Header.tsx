import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar"
import perfil from "../assets/img1.jpg"

export function Header() {
    const data = new Date()
    const ano = data.getFullYear()
    const mes = data.getMonth()

    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    
    return (
        <div className="w-full border-b border-amarelo-alerta flex items-center justify-between pb-4 pt-4 px-2">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarFallback>Will</AvatarFallback>
                    <AvatarImage src={perfil}></AvatarImage>
                    <AvatarBadge className="bg-green-500 border-amarelo-alerta"></AvatarBadge>
                </Avatar>
                <p className="text-amber-50 font-normal text-center">
                    <i className="text-laranja-motor font-black">KM</i> Finance
                </p>
            </div>

            <p className="text-gray-500 font-medium">{meses[mes].toUpperCase()} {ano}</p>
        </div>
    )
}