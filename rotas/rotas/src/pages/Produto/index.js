import { useParams} from 'react-router-dom'

function Produto(){

    const { id } = useParams() //Pega o id inserido na URL após o Produto

    return(
        <div>
            Meu produto é {id}
        </div>
    )
}

export default Produto;