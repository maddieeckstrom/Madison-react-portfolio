import culinaryimage from '../assets/images/culinaryPic.png';
import weatherimage from '../assets/images/weatherPic.png';
import quizimage from '../assets/images/quizPic.png';
import moviemiximage from '../assets/images/moviemixPic.png';
import portfolioimage from '../assets/images/firstportfolioPic.png';
import skillmagnetimage from '../assets/images/skillmagnet.png';

const projects = [
    {
        title: "Culinary Connect",
        image: culinaryimage,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "SkillMagnet",
        image: skillmagnetimage,
        github: "https://github.com/quin-tech/full-stack-service-app",
        site: "https://full-stack-service-app.onrender.com/"
    },
    {
        title: "Timed Quiz",
        image: quizimage,
        github: "https://github.com/maddieeckstrom/API-timed-coding-quiz",
        site: "https://maddieeckstrom.github.io/API-timed-coding-quiz/"
    },
    {
        title: "Movie Mix & Sip",
        image: moviemiximage,
        github: "https://github.com/ucb-allstars-project-1/movie-cocktail-combo",
        site: "https://ucb-allstars-project-1.github.io/movie-cocktail-combo/"
    },
    {
        title: "My First Portfolio",
        image: portfolioimage,
        github: "https://github.com/maddieeckstrom/Madison_super_portfolio",
        site: "https://maddieeckstrom.github.io/Madison_super_portfolio/"
    },
    {
        title: "Weather Forecast",
        image: weatherimage,
        github: "https://github.com/maddieeckstrom/weather-forecast-dashboard",
        site: "https://maddieeckstrom.github.io/weather-forecast-dashboard//"
    }
]



export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolioGrid">
                {projects.map((project) => (
                    <div className="portfolioDiv" key={project.title}>
                        <h2>{project.title}</h2>
                        <img className="portfolioCards" src={project.image} alt="culinary connect"/>
                        <div className="portfolioLinks">
                            <a href={project.github}>GitHub</a>
                            <a href={project.site}>Live Site</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
