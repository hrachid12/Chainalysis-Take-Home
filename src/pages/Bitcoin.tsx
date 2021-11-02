import Card from '../components/UI/Card';
import styles from './Bitcoin.module.css';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import React from 'react';

const Bitcoin: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Stack direction="horizontal">
            <Card className={styles.bitcoin_main}>
                <h1>Buy</h1>
                <Stack gap={3}>
                    <Card className={styles.bitcoin_tabs}>
                        <Row>
                            <Col md={10}>MARKETPLACE NAME</Col>
                            <Col md={1}>PRICE</Col>
                        </Row>
                    </Card>

                    <Card className={styles.bitcoin_tabs}>
                        <Row>
                            <Col md={11}>MARKETPLACE NAME</Col>
                            <Col md={1}>PRICE</Col>
                        </Row>
                    </Card>
                </Stack>

                <h1 className={styles.h1_spacing}>Recommended</h1>
                <Card className={styles.bitcoin_tabs}>
                    <Row>
                        <Col md={11}>MARKETPLACE NAME</Col>
                        <Col md={1}>PRICE</Col>
                    </Row>
                </Card>
            </Card>

            <Card className={styles.bitcoin_main}>
                <h1>Sell</h1>
                <Stack gap={3}>
                    <Card className={styles.bitcoin_tabs}>
                        <Row>
                            <Col md={11}>MARKETPLACE NAME</Col>
                            <Col md={1}>PRICE</Col>
                        </Row>
                    </Card>

                    <Card className={styles.bitcoin_tabs}>
                        <Row>
                            <Col md={11}>MARKETPLACE NAME</Col>
                            <Col md={1}>PRICE</Col>
                        </Row>
                    </Card>
                </Stack>

                <h1 className={styles.h1_spacing}>Recommended</h1>
                <Card className={styles.bitcoin_tabs}>
                    <Row>
                        <Col md={11}>MARKETPLACE NAME</Col>
                        <Col md={1}>PRICE</Col>
                    </Row>
                </Card>
            </Card>
            </Stack>
        </React.Fragment>
    );
}

export default Bitcoin;