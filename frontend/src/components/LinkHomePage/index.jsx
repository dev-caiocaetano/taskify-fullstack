import { Link } from 'react-router-dom';
import './LinkHomePage.css'

export default function HomePageLink() {
  return (
    <div className='header'>
      <Link to='/' className='home-link'>Página Inicial</Link>
    </div>

  )

}
