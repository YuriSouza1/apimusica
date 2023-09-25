import './App.css'
import Card from './componentes/cards/Card.jsx'
import Menu from './componentes/footer/menu.jsx'
import API from './api/api'

function App() {

  return (
    <>
    <h1>DIVERSIDADE FUNKS API</h1>
    <div className="mod">
      <Card/>
       
    </div>
    <Menu />
    </>
  )
}

export default App
