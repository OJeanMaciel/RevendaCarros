
import '../css/header.css';
import logo from '../img/Logo.png';

function Header() {
  return (
    <div className="container">
      <img src={logo} className="logo"/>
    </div>
  );
}

export default Header;
