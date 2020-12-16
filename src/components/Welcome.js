import React from 'react'
import WelcomeImg from '../images/placeholder-welcome.jpeg'
import './Welcome.scss'
const Welcome = () => {
    return (
        <div>
            <img className = "welcome-img" src={ WelcomeImg } alt=""/>
        </div>
    )
}

export default Welcome
