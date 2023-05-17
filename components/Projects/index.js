import './index.scss'
import Display from './Display'

const Projects = () => {
    return (
        <div className='container project-page'>
            <div className='text-zone'>
                <div className='header-animation'>
                    <h1>
                    Projects
                    </h1>
                </div>
            
                <div className='project-container'>
                    <Display/>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects