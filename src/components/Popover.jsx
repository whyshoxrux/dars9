import React from "react";
import { Button, Popover } from "antd";
const content = (
    <div>
        <p>Shoxrux</p>
        <p>Toxirov</p>
    </div>
);
const PopoverF = () => (
    <Popover content={content} title="Malumot">
        <Button type="primary">Username</Button>
    </Popover>
);
export default PopoverF;
