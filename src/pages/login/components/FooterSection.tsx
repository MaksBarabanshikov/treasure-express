import React from "react";
import { Info } from "./Info";
import { Presentations } from "./Presentations";
import { LastSection } from "./LastSection";
import { InfoSection } from "../../../components/infoSection/InfoSection";

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <InfoSection />
        <LastSection />
      </div>
    </section>
  );
};

export default FooterSection;
