import weatherimage from '../assets/images/weatherPic.png';
import culinaryimage from '../assets/images/culinaryPic.png';
import quizimage from '../assets/images/quizPic.png';
import moviemiximage from '../assets/images/moviemixPic.png';
import portfolioimage from '../assets/images/firstportfolioPic.png';
import calendarimage from '../assets/images/calendarPic.png';

export default function Portfolio() {
    return (
        <section className="sectionsP">
            <div className="sectionP">
                <a href="https://github.com/maddieeckstrom/weather-forecast-dashboard"><img className="portfolioCards" src={weatherimage}/></a>
                <a href="https://github.com/quar-tech/mvc-recipe-sharing"><img className="portfolioCards" src={culinaryimage} alt="culinary connect"/></a>
            </div>
            <div className="sectionP">
                <a href="https://github.com/maddieeckstrom/API-timed-coding-quiz"><img className="portfolioCards" src={quizimage}/></a>
                <a href="https://github.com/ucb-allstars-project-1/movie-cocktail-combo"><img className="portfolioCards" src={moviemiximage}/></a>
            </div>
            <div className="sectionP">
                <a href="https://github.com/maddieeckstrom/Madison_super_portfolio"><img className="portfolioCards" src={portfolioimage}/></a>
                <a href="https://github.com/maddieeckstrom/Calendar-library-application"><img className="portfolioCards" src={calendarimage}/></a>
            </div>
        </section>
    )
}