import React from "react";
import { Button, message } from "antd";
const MessageF = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: "error",
            content:
                "Assalomalekim",
            duration: 10,
        });
    };
    return (
        <>
            {contextHolder}
            <Button onClick={success}>Click me😉</Button>
        </>
    );
};
export default MessageF;
