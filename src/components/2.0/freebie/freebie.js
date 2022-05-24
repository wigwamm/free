import React, { useEffect, useState } from 'react';
import agent from '../../../constants/agent';
import history from '../../../history';

function Freebie(props) {
    const [user, setUser] = useState({})

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        try {
            let token = localStorage.getItem("free:token")
            if (!token) throw new Error("No token available in localStorage")
            let res = await agent.user.current(token)
            setUser(res.user)
        } catch (err) {
            history.push("/")
        }
    }

    return (
        <div>
            Hi {user?.email_address}, this is the freebie page (We'll have proper content soon hopefully)
        </div>
    );
}

export default Freebie;