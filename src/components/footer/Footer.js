import React from 'react'
import { 
    // AiOutlineFacebook,
     AiOutlineGoogle,
    //   AiOutlineInstagram,
      AiOutlineTwitter, 
    //   AiOutlineWhatsApp, 
    //   AiOutlineYoutube,
     } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="col">
                    <h4>Products</h4>
                    <p>App</p>
                    <p>Analytics</p>
                    <p>Token Lists</p>
                    <p>Defi</p>
                </div>
                <div className="col">
                    <h4>Developers</h4>
                    <p>App</p>
                    <p>Analytics</p>
                    <p>Token Lists</p>
                    <p>Defi</p>
                </div>
                <div className="col">
                    <h4>Governance</h4>
                    <p>App</p>
                    <p>Analytics</p>
                    <p>Token Lists</p>
                    <p>Defi</p>
                </div>
                <div className="col">
                    <h4>Community</h4>
                    <p>App</p>
                    <p>Analytics</p>
                    <p>Token Lists</p>
                    <p>Defi</p>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <p>App</p>
                    <p>Analytics</p>
                    <p>Token Lists</p>
                    <p>Defi</p>
                </div>
            </div>

            <p>Copyright© 2022 <span style={{color: '#00d8ff'}}>UNIVERSE</span> Inc All rights reserved</p>
            <div>
            {/* <AiOutlineInstagram className='icon' style={{padding: 20}} /> */}
            {/* <AiOutlineYoutube className='icon' /> */}
            <AiOutlineTwitter className='icon' />
            {/* <AiOutlineFacebook className='icon' /> */}
            {/* <AiOutlineWhatsApp className='icon' /> */}
            <AiOutlineGoogle className='icon' />
            </div>
        </div>
    )
}

export default Footer
