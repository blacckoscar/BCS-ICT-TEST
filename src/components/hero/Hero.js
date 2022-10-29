import React, { useEffect, useRef, useState } from 'react'
// import MainVideo from '../../assets/video.mp4'
import MainVideo from '../../assets/video5test.mp4'
// import MainVideo from '../../assets/video4test.mp4'
// import MainVideo from '../../assets/space.mp4'
import Navbar from '../navbar/Navbar';
import './Hero.css'

const hero = () => {

    // const [key, setKey] = useState(0)
    // const Video = [
    //     require("../../assets/video5test.mp4"),
    //     require("../../assets/video.mp4"),
    //     require("../../assets/space.mp4")
    // ]
    // // const [isVideoplaying] = useState(true);
    // const videoRef = useRef();
    // const [vidKey] = useState(0)
    // useEffect(() => {
    //     if(vidKey === 0 && videoRef.current) {
    //         videoRef.current.play()
    //     }
    // })
    return (
        <div className='hero'>
            {/* <video
            style={{display: vidKey === 1 ? "none" : "block"}}
            id='video'
            ref={videoRef}
            src={Video[key]}
            autoPlay
            muted
            onEnded={() => {
                if(key !== 2) {
                    setKey(key + 1)
                } else if (key === 2){
                    setKey(0)
                }
            }}
            /> */}
            {/* <video autoPlay loop muted id='video' >
                <source src={MainVideo} type='video/mp4'/>
            </video> */}




            {/* I finally use this code below because the up one as an issue when it's been 
            hosted it dosent play on Mobile devices (IOS) */}
            <div
          dangerouslySetInnerHTML={{
            __html: `<video id='video' autoplay loop muted playsinline>
            <source src=${MainVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>`,
                }}
        />
        <Navbar />
            <div className="hero-text">
                <h1>Decentralized</h1>
                <h1><span className="blue">Social Media </span> Protocol</h1>
                <p>Guaranteed share liquidity UNITS for billions of users any where in the universe. Wait! Are you even in the UNIVERSE ?</p>
                <div className="btn-group">
                    <button className="btn"> App Store</button>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    <button className="btn btn-outline">Google Play</button>
                </div>
            </div>
            {/* <div style={{bottom: 20}} className="bottom-text">
                <h2>Total Volume Made By Users: $42,104,783,662.47</h2>
            </div> */}
        </div>
    )
}

export default hero
