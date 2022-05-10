import React from 'react';

function Footer(props) {
    return (
        <div id="footer">
            <div className='section'>
                <div className='heading'>
                    Social
                </div>
                <div className='item'>Facebook</div>
                <div className='item'>Twitter</div>
                <div className='item'>TikTok</div>
            </div>

            <div className='section'>
                <div className='heading'>
                    Links
                </div>
                <div className='item'>Contact</div>
                <div className='item'>Advertise</div>
            </div>

            <div className='section'>
                <div className='heading'>
                    Other
                </div>
                <div className='item'>Privacy Policy</div>
                <div className='item'>Terms of Use</div>
            </div>

            <div className='section'>
                <div className='heading'>
                    Copyright
                </div>
                <div className='item'>Free.co.uk &copy; 2022</div>
                <div className='item'>Ray Rafiq</div>
            </div>
        </div>
    );
}

export default Footer;