import GitHub from '../img/GitHub.png';
import Linkedin from '../img/Linkedin.png';
import Instagram from '../img/Instagram.png';
import '../css/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className='footer'>
      <Link className='footer_item_link' to="/">
        <p>Criado por: <br></br>Jean Kevin Maciel</p>
      </Link>
      <ul className='footer_list'>
        <li className='footer_item'>
            <a className='footer_item_link' target="_blank" href='https://github.com/OJeanMaciel'>
            <img src={GitHub} className="img"/>
            </a>
        </li>
        <li className='footer_item'>
        <a className='footer_item_link' target="_blank" href="https://www.linkedin.com/in/jean-kevin-maciel-436805199/">
            <img src={Linkedin} className="img"/>
        </a>
        </li>
        <a className='footer_item_link' target="_blank" href="https://www.instagram.com/jean.maciel_/">
            <li className='footer_item'>
                <img src={Instagram} className="img"/>
            </li>
        </a>
        </ul>
    </nav>
  );
}

export default Footer;
