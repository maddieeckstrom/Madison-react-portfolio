import { useEffect } from 'react';
import MadisonImage from '../assets/images/MadisonIMG.png';
import Palm from '../assets/images/palmtree.png'

export default function AboutMe() {

    useEffect(() => {
        const preloadImages = [MadisonImage];
        preloadImages.forEach((image) => {
            new Image().src = image;
        });
    }, []);
    
    return (
        <section className="aboutmeSection">
            <div className="aboutmeContainer">
                <div className="textBox">
                    <div className="textHeading">
                        <h1>Hello,</h1>
                        <h1>I'm Madison!</h1>
                    </div>
                    <p>I am a web developer specializing in front-end development located on the island of O'ahu, Hawai'i. My skills include HTML, CSS, JavaScript, API, React, and more. I have a positive and passionate work ethic and hope to continually impact others through my leadership and communication. I look forward to connecting with you,</p>
                    <h3>Aloha!</h3>
                </div>
                <div className="myImgBox">
                    <img className="MadisonImage" src={MadisonImage}/>
                    <img className="palm" src={Palm}></img>
                </div>
            </div>
            {/* <img className="palm" src={Palm}></img> */}
        </section>
    )
}