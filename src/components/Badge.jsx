import React from 'react';
import { Avatar, Badge } from 'antd';
const BadgeF = () => (
  <a href="#">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
);
export default BadgeF;