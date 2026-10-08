import { useState } from "react";
import { Card, CardContent } from "@/ui/card";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Plus, Minus, Wallet, ChevronDown, ListOrdered } from "lucide-react";

export default function Financeiro() {
    const [tipoRegistro, setTipoRegistro] = useState<"DESPESA" | "RECEITA">("DESPESA");
    
    return (
        <div className="flex flex-col mt-8 gap-6 w-full max-w-lg mx-auto bg-[#0a0d14] p-4 min-h-screen font-mono text-gray-300">
            
            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-5 gap-4">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">
                        <Wallet size={16} className="text-orange-500" />
                        <span>CAIXA ATUAL</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 divide-x divide-gray-800">
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">ENTRADAS</span>
                            <span className="text-emerald-500 font-bold tracking-tight">R$ 145,00</span>
                        </div>
                        <div className="flex flex-col gap-1 pl-4">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">SAÍDAS</span>
                            <span className="text-red-500 font-bold tracking-tight">R$ 32,50</span>
                        </div>
                        <div className="flex flex-col gap-1 pl-4">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">SALDO</span>
                            <span className="text-white font-bold tracking-tight">R$ 112,50</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#0f1319] border border-orange-600/50 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-6 gap-6">
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-sm tracking-widest">
                        <span>&gt;_</span>
                        <span>NOVO LANÇAMENTO</span>
                    </div>

                    <div className="flex gap-3">
                        <Button 
                            onClick={() => setTipoRegistro("DESPESA")}
                            className={`flex-1 border rounded-none h-11 text-xs tracking-widest transition-colors flex items-center justify-center gap-2 ${
                                tipoRegistro === "DESPESA" 
                                    ? "bg-red-950/40 text-red-500 border-red-900/50 font-bold" 
                                    : "bg-black hover:bg-gray-900 text-gray-600 border-gray-800"
                            }`}
                        >
                            <Minus size={14} />
                            DESPESA
                        </Button>
                        <Button 
                            onClick={() => setTipoRegistro("RECEITA")}
                            className={`flex-1 border rounded-none h-11 text-xs tracking-widest transition-colors flex items-center justify-center gap-2 ${
                                tipoRegistro === "RECEITA" 
                                    ? "bg-emerald-950/40 text-emerald-500 border-emerald-900/50 font-bold" 
                                    : "bg-black hover:bg-gray-900 text-gray-600 border-gray-800"
                            }`}
                        >
                            <Plus size={14} />
                            RECEITA
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">VALOR (R$)</span>
                            <Input 
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                className={`bg-black border-gray-800 font-mono text-lg rounded-none focus-visible:ring-0 h-12 ${
                                    tipoRegistro === "DESPESA" ? "text-red-500 focus-visible:border-red-500" : "text-emerald-500 focus-visible:border-emerald-500"
                                }`}
                            />
                        </div>
                        <div className="flex flex-col gap-2 relative">
                            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">CATEGORIA</span>
                            <div className="relative h-12">
                                <select 
                                    className="w-full h-full bg-black border border-gray-800 text-gray-300 font-mono text-xs rounded-none px-3 appearance-none focus:outline-none focus:border-orange-500 cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Selecione...</option>
                                    {tipoRegistro === "DESPESA" ? (
                                        <>
                                            <option value="combustivel">Combustível</option>
                                            <option value="alimentacao">Alimentação / Lanche</option>
                                            <option value="manutencao_peca">Manutenção - Peças</option>
                                            <option value="manutencao_servico">Manutenção - Mão de Obra</option>
                                            <option value="lavagem">Lavagem</option>
                                            <option value="outros">Outros</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="corrida_particular">Corrida Particular (Fora do App)</option>
                                            <option value="gorjeta">Gorjeta</option>
                                            <option value="outros">Outros</option>
                                        </>
                                    )}
                                </select>
                                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">DETALHES / DESCRIÇÃO</span>
                        <Input 
                            type="text"
                            placeholder={tipoRegistro === "DESPESA" ? "Ex: Troca de óleo, Lanche no posto..." : "Ex: Viagem para o aeroporto..."}
                            className="bg-black border-gray-800 text-gray-300 font-mono rounded-none focus-visible:ring-0 focus-visible:border-orange-500 h-12"
                        />
                    </div>

                    <Button className="w-full bg-[#ff7a00] hover:bg-[#e66e00] text-black rounded-none h-14 text-sm font-bold tracking-widest flex items-center justify-center mt-2">
                        [ GRAVAR LANÇAMENTO ]
                    </Button>
                </CardContent>
            </Card>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg mb-8">
                <CardContent className="flex flex-col p-6 gap-5">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                        <ListOrdered size={16} className="text-orange-500" />
                        <span>ÚLTIMOS REGISTROS</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center bg-[#141a22] p-3 border-l-2 border-l-red-500">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-200">Alimentação / Lanche</span>
                                <span className="text-[10px] text-gray-500 mt-0.5">Coxinha e refri</span>
                            </div>
                            <span className="text-sm font-bold text-red-500">- R$ 12,50</span>
                        </div>

                        <div className="flex justify-between items-center bg-[#141a22] p-3 border-l-2 border-l-emerald-500">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-200">Corrida Particular</span>
                                <span className="text-[10px] text-gray-500 mt-0.5">Ida ao centro</span>
                            </div>
                            <span className="text-sm font-bold text-emerald-500">+ R$ 45,00</span>
                        </div>

                        <div className="flex justify-between items-center bg-[#141a22] p-3 border-l-2 border-l-red-500">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-200">Manutenção - Peças</span>
                                <span className="text-[10px] text-gray-500 mt-0.5">Óleo Motul</span>
                            </div>
                            <span className="text-sm font-bold text-red-500">- R$ 65,00</span>
                        </div>
                    </div>
                    
                    <Button variant="ghost" className="text-xs text-gray-500 hover:text-white hover:bg-transparent rounded-none tracking-widest mt-2">
                        VER HISTÓRICO COMPLETO &gt;
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}