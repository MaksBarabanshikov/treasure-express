export const offers = {
    '25000000000000000' : 'registered',
    '50000000000000000' : 'bought LEVEL 1',
    '70000000000000000' : 'bought LEVEL 2',
    '100000000000000000' : 'bought LEVEL 3',
    '140000000000000000' : 'bought LEVEL 4',
    '200000000000000000' : 'bought LEVEL 5',
    '280000000000000000' : 'bought LEVEL 6',
    '400000000000000000' : 'bought LEVEL 7',
    '550000000000000000' : 'bought LEVEL 8',
    '800000000000000000' : 'bought LEVEL 9',
    '1100000000000000000' : 'bought LEVEL 10',
    '1600000000000000000' : 'bought LEVEL 11',
    '2200000000000000000' : 'bought LEVEL 12',
    '3200000000000000000' : 'bought LEVEL 13',
    '4400000000000000000' : 'bought LEVEL 14',
    '6500000000000000000' : 'bought LEVEL 15',
    '8000000000000000000' : 'bought LEVEL 16',
}

export const getCurrentTextToTx = (value) => {
    return offers[value]
}