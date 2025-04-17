import { useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() {
  const[produtos, setProdutos] = useState([
    {
      modelo: "Melancia",
      preco: 22
    },
    {
      modelo: "Pneu",
      preco: 220
    },
    {
      modelo: "Notebook Lenovo Thinkpad E480",
      preco: 2200
    }
  ])

  function testar(){
    console.log(produtos);
  }

  return (
    <div className='container-app'>
      <Produto modelo={"Galaxy A15"} preco={809}/>
      <Produto modelo={`Smart TV 32" Full HD LED TCL`} preco={971.70}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco}/>
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco}/>
      <Produto modelo={produtos[2].modelo} preco={produtos[2].preco}/>

      <button onClick={testar}>TESTAR</button>

      {produtos.map((p) => (
        <Produto modelo={p.modelo} preco={p.preco}/>
      ))}

    </div>
  )
}

export default App
