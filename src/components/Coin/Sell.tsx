import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'

import Card from '../UI/Card';
import styles from './Coin.module.css';

const Sell: React.FC<{}> = () => {
    return (
        <Card className={styles.coin_main}>
            <h1>Sell</h1>
            <Stack gap={3}>
                <Card className={styles.coin_tabs}>
                    <Row>
                        <Col md={10}>MARKETPLACE NAME</Col>
                        <Col md={1}>PRICE</Col>
                    </Row>
                </Card>

                <Card className={styles.coin_tabs}>
                    <Row>
                        <Col md={10}>MARKETPLACE NAME</Col>
                        <Col md={1}>PRICE</Col>
                    </Row>
                </Card>
            </Stack>

            <h1>Recommended</h1>
            <Card className={styles.coin_tabs}>
                <Row>
                    <Col md={10}>MARKETPLACE NAME</Col>
                    <Col md={1}>PRICE</Col>
                </Row>
            </Card>
        </Card>
    );
}

export default Sell;