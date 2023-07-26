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
            <h1 className={!Education?'Educationheading':'Experienceheading'}>{Education?'Education':'Experience'}</h1>
            <div style={{height:"max-content"}}>
                <div className="blockChanger" >
                    <input type="radio" name="education" id="blockchanger1" onChange={handleRadioChange}/>
                    <input type="radio" name="education" id="blockchanger2" onChange={handleRadioChange}/>
                    <header className="labels">
                        <label htmlFor="blockchanger1">Education</label>
                        <label htmlFor="blockchanger2" className="label2">Experience</label>
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
                            <div className="flip-box">
                                <div className="flip-box-front" style={{background:theme==="dark"?"white":'#1e1e1e'}}>
                                    <h1 className="heading interntitle">Robotic Process Animation </h1>
                                    <h1 className="heading">(RPA)</h1>
                                    <label className="org">Eduskills</label>
                                    <p className="description">During my online internship with Eduskills Platform, I had the opportunity to engage 
                                        in a comprehensive Robotic Process Animation program that provided some basic knowledge in the field. 
                                        This internship allowed me to develop knowledge
                                        on utilizing robotic process automation (RPA) tools and techniques to automate repetitive 
                                        tasks and streamline business processes. Throughout the internship, I gained an understanding 
                                        of the fundamentals of RPA and its significance in today's digital landscape.
                                    </p>
                                </div>
                                <div className="flip-box-back1">
                                    <Link to="https://drive.google.com/file/d/1Y_-L9prGTssr9etMLpSNEqNc2tJmxbxO/view?usp=sharing">
                                        <img src={require('./RPA.jpg')} alt="RPA" className="interncertificate"></img>
                                    </Link>
                                </div>
                                <div className="flip-box-back2">
                                    {/* <img src='../../../images/certifications/RPA.jpg' alt="RPA" className="interncertificate"></img> */}
                                </div>
                                <div className="flip-box-back3">
                                </div>
                            </div>
                            <div className="flip-box">
                                <div className="flip-box-front" style={{background:theme==="dark"?"white":'#1e1e1e'}}>
                                    <h1 className="heading interntitle">Artificial Intelligence </h1>
                                    <h1 className="heading">&</h1>
                                    <h1 className="heading">Machine Learning</h1>
                                    
                                    <label className="org">Eduskills</label>
                                    <p className="description"> This comprehensive online internship provided 
                                        me with a solid foundation in Artificial Intelligence (AI) and Machine Learning (ML) 
                                        techniques, allowing me to explore the vast potential of these cutting-edge technologies.
                                        Throughout the internship, I delved into various AI and ML concepts, algorithms, and tools, 
                                        gaining practical experience in developing intelligent systems and leveraging data-driven 
                                        approaches to solve complex problems.
                                    </p>
                                </div>
                                <div className="flip-box-back1">
                                    <Link to='https://drive.google.com/file/d/1CQgf7gWNwJTafIeL8p5riIoonBkR9Ht1/view?usp=sharing' target="_blank">
                                        <img src={require('./AI&ML.jpg')} alt="RPA" className="interncertificate"></img>
                                    </Link>
                                </div>
                                <div className="flip-box-back2">
                                </div>
                                <div className="flip-box-back3">
                                </div>
                            </div>
                        </div>
                }
            </header>
        </div>
    )
}

export default Education;