import React, { useEffect, useState } from "react";
import './Home.css'
import { Link } from "react-router-dom";


function Home(props){
    const {theme} = props;
    const s1 = 'Web Developer';
    const s2 = 'Free Lancer';
    const [text,setText] = useState('');
    const [ind,setInd] = useState(0);
    const [cur,setCur] = useState(s1);
    const [flag,setFlag] = useState(true);
    const[time,setTime] = useState(250);
    const [flag2,setFlag2] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          if (ind < cur.length && flag) {
            setTime(250);
            setText(text + cur[ind]);
            setInd(ind + 1);
            setFlag2(true)
          }
          else {
            setFlag(false)
            if(ind>=0){
                setTime(50)
                
                if(text.length===cur.length && flag2){
                    setFlag2(!flag2)
                    setTime(2000);
                }
                else{
                    setText(text.slice(0,-1))
                    setInd(ind-1);
                }
            }
            else{
                setInd(0)
                setFlag(true)
                setCur(cur===s1?s2:s1)
            }
            
          }
        }, time);
      
        return () => clearTimeout(timer);
      }, [ind, cur, flag]);

    return(
        <div className="homecontainer">
            <div className="bgimage" style={{backgroundImage:theme==='dark'?'url(../../public/images/theme/light_intro.webp)':''}}></div>
            <header style={{width:"auto", marginLeft:"5%"}} className="bg-text">
                    <h1 className="intro">Hi, I'm <span className="name"><Link to="https://www.linkedin.com/in/dhanekula-yaswanth/" target="_blank">Dhanekula Yaswanth</Link></span></h1>
                    <i className="namedescription">{text}<span/></i>
                    <div className="CodingProfiles">
                        <Link to="https://www.hackerrank.com/yaswanth602" target="blank" style={{textDecoration: 'none'}}>
                            <div className="HackerRank coding"></div>
                        </Link>
                        <Link to="https://www.codechef.com/users/yaswanth9802" target="blank" style={{textDecoration: 'none'}}>
                            <div className="CodeChef coding"></div>
                        </Link>
                        <Link to="https://codeforces.com/profile/yaswanth9802" target="blank" style={{textDecoration: 'none'}}>
                            <div className="Codeforces coding"></div>
                        </Link>
                        <Link to="https://leetcode.com/yaswanth602/" target="blank" style={{textDecoration: 'none'}}>
                            <div className="Leetcode coding" style={{backgroundImage:theme==="dark"?'url(../../images/images/LeetCode_logo.png)':''}}></div>
                        </Link>
                    </div>
                    <div className="aboutbutton">
                        <a href="#about"><span>Know more</span></a>
                    </div>
            </header>
        </div>
    )
}
export default Home;