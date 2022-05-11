import React, { useEffect } from 'react';
import Count from '../countdown/countdown';
import Background from '../format/background';
import Logo from '../format/logo';
import Form from './form';

function SignUp(props) {
    useEffect(() => {
        document.getElementById("container").style.height = window.innerHeight + 'px';
        window.addEventListener("resize", () => {
            if(document.activeElement.prop('type') === 'text') document.getElementById("container").style.height = window.innerHeight + 'px';
        })

        return () => {
            window.removeEventListener("resize", () => { })
        }
    }, [])

    return (
        <div id="signup">
            <Background />

            <div id="container">
                <div id="body">
                    <div className='logo_container'>
                        <div style={{ width: "200px", margin: "auto" }}>
                            <Logo />
                        </div>
                        <Form />
                        <div className='button'>
                            Sign up
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

export default SignUp;