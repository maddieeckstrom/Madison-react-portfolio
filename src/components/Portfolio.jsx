import culinaryimage from '../assets/images/culinaryPic.png';
import weatherimage from '../assets/images/weatherPic.png';
import quizimage from '../assets/images/quizPic.png';
import moviemiximage from '../assets/images/moviemixPic.png';
import portfolioimage from '../assets/images/firstportfolioPic.png';
import calendarimage from '../assets/images/calendarPic.png';



export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolioRow">
                <div className="portfolioDiv">
                    <h2>culinary connect</h2>
                    <img className="portfolioCards" src={culinaryimage} alt="culinary connect"/>
                    <div className="portfolioLinks">
                        <a href="https://github.com/quar-tech/mvc-recipe-sharing">GitHub</a>
                        <a href="https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/">Live Site</a>
                    </div>
                </div>
                <div className="portfolioDiv">
                        <h2>weather forecast</h2>
                        <img className="portfolioCards" src={weatherimage}/>
                        <div className="portfolioLinks">
                            <a href="https://github.com/maddieeckstrom/weather-forecast-dashboard">GitHub</a>
                            <a href="https://maddieeckstrom.github.io/weather-forecast-dashboard/">Live Site</a>
                        </div>
                </div>
            </div>
            <div className="portfolioRow">
                <div className="portfolioDiv">
                    <h2>api quiz</h2>
                    <img className="portfolioCards" src={quizimage}/>
                    <div className="portfolioLinks">
                        <a href="https://github.com/maddieeckstrom/API-timed-coding-quiz">GitHub</a>
                        <a href="https://maddieeckstrom.github.io/API-timed-coding-quiz/">Live Site</a>
                    </div>
                </div>
                <div className="portfolioDiv">
                    <h2>movie mix & sip</h2>
                    <img className="portfolioCards" src={moviemiximage}/>
                    <div className="portfolioLinks">
                        <a href="https://github.com/ucb-allstars-project-1/movie-cocktail-combo">GitHub</a>
                        <a href="https://ucb-allstars-project-1.github.io/movie-cocktail-combo/">Live Site</a>
                    </div>
                </div>
            </div>
            <div className="portfolioRow">
                <div className="portfolioDiv">
                    <h2>my first portfolio</h2>
                    <img className="portfolioCards" src={portfolioimage}/>
                    <div className="portfolioLinks">
                        <a href="https://github.com/maddieeckstrom/Madison_super_portfolio">GitHub</a>
                        <a href="https://maddieeckstrom.github.io/Madison_super_portfolio/">Live Site</a>
                    </div>
                </div>
                <div className="portfolioDiv">
                    <h2>calendar library</h2>
                    <img className="portfolioCards" src={calendarimage}/>
                    <div className="portfolioLinks">
                        <a href="https://github.com/maddieeckstrom/Calendar-library-application">GitHub</a>
                        <a href="https://maddieeckstrom.github.io/Calendar-library-application/">Live Site</a>
                    </div>
                </div>
            </div>
        </section>
    )
}