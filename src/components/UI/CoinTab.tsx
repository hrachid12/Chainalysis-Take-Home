import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Card from '../UI/Card';
import styles from './CoinTab.module.css';

const CoinTab: React.FC<{value: number, exchange: string}> = (props) => {
    return (
        <Card className={`${styles.tabs}`}>
            <Row>
                <Col md={9}>{props.exchange}</Col>
                <Col md={1} style={{ marginLeft: "2rem" }}>{props.value}</Col>
            </Row>
        </Card>
    );
}

export default CoinTab;