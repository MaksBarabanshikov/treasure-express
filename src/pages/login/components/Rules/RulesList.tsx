import {RulesListData} from "../../../../assets/data/rules";
import {RulesItem} from "./RulesItem";
import "./Rules.scss";


export function RulesList() {
    return (
        <ul className="list-unstyled">
            {
                RulesListData.map(rule =>
                    (
                        <RulesItem
                            key={rule.id}
                            text={rule.text}
                        />
                    )
                )
            }
        </ul>
    );
}
