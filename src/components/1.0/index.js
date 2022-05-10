import React, { useEffect } from 'react';
import About from './about/about';
import Footer from './footer/footer';
import CTA from './format/cta';
import Logo from './format/logo';
import Wave from './format/wave';
import SignUp from './signup/signup';
import "./index.sass"

export default function Index(props) {
    useEffect(() => {
        document.getElementById("main").addEventListener("scroll", function myFunction() {
            var scrolltotop = document.getElementById("main").scrollTop
            var target = document.getElementById("slow")
            var yvalue = scrolltotop * 0.5
            target.style.top = "calc(0px + " + yvalue + "px)"
        })
    }, [])

    return (
        <div id="main" className='v1'>
            <Wave />

            <div id="main_logo">
                <div style={{ width: "450px", margin: "15px auto", maxWidth: "calc(100% - 30px)" }}>
                    <Logo />
                    <div id="scroll">
                        Scroll on
                    </div>
                </div>
            </div>

            <div id="body">
                <div className='section white slow'>
                    <div id="slow">
                        <CTA />
                    </div>
                </div>

                <svg id="wave_up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#122010" fill-opacity="1" d="M0,256L15,224C30,192,60,128,90,128C120,128,150,192,180,197.3C210,203,240,149,270,122.7C300,96,330,96,360,112C390,128,420,160,450,149.3C480,139,510,85,540,53.3C570,21,600,11,630,32C660,53,690,107,720,106.7C750,107,780,53,810,80C840,107,870,213,900,224C930,235,960,149,990,101.3C1020,53,1050,43,1080,85.3C1110,128,1140,224,1170,256C1200,288,1230,256,1260,218.7C1290,181,1320,139,1350,112C1380,85,1410,75,1425,69.3L1440,64L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path>
                </svg>

                <div className='section green'>
                    <SignUp />
                    <About />
                </div>

                <svg id="wave_down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#122010" fill-opacity="1" d="M0,192L13.3,202.7C26.7,213,53,235,80,240C106.7,245,133,235,160,202.7C186.7,171,213,117,240,96C266.7,75,293,85,320,112C346.7,139,373,181,400,186.7C426.7,192,453,160,480,128C506.7,96,533,64,560,90.7C586.7,117,613,203,640,224C666.7,245,693,203,720,197.3C746.7,192,773,224,800,250.7C826.7,277,853,299,880,266.7C906.7,235,933,149,960,133.3C986.7,117,1013,171,1040,192C1066.7,213,1093,203,1120,181.3C1146.7,160,1173,128,1200,149.3C1226.7,171,1253,245,1280,240C1306.7,235,1333,149,1360,144C1386.7,139,1413,213,1427,250.7L1440,288L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"></path>
                </svg>
            </div>

            <Footer />
        </div>
    );
}