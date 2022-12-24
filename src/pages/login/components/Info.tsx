import React, {useEffect, useState} from "react";
import { BNB, getShortContract } from "../../../helper";

import copyIcon from "../../../assets/img/icons/copy_icon.svg"
import linkIcon from "../../../assets/img/icons/link_icon.svg"
import {useAppSelector} from "../../../hooks/hooks";
import {TREASURE_EXPRESS_ADDRESS} from "../../../contract/config";
import toast from "react-hot-toast";
import { LinkIcon } from "../../../components/Icons/LinkIcon";
import { CopyIcon } from "../../../components/Icons/copyIcon";

export const Info = () => {
    const [statistics, setStatistic] = useState(null)
    const [oldStat, setOldStat] = useState(null)
    const { CONTRACT_LIST } = useAppSelector(state => state.web3)

    const getGlobalStatistic = async () => {
        if (CONTRACT_LIST) {
            const statistics = await CONTRACT_LIST.methods.getGlobalStatistic().call()
            setStatistic(statistics)
        }
    }

    useEffect(() => {
        if ( CONTRACT_LIST !== null) {
            getGlobalStatistic()
        }
    },[CONTRACT_LIST])

    const handleCopy = () => {
        notify();
        return navigator.clipboard.writeText(TREASURE_EXPRESS_ADDRESS);
    }

    const notify = () => toast('Сopied!');


    return (
        <div className="col-12 col-xl-8">
            <div className="info-section__info w-100 h-100">
                <h1 className="text-shadow">Treasure Express Info</h1>
                <div className="info-section__contract d-flex justify-content-between">
                    <span>treasure Express smart-contract</span>
                    <div className="d-flex justify-content-between align-items-center">
                        <div onClick={handleCopy} style={{cursor: 'pointer'}} className={'d-inline-flex'}>
                            <span className={'me-2'}>{getShortContract(TREASURE_EXPRESS_ADDRESS)}</span>
                            <CopyIcon />
                        </div>

                        {/*<button onClick={handleCopy} className="btn py-0 px-2">*/}
                        {/*    <img src={copyIcon} alt="copy"/>*/}
                        {/*</button>*/}
                        <a href="https://bscscan.com/address/0xc97331d1a2d7fe257df234cd32ccc37679a73f9e#readContract"
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
                        <p>{statistics ? statistics[0]: 42}</p>
                        <span>+14</span>
                    </div>
                    <div className="col-4 px-1 px-sm-3">
                        <h4>Transactions</h4>
                        <p>{statistics ? statistics[1]: 1080}</p>
                        <span>+582</span>
                    </div>
                    <div className="col-4 px-1 px-sm-3">
                        <h4>Turnover, BNB</h4>
                        <p>{statistics ? BNB(statistics[2]): 1708.2}</p>
                        <span>+743.4</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
