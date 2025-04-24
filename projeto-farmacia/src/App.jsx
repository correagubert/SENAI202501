import './App.css'
import ContainerIntroducao from './components/Container-Introducao'
import ContainerConvite from './components/ContainerConvite'
import ContainerPromo from './components/ContainerPromo'

function App() {

  return (
    <div className='container-app'>
      <div>
        <h1>Farmárcia</h1>
      </div>
      <ContainerIntroducao />
      <ContainerConvite />
      {/* <div className='container-promo'>
        fotograndecamiseta
        <div className='promocao'>
          <div className='texto-promocao'>
            apoie-nos
          </div>
          <div className='imgs-promocao'>
            imagens pequenas promocionais
          </div>
        </div>
      </div> */}
      <ContainerPromo />
      {/* TRANSFORMAR TUDO ISSO EM COMPONENTES */}
    </div>
  )
}

export default App
