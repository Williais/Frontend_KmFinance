import { useState } from "react";
import { Card, CardContent } from "@/ui/card";
import { 
    Calendar, 
    Car, 
    Filter, 
    TrendingUp, 
    AlertTriangle, 
    Wrench, 
    Wallet,
    Clock,
    Navigation,
    Gauge,
    Activity,
    PieChart as PieChartIcon,
    BarChart3,
    Zap,
    CheckCircle2
} from "lucide-react";
import { 
    AreaChart, 
    Area, 
    BarChart, 
    Bar, 
    PieChart, 
    Pie, 
    Cell, 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    ComposedChart
} from "recharts";

const dadosMes = [
    { dia: "Sem 1", faturamento: 1100, custos: 450, lucro: 650 },
    { dia: "Sem 2", faturamento: 1250, custos: 480, lucro: 770 },
    { dia: "Sem 3", faturamento: 1050, custos: 400, lucro: 650 },
    { dia: "Sem 4", faturamento: 1220, custos: 444, lucro: 775.6 },
];

const dadosPlataforma = [
    { name: "UBER", faturamento: 2840, corridas: 168, rkm: 2.53 },
    { name: "99", faturamento: 1780, corridas: 112, rkm: 2.31 },
];

const dadosCustos = [
    { name: "Combustível", value: 1050, color: "#ff7a00" },
    { name: "Manutenção", value: 300, color: "#ef4444" },
    { name: "Seguro", value: 200, color: "#3b82f6" },
    { name: "Lavagem", value: 80, color: "#10b981" },
    { name: "Outros", value: 144.4, color: "#6b7280" },
];

const dadosEficienciaSemanas = [
    { semana: "S1", rh: 26.5, rkm: 1.45 },
    { semana: "S2", rh: 28.2, rkm: 1.55 },
    { semana: "S3", rh: 27.1, rkm: 1.48 },
    { semana: "S4", rh: 29.6, rkm: 1.56 },
];

