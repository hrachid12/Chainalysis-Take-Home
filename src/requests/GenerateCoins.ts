import Coins from '../models/Coins';

import { BINANCE_URI, COINBASE_URI } from '../CONSTANTS';

interface coinbase_req {
	"bid": string;
    "ask": string;
}

interface binance_req {
    "bidPrice": string;
    "askPrice": string;
}

const GetPrices = async () => {

}