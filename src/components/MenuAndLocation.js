import React from 'react'
import menu from '../images/katrin-menu.jpg'
import "./MenuAndLocation.scss"

const MenuAndLocation = () => {
    return (
        <div>
            <header className="MAL">
                <div className="flex-container w-container">
                    <div className="MAL-img">
                        <img className="menu" src={menu} alt="" />
                    </div>
                    <div>
                        <h2 className="MAL-header"> <u>Menu and Locations</u></h2>
                        <p className="MAL-para">
                            <strong>Monday/Tuesday</strong> - CLOSED
                            <br/>
                            <strong>Wednesday</strong> - Mikkeller Brewing (Miramar) - 2 - 7pm
                            <br/>
                            <strong>Thursday</strong> - SD Blood Bank 10:30a - 2pm <strong>|</strong> - Bitter Brothers Brewing 3 - 8pm
                            <br/>
                            <strong>Friday</strong> - SD Blood Bank 10:30a - 3pm <strong>|</strong> - Thorn Brewing 4 - 8pm
                            <br/>
                            <strong>Saturday</strong> - Lachkey Brewing 12 - 6pm
                            <br/>
                            <strong>Sunday</strong> - Bitter Brothers Brewing 12 - 5pm
                            <br/>
                            <br/>
                            <strong><u>Schedule is subject to change for booked events. Please reference our events list or social media for information.</u></strong></p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default MenuAndLocation
