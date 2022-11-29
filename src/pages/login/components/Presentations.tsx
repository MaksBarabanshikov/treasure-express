import Eng from "../../../assets/img/icons/eng.svg";
import download from "../../../assets/img/icons/download.svg";
import Rus from "../../../assets/img/icons/rus.svg";

export const Presentations = () => {

    const handleSetupPdfEn = () => {
        fetch('./pdf/TreasureExpressEN.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'TreasureExpressEN.pdf';
                alink.click();
            })
        })
    }

    const handleSetupPdfRu = () => {
        fetch('./pdf/TreasureExpressRU.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'TreasureExpressRU.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="col-12 col-xl-4">
            <div className="info-section__presentations h-100 w-100 mt-5 mt-xl-0">
                <h1 className="text-shadow">Presentations</h1>
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <img className="me-2" src={Eng} alt="English"/>
                    <span>Presentation on English</span>
                    <button onClick={handleSetupPdfEn} className="btn">
                            <img src={download} alt="download"/>
                    </button>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <img className="me-2" src={Rus} alt="Russian"/>
                    <span>Presentation on Russian</span>
                    <button onClick={handleSetupPdfRu} className="btn">
                        <img src={download} alt="download"/>
                    </button>
                </div>
            </div>
        </div>
    );
};
