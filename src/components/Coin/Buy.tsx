import Stack from 'react-bootstrap/Stack'

import Card from '../UI/Card';
import styles from './Coin.module.css';

import Coin from '../../models/Coin';
import CoinTab from '../UI/CoinTab';

const Buy: React.FC<{ coin: Coin }> = (props) => {
    return (
        <Card className={styles.coin_main}>
            <h1>Buy Prices</h1>
            <Stack gap={3}>
                <CoinTab value={props.coin.binance_buy} exchange="Binance" />
                <CoinTab value={props.coin.cb_buy} exchange="Coinbase" />
            </Stack>

            <h2>Recommended Exchange</h2>
            {props.coin.binance_buy < props.coin.cb_buy && (
                <CoinTab value={props.coin.binance_buy} exchange="Binance" />
            )}
            {props.coin.binance_buy > props.coin.cb_buy && (
                <CoinTab value={props.coin.cb_buy} exchange="Coinbase" />
            )}
            {props.coin.binance_buy === props.coin.cb_buy && (
                <CoinTab value={props.coin.binance_buy} exchange="Binance" />
            )}
        </Card>
    );
}

export default Buy;