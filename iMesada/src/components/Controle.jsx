import React from 'react'
import { useState } from 'react'
import './Controle.css'

function Controle() {
    const [saldo, setSaldo] = useState(150)
    const [movimentacao, setNomeMovimentacao] = useState('')
    const [valor, setValor] = useState('')

    function credito(){
        if (setValor == 0){
            alert("Por favor, insira um valor válido.")
        }else{
            let novoValor = saldo + valor
            setSaldo(novoValor)
            setValor('')
        }
    }

    function debito(){
        if (setValor == 0){
            alert("Por favor, insira um valor válido.")
        }else{
            let novoValor = saldo - valor
            setSaldo(novoValor)
            setValor('')
        }
    }

  return (
    <div className='container-controle'>
        <h2 id='controlinho'>O Grande Controle Financeiro!</h2>
        <p>Saldo: {saldo}</p>
        <div className='controlinho-inputs'>
            <label htmlFor="">Nome da Movimentação: </label>
            <input type="text" placeholder='Nome da movimentação...' id="nome-movimentacao" onChange={(event) => setNomeMovimentacao(event.target.value)}/>
            <label htmlFor="">Valor: </label>
            <input type='number' placeholder='Valor...' id='valor-movimentacao'  onChange={(event) => setValor(Number(event.target.value))}/>
        </div>
        <div className='controlinho-buttons'>
            <button id='credito' onClick={credito}>Crédito</button>
            <button id='debito' onClick={debito}>Débito</button>
        </div>
    </div>
  )
}

export default Controle