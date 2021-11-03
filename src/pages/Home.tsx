import styles from './Home.module.css';

const Home: React.FC<{}> = () => {
    return (
        <div className={styles.home_main}>
            <p>Designed and created by Hassan Rachid for Chainalysis' work assignment</p>
        </div>
    );
}

export default Home;