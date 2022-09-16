import { Link } from "react-router-dom"

function Contato (){
    return(
        <div>
            <h1>Contato</h1>

            <Link to={'/'}>Home</Link> <br />
            <Link to={'/contato'}>Contato</Link>
        </div>
    );
}

export default Contato;