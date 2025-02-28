
import './App.css'
import Convert from './components/Convert'
import Convert2 from './components/Convert2'
import ConvertTemp from './components/ConvertTemp'
import State from './components/State'
import Warning from './components/Warning'

function App() {
  
  return (
    <>
      <Warning />
      <Convert />
      <Convert2 />
      <ConvertTemp />
      <State />
    </>
  )
}

export default App
