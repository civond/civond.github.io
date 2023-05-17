import './index.scss'
import { Displaydata } from './Displaydata'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { act } from 'react-dom/test-utils'

const Display = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [appState, changeState] = useState({
        activeObject: {index: 0}

    })

    var activeIndex = appState.activeObject.index;

    function toggleActive(index) {
        changeState({...appState, activeObject: {index}})
        console.log('changed usestate')
    }


    function toggleActiveStyles(item,index) {
    
        if (item === activeIndex) {
            console.log('index same: ', item)
            return "active-button-wrapper"
        } else {
            console.log('index different: ', item)
            return "button-wrapper"
        }
    }

    return (
        <>
            <div className='project-text'>
                
                {Displaydata.map((item, index) => {

                    return (
                        <>
                            
                                <div 
                                    className={toggleActiveStyles(index)}
                                    onClick={() => {setTabIndex(index);toggleActive(index);}}>
                                        {item.name}    
                                </div>
                                       
                        </>
                    );   
                })}
            </div>
            
            <div className='project-display'>
                
                <h2><a target = "_blank" rel="noreferrer" href={Displaydata[tabIndex].link}>
                    {Displaydata[tabIndex].name} <FontAwesomeIcon icon={faLink}/>
                    </a>
                </h2> 
                <div>
                    {Displaydata[tabIndex].content}
                </div> <br/>
                <div className='img-container'>
                    <img src={Displaydata[tabIndex].image} alt='proj_image'/>
                </div>
            </div>
   
        </>
    )
}

export default Display