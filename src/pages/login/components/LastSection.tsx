import {WhatIs} from "../whatIs/WhatIs";
import {LevelPrice} from "./LevelPrice";

export function LastSection() {
    return (
        <section className="last-section row">
            <WhatIs/>
            <LevelPrice titleEl={'LEVEL PRICES'} col={6}/>
        </section>
    );
}
