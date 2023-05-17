import './index.scss'

const Skills = () => {
    return (
        <>
        <div className='wrapper'>
            <div className='pub-container'>
            <h2>Publications</h2><hr/>
                <ol>
                    <li>
                        <a target = "_blank" rel="noreferrer" href="https://elifesciences.org/articles/58523">
                            <div className='button-wrapper'>Sniff-synchronized, gradient-guided olfactory search by freely moving mice.</div>
                        </a>
                    </li>  
                </ol>  

            </div>
            <div className='skill-container'>
                <h2>Languages</h2>
                <hr/>
                    <ul>
                        <li>Python</li>
                        <li>MATLAB</li>
                        <li>C++</li>
                        <li>SQL</li>
                        <li>JavaScript</li>
                        <li>R</li>
                    </ul>        
            </div>

        <div className='skill-container'>
            <h2>Tools</h2>
            <hr/>
                <ul>
                    <li>Simulink</li>
                    <li>Anaconda</li>
                    <li>AutoCAD</li>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>MongoDB</li>
                </ul>
        </div>
        <div className='skill-container'>
        <h2>Platforms</h2>
        <hr/>
            <ul>
                <li>DeepLabCut</li>
                <li>Google CoLabs</li>
                <li>AWS</li>
            </ul>
        </div>
    </div>
    </>
    )
}
export default Skills