import React, { useEffect } from 'react';
import history from '../../history';
import Count from './countdown/countdown';
import Background from './format/background';
import Logo from './format/logo';
import "./index.sass"

function Free2(props) {
    useEffect(() => {
        document.getElementById("container").style.height = window.innerHeight + 'px';
        window.addEventListener("resize", () => {
            if (document.activeElement.id !== "email" && document.activeElement.id !== "number") document.getElementById("container").style.height = window.innerHeight + 'px';
        })

        return () => {
            window.removeEventListener("resize", () => { })
        }
    }, [])

    function getOrSign() {
        try {
            let uuid = localStorage.getItem("free:uuid")
            if (!uuid) throw new Error("No UUID available in localStorage")

        } catch (err) {
            history.push("/signup")
        }
    }

    return (
        <div id="main" className='v2'>
            <Background />

            <div id="container">
                <div id="body">
                    <div className='logo_container'>
                        <Logo />
                        <div className='button' onClick={getOrSign}>
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