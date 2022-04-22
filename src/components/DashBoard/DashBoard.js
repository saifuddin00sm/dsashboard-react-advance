import React from "react";
import styled from "styled-components";
import { taskChart, unresolvedData } from "../../dummyData/dummyData";
import { Card, Col, List, Row } from "antd";
import CircleChart from "../../Charts/RoundedChart/CircleChart";
import TaskCard from "../../TaskCard/TaskCard";
import CustomCard from "../../UI/CustomCard";

const DashboardStyles = styled.div`
  .task_item {
    margin-bottom: 78px;
    .cardsItems {
      .ant-row {
        row-gap: 20px !important;
        margin-top: 11px;
      }
    }
    .charts-items {
      .chart-header {
        margin-bottom: 22px;
        position: relative;
        span {
          position: absolute;
          top: -30px;
          left: 0;
          color: #949494cc;
          font-weight: 400;
        }
      }
    }
  }

  .tickets {
    .list-items {
      text-transform: capitalize;
      font-family: "Mulish";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      letter-spacing: 0.2px;

      /* grayscale / black */

      color: #252733;
    }
    .card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 60px;
      h5 {
        margin: 0;
        font-family: "Mulish";
        font-style: normal;
        font-weight: 700;
        font-size: 19px;
        line-height: 24px;
        /* identical to box height */

        letter-spacing: 0.4px;

        /* grayscale / black */

        color: #252733;
      }
    }
    .ant-card {
      border: 2px solid #dfe0eb;
      border-radius: 8px;
    }
  }
`;

const DashBoard = () => {
  return (
    <DashboardStyles>
      <div className="site-card-wrapper">
        <div className="task_item">
          <Row gutter={16}>
            <Col span={12} className="cardsItems">
              <Row gutter={20}>
                {taskChart.map((item, index) => (
                  <Col span={12} key={index}>
                   <CustomCard value={item.value} status={item.status}/>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col
              span={12}
              style={{ padding: "0 42px" }}
              className="charts-items"
            >
              <div className="chart-header">
                <span>tasks_chart</span>
              </div>
              <div className="charts">
                <CircleChart />
              </div>
            </Col>
          </Row>
        </div>

        <div className="tickets">
          <Row gutter={16}>
            <Col span={12}>
              <div className="card-head">
                <p>Unresolved tasks</p>
              </div>
              <Card>
                <div className="card-title">
                  <h5>Unresolved tasks</h5>
                  <a href="/">View details</a>
                </div>
                <div className="card-item">
                  <List>
                    {unresolvedData.map((item, index) => (
                      <List.Item key={index}>
                        <div className="list-items">{item.status}</div>
                        <div>{item.value}</div>
                      </List.Item>
                    ))}
                  </List>
                </div>
              </Card>
            </Col>
            <Col span={12} style={{ padding: "0 42px" }}>
              <div className="card-head">
                <p>Tasks</p>
              </div>
              <Card>
                <div className="card-title">
                  <h5>Tasks</h5>
                  <a href="/">View all</a>
                </div>
                <div className="card-item">
                  <TaskCard />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </DashboardStyles>
  );
};

export default DashBoard;
