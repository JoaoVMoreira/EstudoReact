//Biblioteca de rotas = npm install react-router-dom

//É criada uma pasta (pages) onte contemos as paginas do site (Home e Sobre), cada uma contendo um index.js

//Para criando o Header criamos a pasta Component com o index.js do header onde são anunciados os links


import RoutesApp from "./routes";

function App() {
  return (
    <RoutesApp />
  );
}

export default App;
