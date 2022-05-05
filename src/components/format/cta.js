import React from 'react';
import cta from "../../assets/img/cta.svg"
import cta_long from "../../assets/img/cta_long.svg"
import cta_medium from "../../assets/img/cta_medium.svg"

function CTA(props) {
    return (
        <div id="cta">
            {/* <div id="one">
                <div className="first">
                    Get yo free stuff
                </div>

                <div className="second">
                    Get yo free stuff
                </div>
            </div>

            <div id="two">
                <div className="first">
                    On the month
                </div>

                <div className="second">
                    On the month
                </div>
            </div>

            <div id="three">
                <div className="first">
                    Every month
                </div>

                <div className="second">
                    Every month
                </div>
            </div> */}

            <img id="cta_img" src={cta} alt="Get yo free stuff, on the month, every month" />
            <img id="cta_img_medium" src={cta_medium} alt="Get yo free stuff, on the month, every month" />
            <img id="cta_img_long" src={cta_long} alt="Get yo free stuff, on the month, every month" />
        </div>
    );
}

export default CTA;