const dadosSemestre = [
    { mes: "MAI", faturamento: 3800, lucro: 2100 },
    { mes: "JUN", faturamento: 4100, lucro: 2400 },
    { mes: "JUL", faturamento: 3950, lucro: 2250 },
    { mes: "AGO", faturamento: 4300, lucro: 2600 },
    { mes: "SET", faturamento: 4260, lucro: 2580 },
    { mes: "OUT", faturamento: 4620, lucro: 2845 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#0a0d14] border border-gray-800 p-3 shadow-xl rounded-none">
                <p className="text-gray-400 font-bold text-[10px] tracking-widest mb-2 uppercase">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
                        <div className="w-2 h-2" style={{ backgroundColor: entry.color }} />
                        <span className="text-gray-200 text-xs font-bold">
                            {entry.name.toUpperCase()}: {typeof entry.value === 'number' && entry.name !== 'corridas' ? `R$ ${entry.value.toFixed(2)}` : entry.value}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export default function AnalyticsMensal() {
    return (
        <div className="flex flex-col mt-4 gap-6 w-full max-w-lg mx-auto bg-[#0a0d14] p-4 min-h-screen font-mono text-gray-300">
            
            <div className="flex flex-col gap-4 mb-2">
                
                <div className="grid grid-cols-3 gap-2">
                    <div className="flex items-center gap-2 bg-[#0f1319] border border-gray-800 p-2 cursor-pointer hover:bg-gray-900">
                        <Calendar size={14} className="text-gray-400" />
                        <span className="text-[9px] font-bold tracking-widest truncate">OUT 2026</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#0f1319] border border-gray-800 p-2 cursor-pointer hover:bg-gray-900">
                        <Filter size={14} className="text-gray-400" />
                        <span className="text-[9px] font-bold tracking-widest truncate">TODAS</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#0f1319] border border-gray-800 p-2 cursor-pointer hover:bg-gray-900">
                        <Car size={14} className="text-gray-400" />
                        <span className="text-[9px] font-bold tracking-widest truncate">MOTO 160</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <Card className="bg-[#0f1319] border border-emerald-900/30 rounded-none shadow-lg relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                    <CardContent className="flex flex-col p-5 gap-1">
                        <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">LUCRO REAL</span>
                        <span className="text-4xl font-extrabold text-emerald-500 tracking-tighter">R$ 2.845,60</span>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-3">
                    <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                        <CardContent className="flex flex-col p-4 gap-1">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">FATURAMENTO</span>
                            <span className="text-lg font-bold text-white">R$ 4.620,00</span>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                        <CardContent className="flex flex-col p-4 gap-1">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">CUSTOS</span>
                            <span className="text-lg font-bold text-red-500">R$ 1.774,40</span>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                        <CardContent className="flex flex-col p-4 gap-1">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">HORAS TRABALHADAS</span>
                            <div className="flex items-center gap-2">
                                <Clock size={14} className="text-orange-500" />
                                <span className="text-lg font-bold text-white">102h14</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                        <CardContent className="flex flex-col p-4 gap-1">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">KM TOTAL</span>
                            <div className="flex items-center gap-2">
                                <Navigation size={14} className="text-orange-500" />
                                <span className="text-lg font-bold text-white">1.880 km</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                        <CardContent className="flex flex-col p-4 gap-1">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">R$ / HORA</span>
                            <span className="text-lg font-bold text-emerald-500">R$ 27,85</span>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                        <CardContent className="flex flex-col p-4 gap-1">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">R$ / KM</span>
                            <span className="text-lg font-bold text-emerald-500">R$ 1,51</span>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-6 gap-6">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                        <Activity size={16} className="text-orange-500" />
                        <span>FATURAMENTO × CUSTOS × LUCRO</span>
                    </div>
                    <div className="h-55 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={dadosMes} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorFaturamento" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                                <XAxis dataKey="dia" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                                <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" tickFormatter={(v) => `R$${v}`} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="faturamento" stroke="#ffffff" fillOpacity={1} fill="url(#colorFaturamento)" strokeWidth={2} />
                                <Area type="monotone" dataKey="custos" stroke="#ef4444" fill="none" strokeWidth={2} />
                                <Area type="monotone" dataKey="lucro" stroke="#10b981" fillOpacity={1} fill="url(#colorLucro)" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-white"></div><span className="text-[9px] text-gray-400">FATURAMENTO</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-red-500"></div><span className="text-[9px] text-gray-400">CUSTOS</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-emerald-500"></div><span className="text-[9px] text-gray-400">LUCRO</span></div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col gap-6">
                <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                    <CardContent className="flex flex-col p-6 gap-6">
                        <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                            <BarChart3 size={16} className="text-orange-500" />
                            <span>UBER × 99</span>
                        </div>
                        <div className="h-55 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={dadosPlataforma} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" horizontal={false} />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} width={40} fontFamily="monospace" />
                                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                                    <Bar dataKey="faturamento" radius={[0, 2, 2, 0]} barSize={24}>
                                        {dadosPlataforma.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.name === 'UBER' ? '#ffffff' : '#ff7a00'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-bold text-white">UBER</span>
                                <div className="flex justify-between text-[10px] text-gray-400"><span className="uppercase">Corridas</span><span className="text-white">168</span></div>
                                <div className="flex justify-between text-[10px] text-gray-400"><span className="uppercase">R$/KM</span><span className="text-white">R$ 2,53</span></div>
                            </div>
                            <div className="flex flex-col gap-2 border-l border-gray-800 pl-4">
                                <span className="text-xs font-bold text-orange-500">99</span>
                                <div className="flex justify-between text-[10px] text-gray-400"><span className="uppercase">Corridas</span><span className="text-white">112</span></div>
                                <div className="flex justify-between text-[10px] text-gray-400"><span className="uppercase">R$/KM</span><span className="text-white">R$ 2,31</span></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                    <CardContent className="flex flex-col p-6 gap-6">
                        <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                            <PieChartIcon size={16} className="text-orange-500" />
                            <span>DISTRIBUIÇÃO DOS CUSTOS</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="h-35 w-35">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={dadosCustos} innerRadius={45} outerRadius={65} paddingAngle={2} dataKey="value" stroke="none">
                                            {dadosCustos.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip content={<CustomTooltip />} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex flex-col gap-2 flex-1 pl-4">
                                {dadosCustos.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2" style={{ backgroundColor: item.color }}></div>
                                            <span className="text-[9px] text-gray-400 uppercase">{item.name}</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-white">R$ {item.value.toFixed(0)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-6 gap-6">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                        <Gauge size={16} className="text-orange-500" />
                        <span>ANÁLISE DE EFICIÊNCIA</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">KM PRODUTIVO × KM VAZIO</span>
                        <div className="flex h-4 w-full bg-red-500/20">
                            <div className="h-full bg-emerald-500" style={{ width: '71.3%' }}></div>
                            <div className="h-full bg-red-500" style={{ width: '28.7%' }}></div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="text-emerald-500 text-xs font-bold">1.340 km</span>
                                <span className="text-gray-500 text-[9px] uppercase">Com passageiro</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-red-500 text-xs font-bold">540 km (28,7%)</span>
                                <span className="text-gray-500 text-[9px] uppercase">Vazio</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 my-2"></div>

                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">EVOLUÇÃO R$/HORA E R$/KM</span>
                        <div className="h-37.5 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={dadosEficienciaSemanas} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                                    <XAxis dataKey="semana" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                                    <YAxis yAxisId="left" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                                    <YAxis yAxisId="right" orientation="right" hide />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line yAxisId="left" type="monotone" dataKey="rh" name="R$/Hora" stroke="#10b981" strokeWidth={2} dot={{ r: 3, fill: "#10b981", strokeWidth: 0 }} />
                                    <Line yAxisId="right" type="monotone" dataKey="rkm" name="R$/KM" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, fill: "#3b82f6", strokeWidth: 0 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex gap-4 justify-center">
                            <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-emerald-500"></div><span className="text-[9px] text-gray-400">R$/HORA</span></div>
                            <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-blue-500"></div><span className="text-[9px] text-gray-400">R$/KM</span></div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-6 gap-5">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                        <Car size={16} className="text-orange-500" />
                        <span>VEÍCULO</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1 border-l-2 border-orange-500 pl-3">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">CONSUMO MÉDIO</span>
                            <span className="text-lg font-bold text-white">10,8 <span className="text-xs text-gray-500 font-normal">km/L</span></span>
                        </div>
                        <div className="flex flex-col gap-1 border-l-2 border-orange-500 pl-3">
                            <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">CUSTO COMB./KM</span>
                            <span className="text-lg font-bold text-white">R$ 0,72</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 border-l-2 border-red-500 pl-3">
                        <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">GASTOS MANUTENÇÃO (MÊS)</span>
                        <span className="text-lg font-bold text-red-500">R$ 300,00</span>
                    </div>

                    <div className="flex flex-col gap-2 mt-2 bg-black/30 p-4 border border-gray-800/50">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">PRÓXIMA REVISÃO</span>
                                <span className="text-sm font-bold text-white">Faltam 770 km</span>
                            </div>
                            <span className="text-xs font-mono text-gray-500">4.230 / 5.000 km</span>
                        </div>
                        <div className="h-2 w-full bg-gray-900 mt-1">
                            <div className="h-full bg-orange-500" style={{ width: '84.6%' }}></div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg">
                <CardContent className="flex flex-col p-6 gap-6">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase">
                        <BarChart3 size={16} className="text-orange-500" />
                        <span>COMPARAÇÃO COM MESES ANTERIORES</span>
                    </div>

                    <div className="h-55 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={dadosSemestre} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                                <XAxis dataKey="mes" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                                <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" tickFormatter={(v) => `R$${v}`} />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1f2937', opacity: 0.4 }} />
                                <Bar dataKey="faturamento" fill="#3b82f6" radius={[2, 2, 0, 0]} maxBarSize={30} />
                                <Line type="monotone" dataKey="lucro" stroke="#10b981" strokeWidth={2} dot={{ r: 4, fill: "#10b981", strokeWidth: 0 }} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-blue-500"></div><span className="text-[9px] text-gray-400">FATURAMENTO</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div><span className="text-[9px] text-gray-400">LUCRO</span></div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#0f1319] border border-gray-800 rounded-none shadow-lg mb-8">
                <CardContent className="flex flex-col p-6 gap-4">
                    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">
                        <Zap size={16} className="text-orange-500" />
                        <span>INSIGHTS DO MÊS</span>
                    </div>

                    <div className="bg-[#121820] border-l-4 border-l-emerald-500 p-4 flex gap-3 items-start">
                        <TrendingUp size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-gray-300 leading-relaxed">
                            <strong className="text-white">Seu faturamento aumentou 8,4%</strong> em relação ao mês anterior. O lucro real acompanhou com alta de 8,9%.
                        </span>
                    </div>

                    <div className="bg-[#121820] border-l-4 border-l-red-500 p-4 flex gap-3 items-start">
                        <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-gray-300 leading-relaxed">
                            <strong className="text-white">28,7% da sua quilometragem foi percorrida sem passageiro.</strong> Reduzir este número aumentará diretamente seu R$/KM.
                        </span>
                    </div>

                    <div className="bg-[#121820] border-l-4 border-l-blue-500 p-4 flex gap-3 items-start">
                        <Wallet size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-gray-300 leading-relaxed">
                            <strong className="text-white">A Uber apresentou R$ 2,53/km</strong> contra R$ 2,31/km da 99 neste mês.
                        </span>
                    </div>

                    <div className="bg-[#121820] border-l-4 border-l-orange-500 p-4 flex gap-3 items-start">
                        <Wrench size={18} className="text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-gray-300 leading-relaxed">
                            <strong className="text-white">Faltam 770 km para a próxima revisão.</strong> Programe-se para não perder o intervalo de troca.
                        </span>
                    </div>

                </CardContent>
            </Card>

        </div>
    );
}