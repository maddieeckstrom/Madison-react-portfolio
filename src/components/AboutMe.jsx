import aboutmeimage from '../assets/images/exampleaboutme.jpg';

export default function AboutMe() {
    return (
        <section className="sections">
            <p>Aloha! My name is Madison Eckstrom. I am a web developer specializing in front-end development. I am located on the island of O'ahu, Hawai'i.</p>
            <img className="aboutmeImage" src={aboutmeimage}/>
        </section>
    )
}