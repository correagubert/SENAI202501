import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("Jack")

  let nome = "Ulib"
  function lerNome() {
    nome = prompt("Nome:")
    console.log(nome);
  }
  function lerUsuario() {
    let resposta = prompt("Novo usuário:")
    setUsuario(resposta)
  }

  return (
    <>
      <h1>Estados</h1>
      Nome: {nome}
      <div>
        Usuário: {usuario}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuário</button>
    </>
  )
}

export default App
