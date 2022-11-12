export const getShortWallet = (wallet: string): string => {
    const walletStart = wallet.slice(0, 5)
    const walletDots = '...'
    const walletEnd = wallet.substring(wallet.length - 2, wallet.length)

    return walletStart.concat(walletDots, walletEnd)
}