import Cabecalho from "./Cabecalho";
import Imagem from "./Imagem";
import Instrucoes from "./Instrucoes";
import Ingredientes from "./Ingredientes";
import Rodape from "./Rodape";
import receitas from "./receitas.json";
import{useState} from "react";

import "./App.css";

const App = () => {

  const [pagina, setPagina] = useState(0);
  const [receita, setReceita] = useState(receitas[pagina]);

  function proximaReceita() {
    setPagina(pagina + 1);
    setReceita(receitas[pagina]);
  }


  return (

    <div>
      <button >Aterior</button>
      <button onClick={proximaReceita}>Proximo</button>
      <Cabecalho titulo = {receita.titulo} descricao = {receita.descricao} />
      <Imagem src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeDJ_gAyqBORKds4WNfHs3rSnqfsfp3lF-YsfQGUtcsZkmS6pHVC01tylhGUF7xqmSHg&usqp=CAU" alt = "Adriano" />
      <Ingredientes ingrediente = {receita.ingredientes} />
      <Instrucoes lista = {receita.preparo} />
      <Rodape tempoDePreparo = {receita.tempo_preparo} rendimento = {receita.rendimento} />
    </div>

  );
};

export default App;
