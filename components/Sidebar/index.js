import './index.scss'
import { useState } from 'react'
import Logo from '../../assets/images/otter.png'
import LogoText from '../../assets/images/name.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faTerminal, faClose, faBars} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className="nav-bar">
        <Link className="logo" to="/"  onClick={() => setShowNav(false)}>
            <img src={Logo} alt='logo'/>
            <img className="sub-logo" src={LogoText} alt='logos'/>
        </Link>

        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" className="about-link" activeclassname="active" to="/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" className="project-link" activeclassname="active" to="/projects" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faTerminal} color="#4d4d4e" />
            </NavLink>

            <FontAwesomeIcon 
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon' />
          
        </nav>

        <div className='bottom-icons'>
            <ul>
                <li>
                    <a target = "_blank" rel="noreferrer" href="https://www.linkedin.com/in/d-yeh/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel="noreferrer" href="https://github.com/civond">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
        </div>

    </div>
    )
}
    
    


export default Sidebar