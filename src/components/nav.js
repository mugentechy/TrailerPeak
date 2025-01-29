import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/nav.css';


const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className={`nav ${show && 'nav_black'}`}>
    <a href="/browse" className={'link'}>
   TrailerPeak
 </a>
      <img
        className='nav_avatar'
        src='https://res.cloudinary.com/doammcpie/image/upload/v1618310958/2_vohnwl.png'
        alt='naruto logo'
      />

   <a href="/series" className={'link'}>
          Tv Shows
        </a>
         <a href="/movies" className={'link'}>
          Movies
        </a>

      <div className='list'>

        <img className='list-img'  alt='naruto logo' />
        <p></p>
        <p className={'link'}>
          SignOut
        </p>
      </div>
    </div>
  )
}

export default Nav
