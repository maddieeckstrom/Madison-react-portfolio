import aboutmeimage from '../assets/images/exampleaboutme.jpg';
import aboutmeavatar from '../assets/images/avatar.png';

export default function AboutMe() {
    return (
        <section className="sections">
            <div>
                <p className="aboutmeP"> Aloha! My name is Madison Eckstrom. I am a web developer specializing in front-end development located on the island of O'ahu, Hawai'i. My skills include HTML, CSS, JavaScript, API, React, and more. Outside of work you'll find me looking for good movies to watch, enjoying some sunshine, or cooking a gratifying meal. I have a positive and passionate work ethic and hope to continually impact others through my leadership and communication. I look forward to connecting with you!</p>
                <img className="aboutmeAvatar" src={aboutmeavatar}/>
            </div>
            <img className="aboutmeImage" src={aboutmeimage}/>
        </section>
    )
}