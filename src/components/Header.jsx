import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/kasa.png'

function Header() {
    const location = useLocation()
    return (
        <div className="navBar">
            <img className="navLogo" src={Logo} alt="logo" />
            <nav>
                <Link
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    Accueil
                </Link>
                <Link
                    to="/About"
                    className={location.pathname === '/About' ? 'active' : ''}
                >
                    A propos
                </Link>
            </nav>
        </div>
    )
}

export default Header
