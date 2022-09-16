import { Link } from 'react-router-dom'


function Header(){
    return(
        <header>
            <p>Sujeito programador</p>
            <Link to={'/'} >Home </Link> 
            <Link to={'/sobre'} >Sobre </Link> 
            <Link to={'/contato'} >Contato</Link>
        </header>
    )
}

export default Header;