import Logotype from '../../components/Logotype';
import { Link } from 'react-router-dom';
import gitHubIcon from '../../assets/github.png'
import './HomePage.css';


export default function HomePage() {
  return (
    <div className='homePage'>
      <div className='homePageLogo'>
        <Logotype />
      </div>
      <div className='homePageText'>
        <h2>Seu gerenciador de tarefas simples e intuitivo.</h2>
        <h2>Chega de post-its e notas perdidas: anote suas tarefas, defina prioridades
          e foque no que realmente importa. Simples, rápido e direto ao ponto.
        </h2>
        <div className='startButtonDiv'>
          <Link to='/login' className='startButton'>Começar a organizar</Link>
        </div>
      </div>

      <div className='dev'>
        <Link to='https://github.com/dev-caiocaetano' className='devLink'>
          Desenvolvido por Caio Caetano
          <img src={gitHubIcon} alt='Ícone do GitHub' className='gitHubIcon' />
        </Link>
      </div>

    </div>
  )
};
