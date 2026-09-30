import { Button } from "./ui/button"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "./ui/avatar"
import './App.css'
import { Card, CardFooter, CardDescription, CardHeader, CardTitle, CardContent } from "./ui/card"

function App() {


  return (
    <>
        <Button className="border-laranja-motor text-laranja-motor hover:bg-laranja-motor hover:text-white" variant="secondary">
        Ver Detalhes
      </Button>
        <Avatar size="lg" className="border-2 border-laranja-motor">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png"></AvatarImage>
          <AvatarFallback className="bg-background-secundario text-amarelo-alerta font-bold">
            km
          </AvatarFallback>
          <AvatarBadge className="bg-amarelo-alerta  dark:bg-background-primario"></AvatarBadge>
        </Avatar>

        <Card className="w-[400px] bg-background-secundario border-gray-800 text-white shadow-xl shadow-laranja-motor/10">
    <CardHeader>
      <CardTitle className="text-2xl text-laranja-motor font-poppins">
        Resumo Financeiro
      </CardTitle>
      <CardDescription className="text-gray-400">
        Acompanhe as suas metricas principais de hoje.
      </CardDescription>
    </CardHeader>
    
    <CardContent>
      <p className="text-sm leading-relaxed">
        O conteudo do seu cartao fica isolado aqui. O shadcn calcula os espacamentos para o design ficar limpo.
      </p>
    </CardContent>
    
    <CardFooter className="flex justify-end">
      <Button className="border-laranja-motor text-laranja-motor hover:bg-laranja-motor hover:text-white" variant="outline">
        Ver Detalhes
      </Button>
    </CardFooter>
  </Card>

    </>
  )
}

export default App
