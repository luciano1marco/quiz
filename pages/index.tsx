
import Questao from "../components/Questao"
import QuestaoModel from "../model/questao"
import RespostaModel from "../model/resposta"

export default function Home() {
  const questaoTeste = new QuestaoModel(1,'Melhor cor?',[
      RespostaModel.errada('verde'),
      RespostaModel.errada('vermelha'),
      RespostaModel.errada('Azul'),
      RespostaModel.certa('Preta'),
  ] )
  return (
   <Questao valor={questaoTeste}/>
  )
}