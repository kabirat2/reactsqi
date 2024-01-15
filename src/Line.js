import React from "react";

import './Line.css';
import imae from './sqi2.jpg';
const Line = () => {
    return (
        <div className="App">

            {
                <div>
                    <div className="background2">
                        <div className="images3">
                            <div className="image2">

                                <img src={imae} alt="" />
                            </div>
                            <div className="study2">
                                <hr />
                                <h1>SCICT AT A GLANCE</h1>
                                <>
                                    <p className="National">SQI College of ICT is an accredited institution. SQI College of ICT offers both National Diploma
                                        (2 years), Professional Diploma (1 year) and Certificate Courses (from 2 weeks).</p>
                                    <p className="National">The National Innovative Diploma conforms with the standard
                                        National Diploma Certificate obtained in Polytechnics
                                        while the Professional certificate is the certificate you earn after
                                        taking a professional course here at SQI.</p>
                                    <p className="Nationals">You can use the Diploma certificate to seek admissions into
                                        the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of
                                        having undergone professional training in the field for which the certificate is issued.</p>
                                </>
                                <hr />
                            </div>
                            
                        </div>
                    </div>

                </div>

            }
        </div>
    );
}

export default Line