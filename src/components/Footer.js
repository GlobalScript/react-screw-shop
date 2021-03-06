import logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {categories, hiddenSort} from '../store/elementVisibilitySlice';

function Footer(){
    const dispatch = useDispatch();
    function navigateClick() {
            dispatch(categories(null));
            dispatch(hiddenSort(true));
        }
    return (
        <div className="footer-container">
          <Link to="home"><img className="footer-logo" src={logo} onClick={navigateClick}/></Link>
          <div className="nav-block" onClick={navigateClick}>
            <Link to="home"><i className="icon-home"></i></Link>
            <Link to="/about"><i className="icon-doc-text-inv"></i></Link>
            <Link to="/login"><i className="icon-user"></i></Link>
            <p className="footer-description">© Internet-shop «Petrovich™»</p>
        </div>
        <div className="contacts-block">
            <a href="/#"><i className="icon-mail"></i></a>
            <a href="/#"><i className="icon-facebook"></i></a>
            <a href="https://github.com/GlobalScript/react-screw-shop"><i className="icon-git"></i></a>
            <a href="/#"><i className="icon-paper-plane"></i></a>
        </div>
        </div>
    )
}

export default Footer;