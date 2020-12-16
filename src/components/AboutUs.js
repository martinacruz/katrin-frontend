import React from 'react'
import elKatrin from '../images/elKatrin.jpg'
import './AboutUs.scss'

const AboutUs = () => {
    return (
        <div>
            <header className="about-us">
                <div className="flex-container w-container">
                    <div>
                        <h2 className="about-header"> About Us</h2>
                        <p className="about-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Vitae tortor condimentum lacinia quis. Cursus metus aliquam eleifend mi in nulla posuere. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Urna duis convallis convallis tellus id interdum. Sit amet consectetur adipiscing elit pellentesque habitant. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Nisl purus in mollis nunc sed id semper. Egestas purus viverra accumsan in nisl nisi. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Urna molestie at elementum eu facilisis sed odio morbi. Leo duis ut diam quam nulla porttitor massa. Facilisis leo vel fringilla est ullamcorper eget. Amet volutpat consequat mauris nunc congue nisi.</p>
                    </div>
                    <div className="about-img">
                        <img className="elKatrin" src={ elKatrin } sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 295.625px, 443.796875px" alt=""/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default AboutUs
