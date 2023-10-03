import React, { useState } from "react";
import './Education.css';
import { Link } from "react-router-dom";


function Education(props){
    const {theme} = props;
    const [Education,setEducation] = useState(true);

    const handleRadioChange = () => {
        setEducation(!Education)
    }

    return(
        <div className={theme==="dark"?'Edu_light':"EduContainer"}>
            <h1 className={!Education?'Educationheading':'Experienceheading'}>{Education?'Education':'Internships'}</h1>
            <div style={{height:"max-content"}}>
                <div className="blockChanger" >
                    <input type="radio" name="education" id="blockchanger1" onChange={handleRadioChange}/>
                    <input type="radio" name="education" id="blockchanger2" onChange={handleRadioChange}/>
                    <header className="labels">
                        <label htmlFor="blockchanger1">Education</label>
                        <label htmlFor="blockchanger2" className="label2">Internships</label>
                    </header>
                    <span style={{background:theme==="dark"?"":'linear-gradient(to right,rgba(124, 124, 255, 0.447),rgba(206, 161, 248, 0.589))'}}></span>
                </div>
            </div>

            <header className="eduandexp">
                {
                    Education?
                        <div className="education">
                            <div  className="edublocks">
                                <h1 className="title">PRASAD V POTLURI SIDDHARTHA INSTITUTE OF TECHNOLOGY</h1>
                                    <label className="address">kanuru, Vijayawada</label>
                                    <label>BACHELOR DEGREE OF INFORMATION TECHNOLOGY</label>
                                    <label>Batch: 2020-2024</label>
                                    <label>CGPA: 8.6</label>
                            </div>
                            <div className="edublocks">
                                <h1 className="title">Sri Bhavishya Junior College</h1>
                                    <label className="address">M.G Road, Vijayawada</label>
                                    <label>Intermediate Education</label>
                                    <label>Batch:2018-2020</label>
                                    <label>CGPA: 9.5</label>
                            </div>
                            <div className="edublocks">
                                <h1 className="title">R.K VidhyaniKethan</h1>
                                    <label className="address">Yanamalakuduru, Vijayawada</label>
                                    <label>Secondary Education</label>
                                    <label>Batch: 2017-2018</label>
                                    <label>CGPA: 9.8</label>
                            </div>
                        </div>
                    :
                        <div className="experience">
                            <div className="internship codeclause" style={{backgroundColor:theme==="dark"?'rgba(255, 255, 255, 0.645)':''}}>
                                <div className="interncover">
                                    <img alt="sorry!" className="internimg" src={require('./CodeClause.png')}/>
                                    <label className="interntitle">Web Development Intern</label>
                                </div>
                                <div className="internbody">
                                    <label>Web Development Intern</label>
                                    <p>
                                        Certified in web development through CodeClause,
                                        a comprehensive and reputable online platform. This
                                        certification signifies my proficiency in designing and
                                        creating dynamic websites and web applications.
                                        Through this I gained expertise in front-end and back-
                                        end technologies, responsive design, user experience
                                        optimization, and effective coding practices.
                                    </p>
                                    <div>
                                        <Link to='https://drive.google.com/file/d/1vTN7aEdrFAq_UpFDN-bAqwjyGPEdx7Li/view?usp=sharing' target="_blank" className="internbtn">
                                            <button >
                                                Certificate
                                            </button>
                                        </Link>
                                        <Link to='https://drive.google.com/file/d/1FYDElDuXcXTM2X5Bz3oDdYXcvkWSzR4x/view?usp=sharing' target="_blank" className="internbtn">
                                            <button>
                                                LOR
                                            </button>
                                        </Link>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className="internship amazon" style={{backgroundColor:theme==="dark"?'rgba(255, 255, 255, 0.645)':''}}>
                                <div className="interncover" >
                                    <img alt="sorry!" className="internimg" src={require('./amazon.png')}/>
                                    <label className="interntitle">Amzon ML Summer School Intern</label>
                                </div>
                                <div className="internbody">
                                    <label>Amzon ML Summer School Intern</label>
                                    <p>
                                        Gained valuable insights into 
                                        the practical applications of ML, including data analysis, 
                                        pattern recognition, and predictive modelling. Developed a 
                                        strong foundation in machine learning concepts and 
                                        techniques through hands-on exercises and expert-led 
                                        sessions. Acquired the skills to apply ML principles to real
                                        world problems, enhancing my proficiency in data-driven 
                                        decision-making.
                                    </p>
                                    <div>
                                    <Link to='' target="_blank" className="internbtn">
                                            <button className="interncertificate" disabled title="OnGoing">
                                                Certificate
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            <div className="internship AIML" style={{backgroundColor:theme==="dark"?'rgba(255, 255, 255, 0.645)':''}}>
                                <div className="interncover" >
                                    <img alt="sorry!" className="internimg" src={require('./aicte.png')}/>
                                    <label className="interntitle">AI&ML</label>
                                </div>
                                <div className="internbody">
                                    <label>AI & ML</label>
                                    <p>
                                    Completing an internship in AI & ML at AICTE Eduskils 
                                    was an illuminating experience. The program's comprehensive 
                                    curriculum and practical approach provided me with invaluable 
                                    insights into cutting-edge technologies. I am grateful 
                                    for the opportunity to have honed my abilities in this dynamic field, and 
                                    I look forward to applying these newfound skills in real-world applications.
                                    </p>
                                    <div>
                                    <Link to='https://drive.google.com/file/d/1CQgf7gWNwJTafIeL8p5riIoonBkR9Ht1/view?usp=sharing' target="_blank" className="internbtn">
                                            <button className="interncertificate">
                                                Certificate
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                }
            </header>
        </div>
    )
}

export default Education;