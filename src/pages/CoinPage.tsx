import Stack from 'react-bootstrap/Stack';

import Buy from '../components/Coin/Buy';
import Sell from '../components/Coin/Sell';
import styles from './CoinPage.module.css';

import Coin from '../models/Coin';

const CoinPage: React.FC<{ coin: Coin }> = (props) => {
    return (
        <div className={styles.cp_main}>
            <h1 className={styles.cp_header}>{props.coin.name} prices (in USD)</h1>
            <Stack direction="horizontal" gap={0}>
                <Buy coin={props.coin} />

                <Sell coin={props.coin} />
            </Stack>
        </div>
    );
}

export default CoinPage;