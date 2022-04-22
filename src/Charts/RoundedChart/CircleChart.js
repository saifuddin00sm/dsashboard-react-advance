import React from "react";
import Donut from "./Donut";
import { Card, Divider, Select } from "antd";
import styled from "styled-components";

const { Option } = Select;

const ChatsStyle = styled.div`
  .cardtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: 0.01em;
      color: #192a3e;
    }
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: #ffff;
    box-shadow: 0;
    border-right-width: 1px;
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector{
      box-shadow: none;
      border-right-width: 0px;
      border-color: #ffff;
      border:none;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector{
      border: 0;
      color: #1080ff;
  }
`;

const CircleChart = () => {

  const handleChange = (value) => {
    console.log(value);
  };
  
  return (
    <ChatsStyle>
      <Card bordered={false}>
        <div className="cardtitle">
          <p style={{margin: 0}}>Tasks</p>
          <div className="options">
            <span>Show: </span>
            <Select
              defaultValue={{ value: "This Month" }}
              onChange={handleChange}
            >
              <Option value="this month">This Month</Option>
              <Option value="monthly">Monthly</Option>
            </Select>
          </div>
        </div>
        <Divider />
        <Donut />
      </Card>
    </ChatsStyle>
  );
};

export default CircleChart;
