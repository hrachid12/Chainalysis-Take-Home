import Stack from 'react-bootstrap/Stack';

import Buy from '../components/Coin/Buy';
import Sell from '../components/Coin/Sell';
import styles from './Bitcoin.module.css';

const Bitcoin: React.FC<{}> = () => {
    return (
        <div className={styles.bitcoin_main}>
            <Stack direction="horizontal" gap={0}>
                <Buy />

                <Sell />
            </Stack>
        </div>
    );
}

export default Bitcoin;