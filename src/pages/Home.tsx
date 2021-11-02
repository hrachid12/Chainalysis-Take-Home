import Card from '../components/UI/Card';
import styles from './Home.module.css';

const Home: React.FC<{}> = () => {
    return (
        <Card className={styles.home_main}>
            <h1>Test</h1>
            <p>Hello World</p>
        </Card>
    );
}

export default Home;