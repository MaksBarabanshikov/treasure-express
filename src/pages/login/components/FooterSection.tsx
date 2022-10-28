import React from 'react';
import {Info} from "./Info";
import {Presentations} from "./Presentations";
import {LastSection} from "./LastSection";

const FooterSection = () => {
    return (
        <section className="footer-section">
            <div className="container">
                <div className="row">
                    <Info/>
                    <Presentations/>
                </div>
                <LastSection/>
            </div>
        </section>
    );
};

export default FooterSection;
