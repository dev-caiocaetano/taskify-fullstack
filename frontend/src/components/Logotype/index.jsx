import taskifyLogo from '../../assets/taskify-logo-black-nobackground.png';
import './Logotype.css'

export default function Logotype() {
  return (
    <div className='logotype'>
      <img src={taskifyLogo} alt='Logo da Taskify' className='taskifyLogotype' />
      <h1 className='logotypeText'>ASKIFY</h1>
    </div>
  );
};
