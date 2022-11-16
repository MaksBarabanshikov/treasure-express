import web3 from "web3";

export const getShortWallet = (wallet: string): string => {
    const walletStart = wallet.slice(0, 5)
    const walletDots = '...'
    const walletEnd = wallet.substring(wallet.length - 2, wallet.length)

    return walletStart.concat(walletDots, walletEnd)
}

export const BNB = (wei) => web3.utils.fromWei(wei, 'ether').concat('0');

export const WEI = (bnb) => web3.utils.toWei(bnb)
