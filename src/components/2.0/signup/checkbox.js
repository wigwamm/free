import React from 'react';

function Checkbox(props) {
    return (
        <div className='checkbox' onClick={() => props.onClick(!props.value)}>
            <div className={props.value ? 'box active' : 'box'}>
                {props.value ? <div className='tick' /> : null}
            </div>
            <div className='label'>{props.label}</div>
        </div>
    );
}

export default Checkbox;