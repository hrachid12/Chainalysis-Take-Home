import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainBody from './components/UI/MainBody';
import MainHeader from './components/UI/MainHeader';
import Home from './pages/Home';

import Coin from './models/Coin';
import GetPrices from './requests/GetPrices';

import { COIN_NAMES } from './CONSTANTS';
import CoinPage from './pages/CoinPage';

function App() {
	const [ coins, setCoins ] = useState<Coin[]>([]);

	useEffect(() => {
		COIN_NAMES.forEach(async (coin_name) => {
			GetPrices(coin_name).then((new_coin) => {
				setCoins((prevState) => {
					return [ ...prevState, new_coin ];
				});
			});
		});
		
	}, []);

	return (
		<MainBody>
		<MainHeader coins={coins} />

		<main>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>

				{coins.map((coin) => {
					return (
						<Route path={`/${coin.ticker}`}>
							<CoinPage coin={coin} />
						</Route>
					)
				})}
			</Switch>
		</main>
		</MainBody>
	);
}

export default App;
