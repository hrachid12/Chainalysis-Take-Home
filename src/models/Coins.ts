class Coins {
    // First value in the array is always from binance 
    // Second value in the array is always from coinbase
    btc_buy: number[];
    btc_sell: number[];
    eth_buy: number[];
    eth_sell: number[];

    


    constructor(btc_buy: number[], btc_sell: number[], eth_buy: number[], eth_sell: number[]) {
        this.btc_buy = btc_buy;
        this.btc_sell = btc_sell;
        this.eth_buy = eth_buy;
        this.eth_sell = eth_sell;
    }
}

export default Coins;