import Eng from "../../../assets/img/eng.jpg";
import download from "../../../assets/img/download.png";
import Rus from "../../../assets/img/rus.jpg";

export const Presentations = () => {
    return (
        <div className="col-4">
            <div className="footer-section__presentations h-100 w-100">
                <h1>Presentations</h1>
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <img src={Eng} alt="English"/>
                    <span>Presentation on English</span>
                    <button className="btn">
                        <img src={download} alt="download"/>
                    </button>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <img src={Rus} alt="English"/>
                    <span>Presentation on Russian</span>
                    <button className="btn">
                        <img src={download} alt="download"/>
                    </button>
                </div>
            </div>
        </div>
    );
};
