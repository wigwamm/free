import React, { useState } from 'react';
import Checkbox from './checkbox';
import CountryCodes from './country_codes';
import FloatingInput from './floating_input';

function Form(props) {
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [cc, setCc] = useState("+44")
    const [notify, setNotify] = useState(true)

    return (
        <div className='form'>
            <FloatingInput id="email" placeholder="Email address" type="text" value={email} onChange={setEmail} />

            <CountryCodes value={cc} onChange={setCc} />
            <FloatingInput id="number" placeholder="Phone number" type="text" value={number} onChange={setNumber} />

            <Checkbox value={notify} onClick={setNotify} label="Receive notifications each month" />
        </div>
    );
}

export default Form;