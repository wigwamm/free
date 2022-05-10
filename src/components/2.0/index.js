import React, { useEffect } from 'react';
import Count from './countdown/countdown';
import Background from './format/background';
import Logo from './format/logo';
import "./index.sass"

function Free2(props) {
    useEffect(() => {
        document.getElementById("container").style.height = window.innerHeight + 'px';
        window.addEventListener("resize", () => {
            document.getElementById("container").style.height = window.innerHeight + 'px';
        })

        return () => {
            window.removeEventListener("resize", () => {})
        }
    }, [])

    return (
        <div id="main">
            <Background />

            <div id="container">
                <div id="body">
                    <div className='logo_container'>
                        <Logo />
                        <div className='button'>
                            Get your freebie
                        </div>
                    </div>
                </div>

                <div id="countdown">
                    <div id="title">
                        Next freebie in...
                    </div>
                    <Count />
                </div>
            </div>
        </div>
    );
}

export default Free2;