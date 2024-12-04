import React from "react";
import { Calendar, theme } from "antd";
const onPanelChange = (value, mode) => {};
const CalendarF = () => {
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 300,
        border: `2px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    return (
        <div style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
    );
};
export default CalendarF;
