import logo from '../img/Logo.png';
import '../css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='navbar'>
      <Link className='item_link' to="/">
        <img src={logo} className="logo"/>
      </Link>
      <ul className='list'>
        <li className='item'>
          <Link className='item_link' to="/marcas">
          Marcas
          </Link>
        </li>
        <li className='item'>
          <Link className='item_link' to="/form">
          Cadastre seu Carro
          </Link>
        </li>
        <li className='item'>
          Telefone: 3632-6694
        </li>
        </ul>
    </nav>
  );
}

export default Header;
