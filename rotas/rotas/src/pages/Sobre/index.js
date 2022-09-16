import { Link } from 'react-router-dom'

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            <span>Página sobre</span> <br /><br />

            <Link to={'/'}>Home</Link> <br/>
            <Link to={'/contato'}>Contato</Link>
        </div>
    );
}

export default Sobre;
