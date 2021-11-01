import Card from '../components/UI/Card';
import styles from './Ethereum.module.css';

const Ethereum: React.FC<{}> = () => {
    return (
        <Card className={styles.eth_theme}>
            <h1>Test</h1>
            <p>Ethereum</p>
        </Card>
    );
}

export default Ethereum;