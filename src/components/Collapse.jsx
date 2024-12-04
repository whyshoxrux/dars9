import React from 'react';
import { Collapse } from 'antd';
const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae recusandae consectetur numquam eos soluta, voluptatem vitae quasi velit sequi aliquam culpa libero iste facere nobis cum quibusdam qui quos neque nesciunt tempore dolorem accusantium, officia deleniti molestiae! Odio consequatur libero similique repellat ex impedit eos, eius reiciendis mollitia vero voluptates?"
const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];
const CollapseF = () => <Collapse accordion items={items} />;
export default CollapseF;