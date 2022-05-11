import React from 'react';

function FloatingInput(props) {
    return (
        <div id={props.id + "_floating"} className={props.value ? 'floating_input active' : 'floating_input'}>
            <input id={props.id} type={props.type} value={props.value} onChange={e => props.onChange(e.currentTarget.value)} required />
            <label for={props.id}>{props.placeholder}</label>
        </div>
    );
}

export default FloatingInput;