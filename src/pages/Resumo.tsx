import { Card, CardContent, CardFooter } from "@/ui/card";
import { BanknoteArrowUp, BanknoteArrowDown, BadgeDollarSign } from "lucide-react"

export default function Resumo() {
    return (
        <div>
            <Card size="sm" className="mx-auto w-full max-w-lg bg-background-secundario text-white">
                <CardContent className="">
                    <ul>
                        <li>
                            <div>
                                <BanknoteArrowUp />
                                <span>FATURAMENTO</span>
                            </div>

                            <span>R$ 4.620,00</span>
                        </li>

                        <li>
                            <div>
                                <BanknoteArrowDown />
                                <span>CUSTOS</span>
                            </div>

                            <span className="text-red-700">-R$ 1.774,40</span>
                        </li>
                    </ul>
                </CardContent>
                <CardFooter className="bg-[#32414a]">

                    <div>
                        <BadgeDollarSign />
                        <span>LUCRO REAL</span>
                    </div>

                    <span>R$ 2.845,60</span>
                </CardFooter>
            </Card>
        </div>
    )
}