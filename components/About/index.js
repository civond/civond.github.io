import './index.scss'
import Skills from './skills'
import Personalpic from '../../assets/images/personalpic.png'
import Text from '../../assets/text/Text.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <>
        <div className='container about-page'>
            
            <div className='text-zone'>
                <div className='header-animation'>
                    <h1>
                        {Text['About']['About_Me']}
                    </h1>
                </div>
                <div className='text-animation1'>
                    <p>
                       {Text['About']['About_Me_Header']}
                    </p>
                </div>
                <div className='text-animation2'>
                    <p>
                        {Text['About']['About_Me_Body1']} <br/><br/>
                        {Text['About']['About_Me_Body2']}
                    </p>
                </div>
                <div className='text-animation3'>
                    <p>
                        {Text['About']['About_Me_Close']}
                    </p>            
                </div>
            </div>
            
            <div className='image-container'>
                <img src={Personalpic} alt='profile-pic'/>
        
                <div className='links-list'>
                    <h2>Links:</h2>
                    <ul>
                        <li>
                            <a target = "_blank" rel="noreferrer" href= {Text['Links']['CV']} >
                                <div className='button-wrapper'>
                                    <FontAwesomeIcon icon= {faNoteSticky} color={Text['Links']['color']}/> CV
                                </div> 
                            </a>
                        </li>
                        <li>
                            <a target = "_blank" rel="noreferrer" href= {Text['Links']['LinkedIn']} >
                                <div className='button-wrapper'>
                                    <FontAwesomeIcon icon={faLinkedin} color={Text['Links']['color']} /> LinkedIn
                                </div>
                            </a>
                        </li>
                        <li>
                            <a target = "_blank" rel="noreferrer" href= {Text['Links']['GitHub']}>
                                <div className='button-wrapper'>
                                    <FontAwesomeIcon icon={faGithub} color={Text['Links']['color']} /> GitHub
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <Skills/>
        </div>
        </>
    )
}

export default About