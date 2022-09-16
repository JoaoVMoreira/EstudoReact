import { useState, useEffect } from 'react'
import firebase from './firebaseConnection'

function App() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')

  const [user, setUser] = useState({})

  async function novoUsuario (){ //Criando a função de cadastro de usuário no banco de dados
    await firebase.auth().createUserWithEmailAndPassword(email, senha) //Cadastrando usuário pelo e-mail e senha    
    .then( async (value)=> { //Caso o cadastro de certo:
      
      await firebase.firestore().collection('users') // Acessando coleção "users" no nosso banco de dados
      .doc(value.user.uid) //Acessando documento "uid" do user
      .set({ //Definindo valores a serem enviados e enviando
        nome: nome,
        cargo: cargo,
        status: true
      })
      .then(()=> { //Caso de certo, limpando os inputs
        setNome('')
        setCargo('')
        setEmail('')
        setSenha('')
      })
    })
    .catch((error)=> {
      if(error.code === 'auth/weak-password'){
        alert('Senha muito fraca!')
      } else if(error.code === 'auth/email-already-in-use'){
        alert('Esse e-mail já está em uso')
      }
    })  
  }

  async function logOut(){
    await firebase.auth().signOut() //Função para deslogar usuário 
  }

  async function login(){
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(async (value)=> {
      await firebase.firestore().collection('users')
      .doc(value.user.uid)
      .get()
      .then((snapshot)=>{
        setUser({
          nome: snapshot.data().nome,
          cargo: snapshot.data().cargo,
          status: snapshot.data().status,
          email: value.user.email
        })
        
      })
    })
  }

  return (
    <div className="App">

      <h1>Tela de Cadastro</h1>
      
      <div>
        <label>Nome: </label><br />
        <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} /><br /><br />
        <label>Cargo: </label><br />
        <input type='text' value={cargo} onChange={(e) => setCargo(e.target.value)} /><br /><br />
        <label>E-mail:</label><br/>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
        <label>Senha:</label><br />
        <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)} /><br /><br />

          <button onClick={login}>Login</button>
          <button onClick={novoUsuario}>Cadastrar-se</button>
          <button onClick={logOut}>Sair</button><br /><br /><br /><br />
      </div>

      <hr /><br /><br /><br />

      {Object.keys(user).length > 0 && (
        <div>
          <strong>Olá </strong>{user.nome} <br/>
          <strong>Cargo: </strong>{user.cargo} <br />
          <strong>Email: </strong>{user.email} <br />
          <strong>Status: </strong>{user.status ? 'Ativo' : 'Desativado'} <br />
        </div>
      )}


    </div>
  )
}

export default App;
