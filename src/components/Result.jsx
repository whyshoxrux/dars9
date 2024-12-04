import React from "react";
import { Button, Result } from "antd";
const ResultF = () => (
    <Result
        status="info"
        title="About us"
        subTitle="INFO: Here is information about us"
        extra={[
            <Button type="primary" key="console">
                FAQ
            </Button>,
        ]}
    />
);
export default ResultF;
