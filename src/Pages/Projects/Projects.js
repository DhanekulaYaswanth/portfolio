import React from "react";
import './Projects.css'
import { Link } from "react-router-dom";
function Projects(props){
    const {theme} = props;
    return(
        <div className={theme==='dark'?"projectContainer projectlight":"projectContainer"}>
                <h2 className="projecttitle">Projects</h2>
                <div className="projects">
                    <div className="projectblock">
                        <video autoPlay muted loop>
                            <source src={require('./videos/clock.mp4')}/>
                        </video>
                        <div className="aboutproject">
                            <p className="projectdescription">
                                A web application that displays the current
                                time in digital and analog format and can be configured
                                to display the time in user preferable format. This clock
                                application is responsive and accessible from any
                                browser. This application also equipped with a variety of
                                features like stopwatch and timer.
                            </p>
                            <div className="projectlinks">
                                <Link to="https://github.com/DhanekulaYaswanth/clock" target="_blank" className="links from-top">View Code</Link>
                                <Link to="https://dhanekulayaswanth.github.io/clock/" target="_blank" className="links">View Demo</Link>
                            </div>
                        </div>
                    </div>

                    <div className="projectblock">
                        <video autoPlay muted loop>
                            <source src={require('./videos/to_do_app.mp4')}/>
                        </video>
                        <div className="aboutproject">
                            <p className="projectdescription" style={{color:"black"}}>
                                Developed a simple Todo list application that allows the
                                users to track their tasks and stay organized. This
                                application is easy to use and can be accessed through
                                any device and facilitates the user to prioritize and
                                modify the tasks.
                            </p>
                            <div className="projectlinks">
                                <Link to="https://github.com/DhanekulaYaswanth/to-do-app" target="_blank" className="links from-top" style={{color:"black"}}>View Code</Link>
                                <Link to="https://dhanekulayaswanth.github.io/to-do-app/" target="_blank" className="links" style={{color:"black"}}>View Demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Projects;