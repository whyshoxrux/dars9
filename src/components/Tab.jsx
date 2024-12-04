import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: "1",
        label: "Tab 1",
        children: "Page1",
    },
    {
        key: "2",
        label: "Tab 2",
        children: "Page2",
    },
    {
        key: "3",
        label: "Tab 3",
        children: "Page3",
    },
];
const TabsF = () => (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);
export default TabsF;
