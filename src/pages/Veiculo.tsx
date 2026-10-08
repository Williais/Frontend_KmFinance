import { useState } from "react";
import { Card, CardContent } from "@/ui/card";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Settings2, Save, Wrench, Fuel, ListChecks, History, AlertTriangle } from "lucide-react";

export default function Veiculo() {

    const [isConfiguring, setIsConfiguring] = useState(false);

    if (isConfiguring) {
        return (
            <div className="flex flex-col mt-8 gap-6 w-full max-w-lg mx-auto bg-[#0a0d14] p-4 min-h-screen font-mono text-gray-300">
                <Card className="bg-[#0f1319] border border-orange-600/50 rounded-none shadow-lg">
                    <CardContent className="flex flex-col p-6 gap-6">
                        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                            <div className="flex items-center gap-2 text-orange-500 font-bold text-sm tracking-widest">
                                <Settings2 size={18} />
                                <span>CONFIGURAÇÃO_VEÍCULO</span>
                            </div>
                            <Button 
                                variant="ghost" 
                                onClick={() => setIsConfiguring(false)}
                                className="text-gray-500 hover:text-white h-8 text-xs rounded-none"
                            >
                                [ CANCELAR ]
                            </Button>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Apelido (Opcional)</span>
                                <Input defaultValue="Moto Principal" className="bg-black border-gray-800 text-gray-200 rounded-none h-11 focus-visible:border-orange-500" />
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Modelo da Moto</span>
                                <Input defaultValue="HONDA CG 160 FAN" className="bg-black border-gray-800 text-gray-200 rounded-none h-11 focus-visible:border-orange-500" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-bold text-orange-500 tracking-widest uppercase">Hodômetro Atual (KM)</span>
                                <Input type="number" defaultValue="24500" className="bg-black border-orange-900/50 text-gray-200 rounded-none h-11 focus-visible:border-orange-500" />
                                <span className="text-[9px] text-gray-500">O app começará a calcular as manutenções a partir deste valor.</span>
                            </div>
                        </div>

                        <div className="border-t border-dashed border-gray-800 pt-4 mt-2">
                            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4 block">Intervalos de Troca (KM)</span>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">Óleo do Motor</span>
                                    <Input type="number" defaultValue="1500" className="bg-black border-gray-800 text-gray-200 rounded-none h-10" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">Kit Relação (Tração)</span>
                                    <Input type="number" defaultValue="15000" className="bg-black border-gray-800 text-gray-200 rounded-none h-10" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">Pastilhas de Freio</span>
                                    <Input type="number" defaultValue="10000" className="bg-black border-gray-800 text-gray-200 rounded-none h-10" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">Fluido de Freio</span>
                                    <Input type="number" defaultValue="20000" className="bg-black border-gray-800 text-gray-200 rounded-none h-10" />
                                </div>
                            </div>
                        </div>

                        <Button 
                            onClick={() => setIsConfiguring(false)}
                            className="w-full bg-[#ff7a00] hover:bg-[#e66e00] text-black rounded-none h-12 text-xs font-bold tracking-widest mt-4 flex gap-2"
                        >
                            <Save size={16} />
                            [ SALVAR CONFIGURAÇÕES ]
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex flex-col mt-8 gap-6 w-full max-w-lg mx-auto bg-[#0a0d14] p-4 min-h-screen font-mono text-gray-300">
            
            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-6 gap-2 relative">
                    <Button 
                        variant="ghost" 
                        onClick={() => setIsConfiguring(true)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white bg-black/50 border border-gray-800 h-8 px-3 rounded-none text-[10px] tracking-widest"
                    >
                        <Settings2 size={12} className="mr-2" />
                        EDITAR
                    </Button>

                    <div className="flex justify-between items-end mt-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">VEÍCULO ATIVO</span>
                            <span className="text-lg font-bold text-gray-200 uppercase tracking-wide">HONDA CG 160</span>
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">HODÔMETRO</span>
                            <span className="text-lg font-bold text-white">24.500 <span className="text-xs font-normal text-gray-400">km</span></span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                    <CardContent className="flex flex-col p-5 gap-4">
                        <div className="flex items-center gap-2 text-gray-400 font-bold text-xs tracking-widest">
                            <Fuel size={14} className="text-orange-500" />
                            <span>COMBUSTÍVEL</span>
                        </div>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Preço</span>
                                <span className="text-gray-200 font-bold">R$ 5,80/L</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Média</span>
                                <span className="text-gray-200 font-bold">35,0 km/L</span>
                            </div>
                            <div className="flex justify-between border-t border-gray-800/80 pt-2 mt-1">
                                <span className="text-gray-500">Custo/km</span>
                                <span className="text-orange-500 font-bold">R$ 0,16</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                    <CardContent className="flex flex-col p-5 gap-4">
                        <div className="flex items-center gap-2 text-gray-400 font-bold text-xs tracking-widest">
                            <Wrench size={14} className="text-orange-500" />
                            <span>MANUTENÇÃO</span>
                        </div>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between flex-col gap-1">
                                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Próx. Revisão</span>
                                <span className="text-gray-200 font-bold text-lg">25.000</span>
                            </div>
                            <div className="flex justify-between border-t border-gray-800/80 pt-2 mt-2">
                                <span className="text-gray-500">Faltam</span>
                                <span className="text-orange-500 font-bold">500 km</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-6 gap-5">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-xs tracking-widest">
                        <ListChecks size={16} className="text-orange-500" />
                        <span>CHECKLIST DA MOTO</span>
                    </div>

                    <div className="flex flex-col gap-1 border-b border-dashed border-gray-800 pb-3">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-300">Kit Relação (Tração)</span>
                            <div className="flex items-center gap-1 border border-orange-900 bg-orange-950/30 px-2 py-0.5">
                                <AlertTriangle size={10} className="text-orange-500" />
                                <span className="text-[10px] font-bold text-orange-500 tracking-wider">15% RESTANTE</span>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 h-1 mt-1">
                            <div className="bg-orange-500 h-1 w-[85%]"></div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-b border-dashed border-gray-800 pb-3">
                        <span className="text-sm text-gray-300">Óleo do Motor</span>
                        <span className="text-[10px] font-bold text-emerald-500 tracking-widest border border-emerald-900 bg-emerald-950/30 px-2 py-0.5">
                            [ OK ]
                        </span>
                    </div>

                    <div className="flex justify-between items-center border-b border-dashed border-gray-800 pb-3">
                        <span className="text-sm text-gray-300">Pastilhas de Freio</span>
                        <span className="text-[10px] font-bold text-emerald-500 tracking-widest border border-emerald-900 bg-emerald-950/30 px-2 py-0.5">
                            [ OK ]
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">Pneus</span>
                        <span className="text-[10px] font-bold text-emerald-500 tracking-widest border border-emerald-900 bg-emerald-950/30 px-2 py-0.5">
                            [ OK ]
                        </span>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg mb-8">
                <CardContent className="flex flex-col p-6 gap-5">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-xs tracking-widest">
                        <History size={14} />
                        <span>LOG_HISTÓRICO</span>
                    </div>

                    <div className="flex justify-between items-center text-sm bg-black/40 p-3 border-l-2 border-l-gray-600">
                        <div className="flex gap-4">
                            <span className="text-gray-500 text-xs">05/10/26</span>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-200">Troca de óleo</span>
                                <span className="text-[10px] text-gray-500">23.000 km</span>
                            </div>
                        </div>
                        <span className="font-bold text-white">R$ 45</span>
                    </div>

                    <div className="flex justify-between items-center text-sm bg-black/40 p-3 border-l-2 border-l-gray-600">
                        <div className="flex gap-4">
                            <span className="text-gray-500 text-xs">12/09/26</span>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-200">Esticou Corrente</span>
                                <span className="text-[10px] text-gray-500">21.500 km</span>
                            </div>
                        </div>
                        <span className="font-bold text-gray-400">-</span>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}