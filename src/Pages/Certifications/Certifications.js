import React, { useState, useEffect } from "react";
import './Certifications.css'
import { Link } from "react-router-dom";

function Certifications(props){
    const {theme} = props;
    const [certificates, setCertificates] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() => {
        const initialShuffledCertificates = shuffle([
            [require('./certifications/Python_springboard.jpg'),'pys','https://drive.google.com/file/d/1SK91Vvqet-IwdrrXUId8RvKHQZFWrOhO/view?usp=sharing'],
            [require('./certifications/java_hackerrank.jpg'),'jh','https://www.hackerrank.com/certificates/d4b8c34178ee'],
            [require('./certifications/java_springboard.jpg'),'js','https://drive.google.com/file/d/1oldjHjuGIKZkIeZfbihnv7CDWDHePZ7o/view?usp=sharing'],
            [require('./certifications/psb_hackerrank.jpg'),'psbh','https://www.hackerrank.com/certificates/2986fb07d1b4'],
            [require('./certifications/psi_hackerrank.jpg'),'psih','https://www.hackerrank.com/certificates/b5d1db51bcc3'],
            [require('./certifications/python_hackerrank.jpg'),'ph','https://www.hackerrank.com/certificates/2118e28769ac'],
            [require('./certifications/pythonspringboard.jpg'),'ps','https://drive.google.com/file/d/1HHry10vMmt6lQ2d81rpTsegryG64VREK/view?usp=sharing'],
            [require('./certifications/SI.jpg'),'si','https://smartinterviews.in/certificate/410ade25'],
            [require('./certifications/java_nptel.jpg'),'jn','https://drive.google.com/file/d/1Bwth9OtEKV0E1hOG6KEPmlWsYsPnucwV/view?usp=sharing'],
            [require('./certifications/python_nptel.jpg'),'pn','https://drive.google.com/file/d/1zkXS5THkMqH-CI6W4-EsBTDXa813g7aq/view?usp=sharing'],
        ]);
        setCertificates(initialShuffledCertificates);
        setCount(initialShuffledCertificates.slice(0,4));
    }, []);

    const handleClick = () => {
        count.length > 4 ? setCount(count.slice(0,4)) : setCount(certificates);
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
          ];
        }
        return array;
    }
    
    return(
        <div className={theme === "dark" ? "certificationscontainer certifications_light" : 'certificationscontainer'}>
            <h1 className="certificationsheading">certifications</h1>
            <header className="certificates">
                {count.map((images, index) => (
                    <div key={index} className="newflip-box">
                        <div className={"newflip-box-inner " + images[1]}>
                            <div className="newflip-box-front ">
                                <img src={images[0]} alt="Sorry" className={images[1]}></img>
                            </div>
                            <div className="newflip-box-back">
                                <img src={images[0]} alt="Certificate"></img>
                                <label>Go through the below button to view certificate</label>
                                <a href={images[2]} className="linktag" target="_blank" rel="noopener noreferrer">Click Here</a>
                            </div>
                        </div>
                    </div>
                ))}
            </header>
            <footer>
                <button className="btn btn-5" style={{ color: theme === 'dark' ? 'black' : 'white', outlineColor: theme === 'dark' ? 'black' : '' }} onClick={handleClick}>
                    {count.length > 4 ? 'Show Less' : 'Show More'}
                </button>
            </footer>
        </div>
    )
}

export default Certifications;
