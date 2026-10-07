import { Card, CardContent, CardFooter, CardHeader, CardDescription } from "@/ui/card";
import { Progress } from "@/ui/progress";
import { BanknoteArrowUp, BanknoteArrowDown, BadgeDollarSign, ChevronRight } from "lucide-react"

export default function Resumo() {
    return (
        <div className="flex flex-col gap-5 w-full">
            {/* Bloco 1: Faturamento, Custos e Lucro */}
            <Card className="mx-auto w-full max-w-lg bg-background-secundario text-white rounded-none border-none">
                <CardContent className="pt-6">
                    <ul className="flex flex-col gap-2">
                        <li className="flex justify-between items-center pb-5 max-w-xl border-b border-gray-700">
                            <div className="flex gap-4 items-center">
                                <BanknoteArrowUp className="text-amarelo-alerta" size={20} />
                                <span className="text-sm font-bold tracking-wide">FATURAMENTO</span>
                            </div>
                            <span className="text-lg font-bold">R$ 4.620,00</span>
                        </li>

                        <li className="flex justify-between items-center pt-2 pb-2 max-w-xl">
                            <div className="flex gap-4 items-center">
                                <BanknoteArrowDown className="text-red-700" size={20} />
                                <span className="text-sm font-bold tracking-wide">CUSTOS</span>
                            </div>
                            <span className="text-red-700 text-lg font-bold">-R$ 1.774,40</span>
                        </li>
                    </ul>
                </CardContent>
                <CardFooter className="bg-[#182229] border-none rounded-none flex-col flex items-start gap-2 py-6">
                    <div className="flex gap-2 text-laranja-motor items-center font-bold text-sm tracking-wider">
                        <BadgeDollarSign size={18} />
                        <span>LUCRO REAL</span>
                    </div>
                    <span className="font-bold text-4xl">R$ 2.845,60</span>
                </CardFooter>
            </Card>
            
            {/* Bloco 2: KM e Viagens */}
            <Card className="mx-auto w-full max-w-lg bg-background-secundario text-white rounded-none border-none">
                <CardContent className="py-6">
                    <ul className="flex justify-around items-center">
                        <li className="flex flex-col items-center gap-2">
                            <span className="font-bold text-gray-400 text-xs tracking-wider">KM RODADOS</span>
                            <span className="text-2xl font-medium">1.880</span>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                            <span className="font-bold text-gray-400 text-xs tracking-wider">PASSAGEIRO</span>
                            <span className="text-2xl font-medium">1.340</span>
                        </li>
                        <li className="flex flex-col items-center text-laranja-motor gap-2">
                            <span className="font-bold text-xs tracking-wider">VAZIOS</span>
                            <span className="text-2xl font-medium">540</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            {/* Bloco 3: R$/KM e R$/HORA (Alinhados lado a lado) */}
            <div className="flex w-full max-w-lg mx-auto gap-4">
                <Card className="flex-1 bg-background-secundario text-white rounded-none border-none">
                    <CardContent className="flex flex-col gap-2 p-6 items-start">
                        <span className="font-bold text-gray-400 text-xs tracking-wider">R$ / KM</span>
                        <span className="text-2xl font-medium">R$ 1,51</span>
                    </CardContent>
                </Card>

                <Card className="flex-1 bg-background-secundario text-white rounded-none border-none">
                    <CardContent className="flex flex-col gap-2 p-6 items-start">
                        <span className="font-bold text-gray-400 text-xs tracking-wider">R$ / HORA</span>
                        <span className="text-2xl font-medium">R$ 28,45</span>
                    </CardContent>
                </Card>
            </div>

            {/* Bloco 4: Plataformas */}
            <Card className="mx-auto w-full max-w-lg bg-background-secundario text-white rounded-none border-none">
                <CardContent className="flex flex-col gap-6 py-6">
                    <div className="flex items-center gap-2 text-laranja-motor">
                        <ChevronRight size={18} />
                        <span className="font-bold text-gray-400 text-xs tracking-wider">PLATAFORMAS</span>
                    </div>

                    <Progress value={68} className="h-3 bg-gray-300 rounded-none [&>div]:bg-laranja-motor" />

                    <div className="flex justify-between items-start pt-2">
                        {/* Status Uber */}
                        <div className="flex flex-col gap-1 w-1/2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-gray-300 rounded-sm"></div>
                                <span className="font-bold text-sm">UBER</span>
                                <span className="text-gray-400 text-xs ml-2">68%</span>
                            </div>
                            <span className="text-xl font-medium">R$ 3.141</span>
                            <span className="text-gray-500 text-xs">1.240 km</span>
                        </div>

                        {/* Status 99 */}
                        <div className="flex flex-col gap-1 w-1/2 pl-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-laranja-motor rounded-sm"></div>
                                <span className="font-bold text-sm">99</span>
                                <span className="text-gray-400 text-xs ml-2">32%</span>
                            </div>
                            <span className="text-xl font-medium">R$ 1.478</span>
                            <span className="text-gray-500 text-xs">640 km</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}