import React from "react";
import styled from "styled-components";
import { Card } from "antd";

const Cards = styled.div`
  .status {
    transition: all 0.3s;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    text-align: center;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #9fa2b4;
    text-transform: capitalize;
    margin-bottom: 12px;
  }
  .value {
    transition: all 0.3s;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 1px;
    color: #252733;
  }

  .ant-card {
      .ant-card-body{
        padding: 41px 24px;
      }
    border-radius: 8px;
    transition: border 0.3s;
    border: 2px solid #dfe0eb;
    cursor: pointer;
    &:hover {
      border-color: #104975;
      .status {
        color: #104975;
      }
      .value {
        color: #104975;
      }
    }
  }
`;

const CustomCard = ({value, status}) => {
  return (
    <Cards>
      <Card bordered={false}>
        <div className="status">{status}</div>
        <div className="value">{value}</div>
      </Card>
    </Cards>
  );
};

export default CustomCard;
