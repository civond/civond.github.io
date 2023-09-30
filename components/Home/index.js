import './index.scss'
import Logo from '../../assets/images/otter.png'
import Text from '../../assets/text/Text.json'

const Home = () => {
    return (
        <>
            <div className='home-page'>
                <div className='text-zone'>
                    <h1>
                        <div className='firstline'>
                            {Text['Home']['Home_Header1']}
                        </div>
                        <div className='secondline'>
                            {Text['Home']['Home_Header2']}
                        </div>
                        <div className='thirdline'>
                            {Text['Home']['Home_Header3']}
                        </div> 
                    </h1>
                    <div className='educationtext'>
                        <h2>
                            {Text['Home']['Home_Education1']}<br/>
                            {Text['Home']['Home_Education2']}
                        </h2>

                        <a href= {Text['Links']['CV']} className='flat-button' 
                        target="_blank" rel="noopener noreferrer">
                            {Text['Home']['Home_Button']}
                        </a>
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