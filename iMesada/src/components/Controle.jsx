import React from 'react'
import './Controle.css'

function Controle() {
  return (
    <div className='container-controle'>
        <h2 id='controlinho'>O Grande Controle Financeiro!</h2>
        <p>Saldo: PLACEHOLDER</p>
        <div className='controlinho-inputs'>
            <input type="text" placeholder='Nome da movimentação...' id="nome-movimentacao" />
            <input type='number' placeholder='Valor...' id='valor-movimentacao'/>
        </div>
        <div className='controlinho-buttons'>
            <button id='credito'>Crédito</button>
            <button id='debito'>Débito</button>
        </div>
    </div>
  )
}

export default Controle