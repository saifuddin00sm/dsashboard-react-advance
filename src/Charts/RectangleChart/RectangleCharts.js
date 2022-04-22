import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, Divider, Select } from "antd";
import styled from "styled-components";
import { tasksData } from "../../dummyData/dummyData";
const { Option } = Select;

const ChartStyles = styled.div`
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

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none;
    border-right-width: 0px;
    border-color: #ffff;
    border: none;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 0;
    color: #1080ff;
  }
  .recharts-cartesian-axis-line {
    display: none;
  }

  .tasksSign {
    margin-left: 23px;
    margin-bottom: 12px;
    .icon {
      width: 8px;
      height: 8px;
      margin-right: 8px;
    }
    .text {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      letter-spacing: 0.01em;

      /* black */

      color: #192a3e;
    }
  }
`;

const ReactangleCharts = () => {
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <ChartStyles>
      <Card>
        <div className="cardtitle">
          <p style={{ margin: 0 }}>Tasks</p>
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
        <div className="tasksSign">
          <span className="icon">
            <img
              src={require("../../assets/images/completed_tasks.png")}
              alt="completed-tasks"
            />
          </span>
          <span className="text">Completed Tasks</span>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart
            width={730}
            height={250}
            data={tasksData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#109CF1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#109CF1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="tasks"
              stroke="#109CF1"
              fillOpacity={0.5}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </ChartStyles>
  );
};

export default ReactangleCharts;
