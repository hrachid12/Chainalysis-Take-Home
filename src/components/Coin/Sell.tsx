import Stack from 'react-bootstrap/Stack'
import Coin from '../../models/Coin';

import Card from '../UI/Card';
import CoinTab from '../UI/CoinTab';
import styles from './Coin.module.css';

const Sell: React.FC<{coin: Coin}> = (props) => {
    return (
        <Card className={styles.coin_main}>
            <h1>Sell Prices</h1>
            <Stack gap={3}>
                <CoinTab value={props.coin.binance_sell} exchange="Binance" />
                <CoinTab value={props.coin.cb_sell} exchange="Coinbase" />
            </Stack>

            <h2>Recommended Exchange</h2>
            {props.coin.binance_sell > props.coin.cb_sell && (
                <CoinTab value={props.coin.binance_sell} exchange="Binance" />
            )}
            {props.coin.binance_sell < props.coin.cb_sell && (
                <CoinTab value={props.coin.cb_sell} exchange="Coinbase" />
            )}
            {props.coin.binance_sell === props.coin.cb_sell && (
                <CoinTab value={props.coin.binance_sell} exchange="Binance" />
            )}

        </Card>
    );
}

export default Sell;