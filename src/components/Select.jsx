import React from 'react';
import { Select } from 'antd';
const SelectF = () => (
    <Select
        showSearch
        placeholder="Select your status"
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
            {
                value: '1',
                label: 'Shoxrux',
            },
            {
                value: '2',
                label: 'Toxirov',
            },
            {
                value: '3',
                label: "Nizomjon o'g'li",
            },
        ]}
    />
);
export default SelectF;