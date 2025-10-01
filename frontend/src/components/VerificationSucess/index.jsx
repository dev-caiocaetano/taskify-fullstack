import { Link } from 'react-router-dom';
import './VerificationSucess.css'

export default function VerificationSucessPage() {
  return (
    <div className="verification-sucess-container">
      <div className="hero-content">
        <h2 className="hero-headline">E-mail verificado com sucesso!</h2>
        <p  className="hero-subheadline">Você já pode organizar suas tarefas.</p>
        <div>
          <Link to='/login' className="cta-button">Começar a organizar</Link>
        </div>
      </div>
    </div>

  )
}
