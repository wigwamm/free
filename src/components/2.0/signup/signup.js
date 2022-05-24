import React, { useEffect, useState } from 'react';
import agent from '../../../constants/agent';
import history from '../../../history';
import Count from '../countdown/countdown';
import Background from '../format/background';
import Logo from '../format/logo';
import Form from './form';
import * as EmailValidator from 'email-validator';
import { isValidPhoneNumber } from 'libphonenumber-js'

function SignUp(props) {
    useEffect(() => {
        document.getElementById("container").style.height = window.innerHeight + 'px';
        window.addEventListener("resize", () => {
            if (document.activeElement.id !== "email" && document.activeElement.id !== "number") document.getElementById("container").style.height = window.innerHeight + 'px';
        })

        return () => {
            window.removeEventListener("resize", () => { })
        }
    }, [])

    const [formBody, setFormBody] = useState({})
    const [error, setError] = useState([])

    useEffect(() => {
        if (error) setError([])
    }, [formBody])

    function verifyComms() {
        let arr = []
        if (!EmailValidator.validate(formBody.email_address)) arr.push("Invalid email address")
        if (!isValidPhoneNumber(formBody.country_code + formBody.phone_number)) arr.push("Invalid phone number")
        setError(arr)
        if (arr.length === 0) return true
        else return false
    }

    async function signUp() {
        if (verifyComms()) {
            let res = await agent.user.signup(formBody)
            if (res.success) {
                try {
                    localStorage.setItem("free:token", res.token)
                    history.push("/freebie")
                } catch (err) {
                    console.log(err)
                }
            } else {
                if (res.message === "User already exists with that email or phone number") {
                    let login = await agent.user.login(formBody)
                    if (login.success) {
                        try {
                            localStorage.setItem("free:token", login.token)
                            history.push("/freebie")
                        } catch (err) {
                            console.log(err)
                        }
                    } else console.log(login.message)
                } else console.log(res.message)
            }
        }
    }

    return (
        <div id="signup">
            <Background />

            <div id="container">
                <div id="body">
                    <div className='logo_container'>
                        <div style={{ width: "200px", margin: "auto" }}>
                            <Logo />
                        </div>
                        <Form setFormBody={setFormBody} />
                        <div className='button' onClick={signUp}>
                            Sign up
                        </div>
                        {error.length > 0 ? error.length === 2 ? <div className='error'>Invalid email and phone number</div> : <div className='error'>{error[0]}</div> : null}
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