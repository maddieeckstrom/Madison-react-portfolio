import culinaryimage from '../assets/images/culinaryPic.png';
import weatherimage from '../assets/images/weatherPic.png';
import quizimage from '../assets/images/quizPic.png';
import moviemiximage from '../assets/images/moviemixPic.png';
import portfolioimage from '../assets/images/firstportfolioPic.png';
import calendarimage from '../assets/images/calendarPic.png';

const projects = [
    {
        title: "culinary connect",
        image: culinaryimage,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "weather forecast",
        image: weatherimage,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "api quiz",
        image: quizimage,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "movie mix & sip",
        image: moviemiximage,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "my first portfolio",
        image: portfolioimage,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "calendar library",
        image: calendarimage,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },

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
