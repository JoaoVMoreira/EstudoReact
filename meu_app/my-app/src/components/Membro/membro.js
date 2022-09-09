import React, { Component } from "react";

class Membro extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({nome: 'João'})
    }

    sair(){
        if(this.nome != 'vizitante'){
            this.setState({nome: 'vizitante'})
        }else if(this.nome === 'vizitante'){
            alert('Voc~e não está logado(a)!')
            return
        }
    }

    render() {
        return (
            <div>
                <h2>Bem vindo(a) {this.state.nome}</h2>
                <button onClick={this.entrar}>Entrar</button>
                <button onClick={this.sair}>Sair</button>
            </div>
        );
    }
}

export default Membro;