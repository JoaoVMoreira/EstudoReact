import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Nome() {

    const { alunos } = useContext(UserContext)
    return (
        <div>
            <span style={{color: 'red'}}>Bem vindo: { alunos } </span>
            <br/>
        </div>
    );
}

export default Nome;
