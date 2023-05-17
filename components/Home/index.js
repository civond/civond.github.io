import './index.scss'
import Logo from '../../assets/images/otter.png'

import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='home-page'>
                <div className='text-zone'>
                    <h1>
                        <div className='firstline'>
                            Hello/你好/こんにちは!
                        </div>
                        <div className='secondline'>
                            My name is
                        </div>
                        <div className='thirdline'>
                            Dorian!
                        </div> 
                    </h1>
                    <div className='educationtext'>
                        <h2>
                            M.S. Biomedical Engineering, New York University<br/>
                            B.S. Biology, Psychology, University of Oregon
                        </h2>
                        <Link to="https://drive.google.com/file/d/1V7hdxioVEoq7ynB5oJ1-LiaqZEjQjL4Y/view?usp=share_link" className='flat-button'>
                            CONTACT ME
                        </Link>
                    </div>
                </div>
            </div>

            <div className='logo-container'>
                <img src={ Logo } alt='otter' />
            </div>
        </>
    )
}

export default Home