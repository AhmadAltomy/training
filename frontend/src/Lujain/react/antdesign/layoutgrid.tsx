import React from "react";
import "./index.css";
import { Col, Divider, Row } from "antd";

const LayoutGrid: React.FC = () => {
    const customColStyle = {
        color: "white",
        padding: "8px",
        textAlign: "center"
    };

    const redBgStyle = {
        backgroundColor: "red",
        border: "1px solid white"
    };

    return (
        <>
            <Row justify="start">
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
            </Row>
            <Divider></Divider>
            <Row justify="center">
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
            </Row>
            <Divider></Divider>
            <Row justify="end">
                <Col span={8} style={{ ...redBgStyle, color: "white", padding: "8px" }}>
                    col-8
                </Col>
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
                <Col span={4} style={{ ...customColStyle, ...redBgStyle }}>
                    col-4
                </Col>
            </Row>
        </>
    );
};

export default LayoutGrid;
