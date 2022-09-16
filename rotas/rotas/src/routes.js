import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/Home' // Importando pagina Home
import Sobre from './pages/Sobre' //Importando Pagina sobre
import Contato from './pages/Contato'
import Header from './components/Header' // Adicionando Header. O mesmo é adicionado após o <BrowserRouter> para se repetir em todas as páginas.
import Erro from './pages/Erro' // Em caso de pagina não encontrada, utilizar o * no path
import Produto from './pages/Produto' // Informar o produto + id utilizando /:id

//Criando função para definir destido das paginas importadas 
function RoutesApp(){
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/sobre" element={ <Sobre/> }/>
                <Route path='/contato' element={ <Contato/> } /> 
                <Route path='/produto/:id' element={ <Produto/>} />

                <Route path='*' element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;