import gitHubIcon from '../../assets/github.png'
import { Link } from 'react-router-dom';
import Logotype from '../Logotype';
import './Home.css';

export default function HomePage() {
  return (
    <div className="home-page-container">
      <main className="hero-content">
        <Logotype />
        <h2 className="hero-headline">
          Seu gerenciador de tarefas simples e intuitivo.
        </h2>
        <p className="hero-subheadline">
          Chega de post-its e notas perdidas: anote suas tarefas, defina prioridades e foque no que realmente importa. Simples, rápido e direto ao ponto.
        </p>
        <Link to='/login' className="cta-button">Começar a organizar</Link>
      </main>

      <footer className="home-footer">
        <a href='https://github.com/dev-caiocaetano' target="_blank" rel="noopener noreferrer">
          <span>Desenvolvido por Caio Caetano</span>
          <img src={gitHubIcon} alt='Ícone do GitHub' />
        </a>
      </footer>

    </div>
  );
};
