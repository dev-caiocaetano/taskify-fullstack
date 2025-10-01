import taskifyLogo from '../../assets/taskify-logo-black-nobackground.png';
import './Logotype.css'

export default function Logotype() {
  return (
    <div className='logotype-container'>
      <img src={taskifyLogo} alt='Logo da Taskify' className='logotype-image'/>
      <h1 className='logotype-text'>ASKIFY</h1>
    </div>
  );
};
