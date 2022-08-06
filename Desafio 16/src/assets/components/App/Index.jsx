import Doacao from '../Doacao/Index'
import Card from '../Card/Index'
import Logo from '../Logo/Index'
import './Index.sass'
import Circle from '../Circle/Index';

const cards = [
  {
    id: 1,
    imageUrl: 'giving1.png',
    title: 'Presentes',
    description: 'Eles são os melhores presentes que existem.'
  },
  {
    id: 2,
    imageUrl: 'giving2.png',
    title: 'Enfeites',
    description: 'Dê uma decoração.'
  },
  {
    id: 3,
    imageUrl: 'giving4.png',
    title: 'Doces',
    description: 'Aproveite os doces natalinos.'
  },
  {
    id: 4,
    imageUrl: 'giving3.png',
    title: 'Muito amor',
    description: 'Aproveite os sentimentos que duram para sempre.'
  },
];

const sociais = [
  {
    url: 'twitter.png'
  },
  {
    url: 'youtube.png'
  },
  {
    url: 'linkedin.png'
  },
  {
    url: 'instagram.png'
  },
  {
    url: 'facebook.png'
  },
];

const acao = () => {
  alert('chamou')
}

function App() {

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="header">
            <Logo />
            <nav>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Acessórios</a></li>
                <li><a href="#">Doação</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
              <img id="menu" onClick={acao} src="src/assets/img/hamburguer.png" alt="menu hamburguer" />
            </nav>
          </div>
          <div className="content-header">
            <Doacao
              principal1="Feliz Natal e "
              principal2=" Feliz Ano Novo!"
              description="Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal."
              texto="Fazer uma doação" />
            <img id='luvas' src="src/assets/img/send.png" alt="luvas" />
          </div>
        </div>
      </header>
      <main>
        <section className="container">
          <section className='first'>
            <div id='content-to-fisrt'>
              <h1>Acessórios</h1>
              <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
            </div>
            <div id='cards'>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  url={card.imageUrl}
                  title={card.title}
                  description={card.description} />
              ))}
            </div>
          </section>
        </section>
      </main>
      <main className='second'>
        <section className='container'>
          <div className="content-main">
            <Doacao
              principal1="Comemore com"
              principal2=" muito amor"
              description="Nestes feriados, festeje com muito amor e paz, oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, desejando-lhes um Feliz Natal."
              texto="Fazer doação" />
            <img id='shared' src="src/assets/img/shared.png" alt="luvas" />
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <Logo />
          <div id='circles'>
            {sociais.map((rede, index) => (
              <Circle key={index} url={rede.url}/>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
