class Coin {
    binance_buy: number;
    binance_sell: number;
    cb_buy: number;
    cb_sell: number;
    name: string;
    ticker: string;

    


    constructor(binance_buy: number, binance_sell: number, cb_buy: number, cb_sell: number, name: string, ticker: string) {
        this.binance_buy = Math.round(binance_buy * 100) / 100;
        this.binance_sell = Math.round(binance_sell * 100) / 100;
        this.cb_buy = Math.round(cb_buy * 100) / 100;
        this.cb_sell = Math.round(cb_sell * 100) / 100;
        this.name = name;
        this.ticker = ticker;
    }
}

export default Coin;