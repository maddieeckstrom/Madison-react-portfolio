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
                    <p>I am a Front End Developer who was trained in full stack web development. I am skilled in HTML, CSS,
JavaScript, REST API, React, and much more. I have an interest in design and I am looking for work as a
Front End Developer or Engineer. I have a positive and passionate work ethic and hope to continually impact others through my leadership and communication. I look forward to connecting with you,</p>
                    <h3>Aloha!</h3>
                </div>
                <div className="myImgBox">
                    <img className="MadisonImage" src={MadisonImage} alt="Madison image"/>
                    <img className="palm" src={Palm} alt="Palm image"></img>
                </div>
            </div>
        </section>
    )
}