import Coin from '../models/Coin';

import { BINANCE_URI, COINBASE_URI } from '../CONSTANTS';

interface coinbase_req {
	"bid": number;
    "ask": number;
}

interface binance_req {
    "bidPrice": number;
    "askPrice": number;
}

const GetPrices = async (coin: string[]) => {
    const binance = await fetch(BINANCE_URI + `?symbol=${coin[0]}USDT`);
	const bin_res = (await binance.json()) as binance_req;
    console.log(bin_res);

    const cb = await fetch(COINBASE_URI + `/${coin[0]}-USD/ticker`);
	const cb_res = (await cb.json()) as coinbase_req;
    console.log(bin_res);

    
    return new Coin(bin_res.bidPrice, bin_res.askPrice, cb_res.bid, cb_res.ask, coin[1], coin[0]);
}

export default GetPrices;