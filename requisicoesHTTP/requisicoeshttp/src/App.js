import React, { useEffect, useState } from "react";

////https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  const [nutri, setNutri] = useState([])

  //Função chamada no momento da abertura do site, uma vez que as [] estão vazias
  useEffect(()=>{

    ///Função executada no momento da abertura da página
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts' //Variavel que recebe o link HTTP
      fetch(url) //Realiza a requisição HTTP

      .then((r)=>r.json()) //Em caso de sucesso a função de resultado (r) é transformada em JSON(.json)
      .then((json)=>{
        console.log(json)
        setNutri(json) //Enviando o conteudo recebido na requisição HTTP para o useEffect, permitindo que seja utilizado o conteudo da API na estrutura do site.
      })
    }

    loadApi();
  }, [])
  return (
    <div>
      <h1>Teste</h1>

      
      {nutri.map((item)=> {
        //nutri.map vai percorrer a API inteira e salvar o conteudo em item
        return(
          <article key={item.id}>
            <strong>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo}/>
            <p>{item.subtitulo}</p>
          </article>
        )
      })}

    </div>
  );
}

export default App;
