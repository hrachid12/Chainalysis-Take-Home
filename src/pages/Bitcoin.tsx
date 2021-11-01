import Card from '../components/UI/Card';
import styles from './Bitcoin.module.css';

const Bitcoin: React.FC<{}> = () => {
    return (
        <Card className={styles.bitcoin_theme}>
            <h1>Test</h1>
            <p>Bitcoin</p>
        </Card>
    );
}

export default Bitcoin;