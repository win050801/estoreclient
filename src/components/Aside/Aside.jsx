import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Panel } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

export default function Aside() {
    return (
        <>
            <Alert variant="secondary">
                <Alert.Heading style={{ background: "secondary" }}>
                    Shopping cart
                </Alert.Heading>
                <hr />

                <Container>
                    <Row>
                        <Col xs lg="5">
                            <img
                                style={{ height: 70, width: 100 }}
                                src="https://www.pngmart.com/files/7/Cart-PNG-Clipart.png"
                            />
                        </Col>
                        <Col xs lg="7">
                            <ul>
                                <li>10 mặt hàng</li>
                                <li>150 ngàn đồng</li>
                                <p className="mb-0">
                                    <a href="">Xem giỏ hàng</a>
                                </p>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Alert>

            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>TÌM KIẾM</Accordion.Header>
                    <Accordion.Body>
                        <form action="" method="post">
                            <input
                                type="text"
                                name="keywords"
                                className="form-control"
                                placeholder="Key words"
                            />
                        </form>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>DANH MỤC</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <Tab.Container
                                id="list-group-tabs-example"
                                defaultActiveKey="#link1"
                            >
                                <Row>
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroup.Item
                                                action
                                                href="#link1"
                                            >
                                                Link 1
                                            </ListGroup.Item>
                                            <ListGroup.Item
                                                action
                                                href="#link2"
                                            >
                                                Link 2
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="#link1"></Tab.Pane>
                                            <Tab.Pane eventKey="#link2"></Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>ĐẶC BIỆT</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <Tab.Container
                                id="list-group-tabs-example"
                                defaultActiveKey="#link1"
                            >
                                <Row>
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroup.Item
                                                action
                                                href="#link1"
                                            >
                                                Link 1
                                            </ListGroup.Item>
                                            <ListGroup.Item
                                                action
                                                href="#link2"
                                            >
                                                Link 2
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="#link1"></Tab.Pane>
                                            <Tab.Pane eventKey="#link2"></Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}
