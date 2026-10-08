import { Card, CardContent, CardFooter } from "@/ui/card";
import { Progress } from "@/ui/progress";
import { 
    BanknoteArrowUp, 
    BanknoteArrowDown, 
    BadgeDollarSign, 
    ChevronRight, 
    Car, 
    Fuel,
    Navigation,
    Clock
} from "lucide-react";

export default function Resumo() {
    return (
        <div className="flex flex-col mt-8 gap-6 w-full max-w-lg mx-auto bg-[#0a0d14] p-4 min-h-screen font-mono text-gray-300">
            
            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="pt-6 px-6 pb-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center pb-5 border-b border-gray-800">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 bg-emerald-950/30 border border-emerald-900/50 text-emerald-500">
                                    <BanknoteArrowUp size={20} strokeWidth={2} />
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">FATURAMENTO</span>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">R$ 4.620,00</span>
                        </div>

                        <div className="flex justify-between items-center pt-1">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 bg-red-950/30 border border-red-900/50 text-red-500">
                                    <BanknoteArrowDown size={20} strokeWidth={2} />
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">CUSTOS</span>
                            </div>
                            <span className="text-red-500 text-xl font-bold tracking-tight">-R$ 1.774,40</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="bg-[#141a22] border-t border-gray-800 flex-col items-start gap-2 py-6 px-6">
                    <div className="flex gap-2.5 text-orange-500 items-center font-bold text-sm tracking-widest uppercase">
                        <BadgeDollarSign size={18} strokeWidth={2.5} />
                        <span>LUCRO REAL</span>
                    </div>
                    <span className="font-extrabold text-4xl tracking-tighter text-white">R$ 2.845,60</span>
                </CardFooter>
            </Card>
            
            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col gap-6 p-6">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                        <Car size={16} className="text-orange-500" />
                        <span>Análise de Eficiência</span>
                    </div>

                    <div className="flex w-full border border-gray-800 bg-[#0a0d14]">
                        <div className="flex flex-col flex-1 p-4 border-r border-gray-800 gap-1.5 justify-center">
                            <span className="font-bold text-gray-500 text-[10px] tracking-widest uppercase">KM App (Viagem)</span>
                            <span className="text-xl font-bold text-gray-200 tracking-tight">1.340</span>
                        </div>
                        <div className="flex flex-col flex-1 p-4 gap-1.5 justify-center pl-5">
                            <span className="font-bold text-gray-500 text-[10px] tracking-widest uppercase">KM Odômetro</span>
                            <span className="text-xl font-bold text-gray-200 tracking-tight">1.880</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-5 border border-orange-600/30 bg-orange-950/20 relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                        <div className="flex flex-col gap-1 pl-2">
                            <span className="font-bold text-orange-500 text-sm tracking-widest">QUILOMETRAGEM MORTA</span>
                            <span className="text-gray-400 text-xs">Deslocamento vazio</span>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-orange-500 text-3xl font-bold tracking-tighter">540 <span className="text-lg font-medium tracking-normal">km</span></span>
                            <span className="text-red-500 text-[10px] font-bold tracking-widest uppercase">(28% de ineficiência)</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col gap-6 p-6">
                    <div className="flex justify-between items-center text-gray-400 font-bold text-sm tracking-widest">
                        <span className="uppercase">Custos Variáveis</span>
                        <Fuel className="text-orange-500" size={16} strokeWidth={2.5} />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center text-sm font-medium text-gray-300">
                            <span>Combustível</span>
                            <span className="text-orange-500 font-bold tracking-wide">R$ 1.250</span>
                        </div>
                        
                        <div className="border-b border-gray-800 w-full"></div>
                        
                        <div className="flex justify-between items-center text-sm font-medium text-gray-300">
                            <span>Fundo 5k km</span>
                            <span className="text-orange-500 font-bold tracking-wide">R$ 524</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4 w-full">
                <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                    <CardContent className="flex flex-col gap-2 p-6 justify-center">
                        <span className="font-bold text-gray-500 text-[10px] tracking-widest uppercase">R$ / KM</span>
                        <span className="text-2xl font-bold text-white tracking-tight">R$ 1,51</span>
                    </CardContent>
                </Card>

                <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                    <CardContent className="flex flex-col gap-2 p-6 justify-center">
                        <span className="font-bold text-gray-500 text-[10px] tracking-widest uppercase">R$ / HORA</span>
                        <span className="text-2xl font-bold text-white tracking-tight">R$ 28,45</span>
                    </CardContent>
                </Card>

                <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                    <CardContent className="flex flex-col gap-2 p-6 justify-center">
                        <div className="flex items-center gap-2 mb-1 text-gray-400">
                            <Navigation size={14} className="text-orange-500" strokeWidth={2} />
                            <span className="font-bold text-[10px] tracking-widest uppercase">KM TOTAL</span>
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">1.880 km</span>
                    </CardContent>
                </Card>

                <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                    <CardContent className="flex flex-col gap-2 p-6 justify-center">
                        <div className="flex items-center gap-2 mb-1 text-gray-400">
                            <Clock size={14} className="text-orange-500" strokeWidth={2} />
                            <span className="font-bold text-[10px] tracking-widest uppercase">TRABALHO</span>
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">102h14</span>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg mb-8">
                <CardContent className="flex flex-col gap-6 p-6">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                        <ChevronRight size={16} className="text-orange-500" strokeWidth={3} />
                        <span>PLATAFORMAS</span>
                    </div>

                    <Progress value={68} className="h-2 bg-gray-800 rounded-none [&>div]:bg-white" />

                    <div className="flex justify-between items-start pt-3">
                        <div className="flex flex-col gap-1.5 w-1/2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-white"></div>
                                <span className="font-bold text-xs tracking-widest text-white">UBER</span>
                                <span className="text-gray-500 text-[10px] font-bold ml-1">68%</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white mt-1">R$ 3.141</span>
                            <span className="text-gray-400 text-xs font-semibold tracking-wider">1.240 km</span>
                        </div>

                        <div className="flex flex-col gap-1.5 w-1/2 pl-6 border-l border-gray-800">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500"></div>
                                <span className="font-bold text-xs tracking-widest text-white">99</span>
                                <span className="text-gray-500 text-[10px] font-bold ml-1">32%</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white mt-1">R$ 1.478</span>
                            <span className="text-gray-400 text-xs font-semibold tracking-wider">640 km</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}