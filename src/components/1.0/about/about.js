import React from 'react';

function About(props) {
    return (
        <div id="about">
            <div className='heading'>
                <div className='funky_text'>
                    <div className="text">About</div>
                    <div className="shadow">About</div>
                </div>
            </div>

            <div className='content'>
                You're probably wondering what this is all about... Why would we be offering something for free?
                Is this a scam? Do I have to enter my credit card details? Well let us answer!

                <div className="sub">Why are we offering something for free?</div>
                We would like to bring you a new free product every month, as a treat! We're partnering with lots of 
                new and up-and-coming merchants, services and retailers that want to offer you a free sample of their
                products. All you need to do is come back each month and see what we have on offer! That's it, really!

                <div className="sub">Is this a scam?</div>
                Nope, not a scam. There's no fine print or hidden details, no trickery or funny business. We genuinely just
                want to give you free stuff.

                <div className="sub">Do we need your credit card details?</div>
                Absolutely not, and never will.
            </div>
        </div>
    );
}

export default About;