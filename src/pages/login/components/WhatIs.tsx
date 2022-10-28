import {RulesList} from "./RulesList";
import boardTitle from '../../../assets/img/board-title.png'
export const WhatIs = () => {
    return (
        <div className="col-6">
            <div className="what-is-treasure mb-5">
                <h1>WHAT IS TREASURE EXPRESS?</h1>
                <p>
                    Treasure express is a decentralized financial game. Based on Binance Smart Chain the game allows
                    both active and passive investors to earn a significant income. To make a profit, players need to
                    register and activate the levels one by one. Each level of the game generates an increasing amount
                    of profit.
                </p>
            </div>
            <div className="rules">
                <img className="rules__title" src={boardTitle} alt="Rules"/>
                <RulesList/>
            </div>
        </div>
    );
};
