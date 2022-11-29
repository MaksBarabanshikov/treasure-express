import web3 from "web3";

export const getShortWallet = (wallet: string): string => {
    const walletStart = wallet.slice(0, 5)
    const walletDots = '...'
    const walletEnd = wallet.substring(wallet.length - 2, wallet.length)
    return walletStart.concat(walletDots, walletEnd)
}

export const getShortContract = (contract: string): string => {
    const contractStart = contract.slice(0,8)
    const contractDots = '...'
    const contractEnd = contract.substring(contract.length - 6, contract.length)
    return contractStart.concat(contractDots, contractEnd)
}

export const BNB = (wei) => web3.utils.fromWei(wei, 'ether');

export const WEI = (bnb) => web3.utils.toWei(bnb)

export const formatDate = (date) => {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('.');
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
