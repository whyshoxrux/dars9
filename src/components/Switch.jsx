import React from 'react';
import { Switch } from 'antd';
const onChange = (checked) => {
    console.log(`switch to ${checked}`);
};
const SwitchF = () => <Switch defaultChecked onChange={onChange} />;
export default SwitchF;