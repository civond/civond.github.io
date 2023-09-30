import './index.scss'
import Text from '../../../assets/text/Text.json'
import { Icon_Data } from '../../../assets/text/Icon_Data'

const Skills = () => {
    return (
        <>
        <div className='wrapper'>
            <div className='pub-container'>
            <h2>Publications:</h2>
                <ol>
                    <li>
                        {Text['About']['Publications'].map((item) => {
                            return(
                                <div className='button-wrapper'>
                                    <a target = "_blank" rel="noreferrer" href= {item.link}>
                                        {item.title}
                                    </a>
                                </div>
                            );
                        })}
                    </li>          
                </ol>  

            </div>
            <div className='skill-container'>
                <h2>Languages:</h2>
                        <div >
                        {Icon_Data[0].map((item) => {
                            return(
                                <div id="latest_stuff" className='icon_container'>
                                    
                                    <img src= {item.path} 
                                    title= {item.name}
                                    alt= {item.name}
                                    />
                                    
                                    <div className='popupText'>
                                        {item.name}

                                    </div>

                                </div>
                                );
                            })}
                        </div>
                     
            </div>

            <div className='skill-container'>
                <h2>Tools:</h2>
                {Icon_Data[1].map((item) => {
                            return(
                                <div id="latest_stuff" className='icon_container'>
                                    <div>
                                        <img src= {item.path} 
                                        title= {item.name}
                                        alt= {item.name}
                                        />
                                    </div>
                                    <div id="latest_stuff"  className='popupText'>
                                        {item.name}

                                    </div>

                                </div>
                                );
                            })}
            </div>
        </div>
    </>
    )
}
export default Skills