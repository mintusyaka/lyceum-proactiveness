import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../../public/logo.png';

function Navbar() {
  const { i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'uk' ? 'ru' : 'uk');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container pangolin-regular">

        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/training">Навчання</Link>
          <Link to="/pricing">Вартість</Link>
          <Link to="/courses">Курси</Link>
          <Link to="/about">Про ліцей</Link>
          <Link to="/faq">Питання та відповіді</Link>
          <Link to="/reviews">Відгуки</Link>
          <Link to="/contacts">Контакти</Link>
        </nav>

        <div className="nav-actions">
          <button className="demo-button">Демо</button>
          {/* <button className="lang-switch" onClick={changeLanguage}>
            {i18n.language === 'uk' ? 'РУС →' : 'УКР →'}
          </button> */}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
