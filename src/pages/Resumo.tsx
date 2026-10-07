import { Card, CardContent, CardFooter, CardHeader, CardDescription } from "@/ui/card";
import { Progress } from "@/ui/progress";
import { BanknoteArrowUp, BanknoteArrowDown, BadgeDollarSign, ChevronRight } from "lucide-react"

export default function Resumo() {
    return (
        <div className="flex flex-col gap-5 w-full">
            <Card size="sm" className="mx-auto w-full max-w-lg bg-background-secundario text-white rounded-none ">
                <CardContent>
                    <ul className=" flex flex-col gap-2">
                        <li className="flex  justify-between items-center pb-5 p-1 max-w-xl border-b-2 border-gray-700">
                            <div className="flex gap-5">
                                <BanknoteArrowUp className="text-amarelo-alerta"/>
                                <span>FATURAMENTO</span>
                            </div>

                            <span className="text-lg font-bold">R$ 4.620,00</span>
                        </li>

                        <li className="flex  justify-between items-center pb-5 p-1 max-w-xl">
                            <div className="flex gap-5">
                                <BanknoteArrowDown className="text-red-700"/>
                                <span>CUSTOS</span>
                            </div>

                            <span className="text-red-700 text-lg font-bold">-R$ 1.774,40</span>
                        </li>
                    </ul>
                </CardContent>
                <CardFooter className="bg-[#182229] border-none rounded-none flex-col flex items-start gap-3">

                    <div className="flex gap-2 text-laranja-motor justify-center items-center font-bold">
                        <BadgeDollarSign />
                        <span>LUCRO REAL</span>
                    </div>

                    <span className="font-bold text-4xl">R$ 2.845,60</span>
                </CardFooter>
            </Card>
            
            <Card size="sm" className="mx-auto w-full max-w-lg bg-background-secundario text-white rounded-none flex justify-center ">
                <CardContent>
                    <ul className=" flex gap-2 justify-around items-center">
                        <li className="flex flex-col justify-between items-center gap-3 tracking-wider ">
                            <span className="font-bold text-gray-400 tracking-wider">KM RODADOS</span>
                            <span className="text-2xl">1.880</span>
                        </li>
                        
                        <li className="flex flex-col justify-between items-center gap-3 tracking-wider">
                            <span className="font-bold text-gray-400">PASSAGEIRO</span>
                            <span className="text-2xl">1.340</span>
                        </li>
                        
                        <li className="flex flex-col justify-between items-center text-laranja-motor gap-3">
                            <span className="font-bold">VAZIOS</span>
                            <span className="text-2xl">540</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <div className="flex justify-center gap-6">
                <Card size="sm" className="bg-background-secundario text-white rounded-none flex justify-around w-1/3">
                    <CardContent className="flex flex-col gap-3 tracking-wider">
                        <span className="font-bold text-gray-400">R$ / KM</span>
                        <span className="text-2xl">R$ 1,51</span>
                    </CardContent>
                </Card>

                <Card size="sm" className="bg-background-secundario text-white rounded-none flex justify-around w-1/3">
                    <CardContent className="flex flex-col gap-3 tracking-wider">
                        <span className="font-bold text-gray-400">R$ / HORA</span>
                        <span className="text-2xl">R$ 28,45</span>
                    </CardContent>
                </Card>
            </div>

            <Card size="sm" className="mx-auto w-full max-w-lg bg-background-secundario text-white rounded-none flex justify-center ">
                <CardContent>
                    <div>
                    <ChevronRight />
                    <span>PLATAFORMAS</span>
                    </div>

                    <Progress value={75} className=""/>

                </CardContent>

                <CardContent className="flex ">
                    <Card>
                        <CardHeader>
                            <CardDescription>
                                <div>
                                    <div></div>
                                    <span>99</span>
                                </div>

                                <span>25%</span>
                            
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>R$ 1.478</p>
                            <span>640 km</span>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader>
                            <CardDescription>
                                <div>
                                    <div></div>
                                    <span>UBER</span>
                                </div>

                                <span>75%</span>
                            
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>R$ 3.141</p>
                            <span>1.240 km</span>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}