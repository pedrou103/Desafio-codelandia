import MainContent from '../MainContent/MainContent'
import './App.sass'

function App() {
  return (
    <div className="App">
      <header>
        <h1>La P<span>i</span><span>z</span><span>z</span>a</h1>
        <img src="src/assets/img/img4.png" alt="imagem de planta" />
      </header>
      <MainContent/>
      <footer>
        <p>todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App