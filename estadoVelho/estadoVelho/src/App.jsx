import { useState } from 'react'
import './App.css'
import Convert from './components/Convert'
import Convert2 from './components/Convert2'

function App() {
  const [nome, setNome] = useState("Ulib")
  const [usuario, setUsuario] = useState("Jack")
  const [senha, setSenha] = useState()

  // let nome = "Ulib"
  function lerNome() {
    let nombre = prompt("Novo nome:")
    setNome(nombre)
  }
  function lerUsuario() {
    let resposta = prompt("Novo usuário:")
    setUsuario(resposta)

    let pw = prompt("Digite uma nova senha: ")
    let pw2 = prompt("Digite a senha novamente: ")
    if(pw == pw2){
      setSenha(pw2)
    }else{
      alert("As senhas não coincidem.")
    }
  }

  return (
    <>
      <h1>Estados</h1>
      Nome: {nome}
      <div>
        Usuário: {usuario} 
        Senha: {senha}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuário</button>
      
      <Convert />
      <Convert2 />
    </>
  )
}

export default App
