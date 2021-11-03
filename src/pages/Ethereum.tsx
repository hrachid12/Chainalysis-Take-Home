import Stack from 'react-bootstrap/Stack';

import Buy from '../components/Coin/Buy';
import Sell from '../components/Coin/Sell';
import styles from './Ethereum.module.css';

const Bitcoin: React.FC<{}> = () => {
    return (
        <div className={styles.eth_main}>
            <Stack direction="horizontal" gap={0}>
                <Buy />

                <Sell />
            </Stack>
        </div>
    );
}

export default Bitcoin;