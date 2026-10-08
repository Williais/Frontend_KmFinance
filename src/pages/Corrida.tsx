import { useState } from "react";
import { Card, CardContent } from "@/ui/card";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { CloudUpload, Check, AlertTriangle, Play } from "lucide-react";

export default function Corrida() {
    const [plataforma, setPlataforma] = useState("UBER");

    const data = new Date();
    const convertidaData = data.toLocaleDateString('pt-BR');
    const hrs = data.getHours().toString().padStart(2, '0');
    const min = data.getMinutes().toString().padStart(2, '0');

    return (
        <div className="flex flex-col mt-8 gap-6 w-full max-w-lg mx-auto bg-[#0a0d14] p-4 min-h-screen font-mono text-gray-300">
            
            <Card className="bg-[#0f1319] border border-orange-600/50 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-6 gap-6">
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-sm tracking-widest">
                        <span>&gt;_</span>
                        <span>CONTROLE TURNO</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">DATA</span>
                            <span className="text-lg text-gray-200">{convertidaData}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">INÍCIO</span>
                            <span className="text-lg text-gray-200">{hrs}:{min}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">HODÔMETRO INICIAL</span>
                        <Input 
                            type="number"
                            placeholder="Ex: 148230"
                            className="bg-black border-gray-800 text-gray-200 font-mono text-lg rounded-none focus-visible:ring-0 focus-visible:border-orange-500 h-12"
                        />
                    </div>

                    <Button className="w-full bg-[#ff7a00] hover:bg-[#e66e00] text-black rounded-none h-14 text-sm font-bold tracking-widest flex items-center justify-center gap-2 transition-colors">
                        <Play fill="currentColor" size={14} className="mt-0.5" />
                        INICIAR TURNO
                    </Button>
                </CardContent>
            </Card>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-6 gap-6">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest">
                        <span className="text-orange-500">&gt;</span>
                        <span>INGESTÃO DE DADOS</span>
                    </div>

                    <label className="border-2 border-dashed border-gray-800/80 bg-[#0a0d14] p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-black/40 transition-colors">
                        <input type="file" className="hidden" accept=".pdf" />
                        <CloudUpload size={32} className="text-gray-400" />
                        <span className="text-sm font-bold text-gray-200">ARRASTE O RELATÓRIO PDF</span>
                        <span className="text-[11px] text-gray-500">Uber / 99</span>
                    </label>

                    <div className="bg-[#141a22] border border-gray-800/50 p-4 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-emerald-500">
                                <Check size={14} strokeWidth={3} />
                                <span className="text-[11px] font-bold tracking-widest">ARQUIVO PROCESSADO</span>
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest">UBER</span>
                        </div>

                        <div className="flex flex-col gap-1.5 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Corridas:</span>
                                <span className="text-gray-200 font-bold">187</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Distância:</span>
                                <span className="text-gray-200 font-bold">1.240 km</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Ganhos:</span>
                                <span className="text-gray-200 font-bold">R$ 3.141,20</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 border border-orange-600/30 bg-orange-950/20 p-2.5 text-orange-500">
                            <AlertTriangle size={14} />
                            <span className="text-[11px] font-medium tracking-wide">3 registros precisam de revisão</span>
                        </div>

                        <div className="flex gap-3 mt-1">
                            <Button className="flex-1 bg-[#1c2431] hover:bg-[#252f40] text-gray-300 rounded-none h-10 text-[11px] font-bold tracking-widest uppercase">
                                VER PROBLEMAS
                            </Button>
                            <Button className="flex-1 bg-white hover:bg-gray-200 text-black rounded-none h-10 text-[11px] font-bold tracking-widest uppercase">
                                CONFIRMAR
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg mb-8">
                <CardContent className="flex flex-col p-6 gap-6">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest">
                        <span className="text-orange-500">&gt;</span>
                        <span>ENTRADA MANUAL</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Button 
                            onClick={() => setPlataforma("UBER")}
                            className={`border rounded-none h-10 text-xs tracking-widest transition-colors ${
                                plataforma === "UBER" 
                                    ? "bg-[#1a2333] hover:bg-[#1a2333]/90 text-white border-[#2a364d]" 
                                    : "bg-black hover:bg-gray-900 text-gray-600 border-gray-800"
                            }`}
                        >
                            [{plataforma === "UBER" ? " X " : " \u00A0 "}] UBER
                        </Button>
                        <Button 
                            onClick={() => setPlataforma("99")}
                            className={`border rounded-none h-10 text-xs tracking-widest transition-colors ${
                                plataforma === "99" 
                                    ? "bg-[#1a2333] hover:bg-[#1a2333]/90 text-white border-[#2a364d]" 
                                    : "bg-black hover:bg-gray-900 text-gray-600 border-gray-800"
                            }`}
                        >
                            [{plataforma === "99" ? " X " : " \u00A0 "}] 99
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">VALOR (R$)</span>
                            <Input 
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                className="bg-[#0a0d14] border-gray-800 text-gray-300 font-mono rounded-none focus-visible:ring-0 focus-visible:border-gray-600 h-11"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">KM</span>
                            <Input 
                                type="number"
                                step="0.1"
                                placeholder="0.0"
                                className="bg-[#0a0d14] border-gray-800 text-gray-300 font-mono rounded-none focus-visible:ring-0 focus-visible:border-gray-600 h-11"
                            />
                        </div>
                    </div>

                    <Button className="w-full bg-[#161d26] hover:bg-[#1c2431] text-gray-300 border border-gray-800 rounded-none h-12 text-xs font-bold tracking-widest mt-2">
                        [ SALVAR REGISTRO ]
                    </Button>
                </CardContent>
            </Card>

        </div>
    )
}