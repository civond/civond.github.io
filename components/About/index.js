import './index.scss'
import Skills from './skills'
import Personalpic from '../../assets/images/personalpic.png'
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
                    About me
                    </h1>
                </div>
                <div className='text-animation1'>
                    <p>
                    "An image is nothing more than a two dimensional signal that can defined by a mathematical function f(x,y)."
                    </p>
                </div>
                <div className='text-animation2'>
                    <p>
                        My interest in signal processing began during my previous research experience where I focused on quantification of olfactory behavior in mice
                        with the use of deep-learning tools such as DeepLabCut and data visualization using Python. It was in this period where I realized that so much useful 
                        information can be extracted out of signals.<br/><br/>
                        
                        Thus, upon beginning my Master's program in biomedical engineering at New York University, I decided to dedicate myself to this subspecialty. 
                        Specifically, my interest is in biosignal processing. So far, I have gained significant experience with filter design and subsequent hardware implementations. 
                        This is showcased by the realtime ECG monitoring device that I designed with a group during this semester, where I acted as the software lead for signal acquisition and processing.
                        To complement this, my current research project in the Computation Medicine Laboratory involves wearable device design.
                
                    </p>
                </div>
                <div className='text-animation3'>
                    <p>
                        If I could describe myself in one sentence, it would be: "Naturally curious and always looking for ways to improve myself and help those around me."!!
                        If you are interested in learning more specifics about my background, please refer to my CV~
                    </p>            
                </div>
            </div>
            
            <div className='image-container'>
                <img src={Personalpic} alt='profile-pic'/>
        
                <div className='links-list'>
                    <h2>Links</h2>
                    <ul>
                        <li>
                            <a target = "_blank" rel="noreferrer" href="https://drive.google.com/file/d/1V7hdxioVEoq7ynB5oJ1-LiaqZEjQjL4Y/view?usp=share_link">
                            <div className='button-wrapper'><FontAwesomeIcon icon= {faNoteSticky} color="#4d4d4e"/> Curriculum Vitae</div> 
                            </a>
                        </li>
                        <li>
                            <a target = "_blank" rel="noreferrer" href="https://www.linkedin.com/in/d-yeh/">
                            <div className='button-wrapper'><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> LinkedIn</div>
                            </a>
                        </li>
                        <li>
                            <a target = "_blank" rel="noreferrer" href="https://github.com/civond">
                            <div className='button-wrapper'><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> GitHub</div>
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