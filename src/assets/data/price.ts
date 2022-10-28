import { v4 as uuidv4 } from 'uuid'

interface ILevelPrice {
    id: string;
    level: string;
    price: string;
}

export const LevelPriceData: ILevelPrice[] = [
    {
        id: uuidv4(),
        level: "LVL 1",
        price: "0.05 BNB",

    },
    {
        id: uuidv4(),
        level: "LVL 2",
        price: "0.07 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 3",
        price: "0.1 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 4",
        price: "0.14 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 5",
        price: "0.2 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 6",
        price: "0.28 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 7",
        price: "0.4 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 8",
        price: "0.55 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 9",
        price: "0.8 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 10",
        price: "1.1 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 11",
        price: "1.6 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 12",
        price: "2.2 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 13",
        price: "3.2 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 14",
        price: "4.4 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 15",
        price: "6.5 BNB"
    },
    {
        id: uuidv4(),
        level: "LVL 16",
        price: "8 BNB"
    },
]
