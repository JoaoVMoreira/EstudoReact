import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      senha: '',
    }

    this.cadastrar = this.cadastrar.bind(this)
  }

  cadastrar(event) {

    if (this.state.nome != '' && this.state.email != '' && this.state.senha != '') {
      alert(`Nome: ${this.state.nome} \nE-mail: ${this.state.email} \nSenha: ${this.state.senha}`)
    } else {
      alert('É necessário preencher todos os campos')
    }

    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h2>Login</h2>

        <form onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input type={'text'} value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} placeholder='Nome' /> <br />
          <label>E-mail:</label>
          <input type={'email'} value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder='E-mail' /> <br />
          <label>Senha:</label>
          <input type={'password'} value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} placeholder='Senha' /> <br />
          <button type="submit">Cadastrar</button>
        </form>

      </div>
    );
  }
}

export default App