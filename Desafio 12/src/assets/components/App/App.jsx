import MainContent from '../MainContent/MainContent'
import './App.sass'

import Img1 from '../../img/img4.png'

function App() {
  return (
    <div className="App">
      <header>
        <h1>La P<span>i</span><span>z</span><span>z</span>a</h1>
        <img src={Img1} alt="imagem de planta" />
      </header>
      <MainContent/>
      <footer>
        <p>todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App