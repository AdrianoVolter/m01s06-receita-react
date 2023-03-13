import Cabecalho from "./Cabecalho";
import Imagem from "./Imagem";
import Instrucoes from "./Instrucoes";
import Ingredientes from "./Ingredientes";
import Rodape from "./Rodape";
import receitas from "./receitas.json";
import{useState} from "react";

import "./App.css";

const App = () => {

  const receita = receitas[2];

  return (

    <div>
      <Cabecalho titulo = {receita.titulo} descricao = {receita.descricao} />
      <Imagem src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeDJ_gAyqBORKds4WNfHs3rSnqfsfp3lF-YsfQGUtcsZkmS6pHVC01tylhGUF7xqmSHg&usqp=CAU" alt = "Adriano" />
      <Ingredientes ingrediente = {receita.ingredientes} />
      <Instrucoes lista = {receita.preparo} />
      <Rodape tempoDePreparo = {receita.tempo_preparo} rendimento = {receita.rendimento} />
    </div>

  );
};

export default App;
