import { Card, CardContent, CardFooter } from "@/ui/card";
import { Progress } from "@/ui/progress";
import { BanknoteArrowUp, BanknoteArrowDown, BadgeDollarSign, ChevronRight, Car, Fuel 
} from "lucide-react";

export default function Resumo() {
    return (
       <div className="flex flex-col mt-8 gap-5 w-full max-w-lg mx-auto">
            
            <Card className="bg-background-secundario text-white rounded-xl border border-gray-800/60 shadow-lg overflow-hidden transition-all hover:border-gray-700/80">
                <CardContent className="pt-7 px-6 pb-6">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between items-center pb-5 border-b border-gray-800/80">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 bg-amarelo-alerta/10 rounded-lg">
                                    <BanknoteArrowUp className="text-amarelo-alerta" size={20} strokeWidth={2.5} />
                                </div>
                                <span className="text-xs font-bold tracking-widest text-gray-300">FATURAMENTO</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight">R$ 4.620,00</span>
                        </div>

                        <div className="flex justify-between items-center pt-1">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 bg-red-500/10 rounded-lg">
                                    <BanknoteArrowDown className="text-red-500" size={20} strokeWidth={2.5} />
                                </div>
                                <span className="text-xs font-bold tracking-widest text-gray-300">CUSTOS</span>
                            </div>
                            <span className="text-red-500 text-xl font-bold tracking-tight">-R$ 1.774,40</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="bg-[#151e24] border-t border-gray-800/80 flex-col items-start gap-2 py-6 px-6">
                    <div className="flex gap-2.5 text-laranja-motor items-center font-bold text-xs tracking-widest">
                        <BadgeDollarSign size={18} strokeWidth={2.5} />
                        <span>LUCRO REAL</span>
                    </div>
                    <span className="font-extrabold text-4xl tracking-tighter text-white">R$ 2.845,60</span>
                </CardFooter>
            </Card>
            
            <Card className="bg-background-secundario text-white rounded-xl border border-gray-800/60 shadow-lg overflow-hidden transition-all hover:border-gray-700/80">
                <CardContent className="flex flex-col gap-6 p-6">
                    <div className="flex items-center gap-2.5 text-laranja-motor">
                        <Car size={18} strokeWidth={2.5} />
                        <span className="font-bold text-xs tracking-widest uppercase">Análise de Eficiência</span>
                    </div>

                    <div className="flex w-full rounded-lg border border-gray-700/50 bg-[#12191f] overflow-hidden">
                        <div className="flex flex-col flex-1 p-4 border-r border-gray-700/50 gap-1.5 justify-center">
                            <span className="font-semibold text-gray-400 text-[10px] tracking-widest uppercase">KM App (Viagem)</span>
                            <span className="text-2xl font-bold text-gray-100 tracking-tight">1.340</span>
                        </div>
                        <div className="flex flex-col flex-1 p-4 gap-1.5 justify-center pl-5">
                            <span className="font-semibold text-gray-400 text-[10px] tracking-widest uppercase">KM Odômetro</span>
                            <span className="text-2xl font-bold text-gray-100 tracking-tight">1.880</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-5 rounded-lg border border-laranja-motor/30 bg-laranja-motor/5 relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-laranja-motor"></div>
                        <div className="flex flex-col gap-1 pl-2">
                            <span className="font-bold text-laranja-motor text-sm tracking-widest">QUILOMETRAGEM MORTA</span>
                            <span className="text-gray-400 text-xs font-medium">Deslocamento vazio</span>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-laranja-motor text-3xl font-extrabold tracking-tighter">540 <span className="text-lg font-medium tracking-normal">km</span></span>
                            <span className="text-red-500 text-[10px] font-bold tracking-widest uppercase">(28% de ineficiência)</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-background-secundario text-white rounded-xl border border-gray-800/60 shadow-lg transition-all hover:border-gray-700/80">
                <CardContent className="flex flex-col gap-6 p-6">
                    <div className="flex justify-between items-center text-gray-400 font-bold text-xs tracking-widest">
                        <span className="uppercase">Custos Variáveis</span>
                        <Fuel className="text-laranja-motor" size={18} strokeWidth={2.5} />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center text-[15px] font-medium text-gray-300">
                            <span>Combustível</span>
                            <span className="text-laranja-motor font-bold tracking-wide">R$ 1.250</span>
                        </div>
                        
                        <div className="border-b border-gray-800/80 w-full"></div>
                        
                        <div className="flex justify-between items-center text-[15px] font-medium text-gray-300">
                            <span>Fundo 5k km</span>
                            <span className="text-laranja-motor font-bold tracking-wide">R$ 524</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4 w-full">
                <Card className="bg-background-secundario text-white rounded-xl border border-gray-800/60 shadow-lg transition-all hover:border-gray-700/80">
                    <CardContent className="flex flex-col gap-2 p-6 justify-center">
                        <span className="font-bold text-gray-400 text-[11px] tracking-widest uppercase">R$ / KM</span>
                        <span className="text-2xl font-bold text-gray-100 tracking-tight">R$ 1,51</span>
                    </CardContent>
                </Card>

                <Card className="bg-background-secundario text-white rounded-xl border border-gray-800/60 shadow-lg transition-all hover:border-gray-700/80">
                    <CardContent className="flex flex-col gap-2 p-6 justify-center">
                        <span className="font-bold text-gray-400 text-[11px] tracking-widest uppercase">R$ / HORA</span>
                        <span className="text-2xl font-bold text-gray-100 tracking-tight">R$ 28,45</span>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-background-secundario text-white rounded-xl border border-gray-800/60 shadow-lg transition-all hover:border-gray-700/80 mb-8">
                <CardContent className="flex flex-col gap-6 p-6">
                    <div className="flex items-center gap-2.5 text-laranja-motor">
                        <ChevronRight size={18} strokeWidth={3} />
                        <span className="font-bold text-xs tracking-widest uppercase">PLATAFORMAS</span>
                    </div>

                    <Progress value={68} className="h-2.5 bg-gray-800 rounded-full [&>div]:bg-gray-300 [&>div]:rounded-full" />

                    <div className="flex justify-between items-start pt-3">
                        <div className="flex flex-col gap-1.5 w-1/2">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 bg-gray-300 rounded-[3px]"></div>
                                <span className="font-extrabold text-[13px] tracking-widest">UBER</span>
                                <span className="text-gray-400 text-[11px] font-bold ml-1">68%</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white mt-1">R$ 3.141</span>
                            <span className="text-gray-400 text-[11px] font-semibold tracking-wider">1.240 km</span>
                        </div>

                        <div className="flex flex-col gap-1.5 w-1/2 pl-6 border-l border-gray-800">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 bg-laranja-motor rounded-[3px]"></div>
                                <span className="font-extrabold text-[13px] tracking-widest">99</span>
                                <span className="text-gray-400 text-[11px] font-bold ml-1">32%</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white mt-1">R$ 1.478</span>
                            <span className="text-gray-400 text-[11px] font-semibold tracking-wider">640 km</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}