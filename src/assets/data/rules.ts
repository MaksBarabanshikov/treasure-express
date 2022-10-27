import { v4 as uuidv4 } from 'uuid'

interface IRulesList {
    id: string;
    text: string;
}

export const RulesListData: IRulesList[] = [
    {
    id: uuidv4(),
    text: "- Registration fee is 0.025 BNB (7$);",
    },
    {
        id: uuidv4(),
        text: "- The cost of activation of each new level increases, as well as the profit that is generates;",
    },
    {
        id: uuidv4(),
        text: "- The level is available for activation only if all previous levels are already activated; ",
    },
    {
        id: uuidv4(),
        text: "- Each activated level generates 3 payments in the amount of 74% of its value, after which the level must be activated again;",
    },
    {
        id: uuidv4(),
        text: "- Players have the option to automatically reactivate levels without waiting for the payout to end. ",
    }
]

