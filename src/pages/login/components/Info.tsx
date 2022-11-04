import React from "react";

import copyIcon from "../../../assets/img/icons/copy_icon.svg"
import linkIcon from "../../../assets/img/icons/link_icon.svg"

export const Info = () => {

    const smartContract = '0xb9B0A10C7cEeA5445aFfc23ddfB172Cb859eC412'
    const handleCopyContract = () => navigator.clipboard.writeText(smartContract);

    return (
        <div className="col-12 col-xl-8">
            <div className="info-section__info w-100 h-100">
                <h1>Treasure Express Info</h1>
                <div className="info-section__contract d-flex justify-content-between">
                    <span>treasure Express smart-contract</span>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>0xb9B0A1...9eC412</span>
                        <button onClick={handleCopyContract} className="btn py-0 px-2">
                            <img src={copyIcon} alt="copy"/>
                        </button>
                        <a href="https://testnet.bscscan.com/address/0xb9b0a10c7ceea5445affc23ddfb172cb859ec412#code"
                           className="btn py-0 px-2"
                           target="_blank"
                           rel="noreferrer"
                        >
                            <img src={linkIcon} alt="link"/>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 px-1 px-sm-3">
                        <h4>Members Total</h4>
                        <p>42</p>
                        <span>+14</span>
                    </div>
                    <div className="col-4 px-1 px-sm-3">
                        <h4>Transactions</h4>
                        <p>1080</p>
                        <span>+582</span>
                    </div>
                    <div className="col-4 px-1 px-sm-3">
                        <h4>Turnover, BNB</h4>
                        <p>1708.2</p>
                        <span>+743.4</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
