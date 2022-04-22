import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Card, Select, Progress } from "antd";
import CircleChart from "../../Charts/RoundedChart/CircleChart";
import CustomCard from "../../UI/CustomCard";
import { taskChart, reportingTasksData } from "../../dummyData/dummyData";
import ReactangleCharts from "../../Charts/RectangleChart/RectangleCharts";
import Calendar from "../../UI/Calendar";
import MainButton from "../../UI/MainButton";

const { Option } = Select;
const Repo = styled.div`
  color: black;
  width: 100%;
  height: 100%;
  .top {
    .ant-card {
      border-radius: 4px !important;
    }
    margin-bottom: 50px;
    .cardtitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        /* identical to box height */

        letter-spacing: 0.01em;

        /* dark_blue */

        color: #334d6e;
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

    .ant-progress-success-bg,
    .ant-progress-bg {
      background: #2ed47a;
      height: 4px !important;
    }

    .moreTasks {
      margin-top: 24px;
      .show_moreBtn {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 20px;
        /* identical to box height */

        text-align: center;
        letter-spacing: 0.01em;

        /* Accent blue */

        color: #109cf1;
        background: none;
        border:none;
        outline:none;
      }
      .moreTaskCard {
        margin-bottom: 20px;
        .head {
          margin-bottom: 7px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .type {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 500;
            text-transform: capitalize;
            font-size: 12px;
            line-height: 18px;
            /* identical to box height */

            text-align: right;
            letter-spacing: 0.01em;

            /* gray */

            color: #90a0b7;
          }
          .task {
            margin: 0;
            font-family: "Poppins";
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 22px;
            /* identical to box height */

            letter-spacing: 0.01em;

            /* table_black */

            color: #323c47;
          }
        }

        .date {
          margin-bottom: 7px;
          .due {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            /* identical to box height */

            letter-spacing: 0.01em;

            /* dark_gray text */

            color: #4c5862;

            opacity: 0.5;
          }
          .dates {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            /* identical to box height */

            letter-spacing: 0.01em;

            /* dark_gray text */

            color: #4c5862;
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .prio {
            text-transform: capitalize;
            border-radius: 4px;
            height: 22px;
            width: 84px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-family: "Poppins";
            font-style: normal;
            font-weight: 500;
            font-size: 11px;
            line-height: 16px;
            text-align: center;
            letter-spacing: 0.02em;

            /* white */

            color: #ffffff;
          }
          .profile-items {
            .name {
              font-family: "Poppins";
              font-style: normal;
              font-weight: 400;
              font-size: 13px;
              line-height: 20px;
              /* identical to box height */
              margin: 0;
              letter-spacing: 0.01em;

              /* table_gray */

              color: #707683;
            }
            .profileImg {
              width: 34px;
              height: 34px;
              padding: 2px;
              border-radius: 100%;
              border: 1.5px solid #dfe0eb;
            }
            display: flex;
            align-items: center;
            gap: 15px;
          }
        }
        width: 100%;
        height: 100%;
        background: #ffffff;
        /* card shadow */
        padding: 24px;

        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
      }
    }
  }
`;

const Reporting = () => {
  const [dataRws, setDataRws] = useState(reportingTasksData.slice(0,3));
  const handleChange = (value) => {
    console.log(value);
  };


  const showMore = ()=> {
    setDataRws(reportingTasksData);
    if(dataRws.length > 3){
      setDataRws(reportingTasksData.slice(0,3));
    }
  }

  const taskList = dataRws.map((item, index) => (
    <div className="moreTaskCard" key={index}>
      <div className="head">
        <p className="task">{item.task}</p>
        <span className="type">{item.type}</span>
      </div>
      <div className="date">
        <span className="due">Due date:</span>{" "}
        <span className="dates">{item.date}</span>
      </div>
      <div className="bottom">
        <div className="profile-items">
          <img className="profileImg" src={item.src} alt={item.task} />
          <p className="name">{item.name}</p>
        </div>
        <div
          className="prio"
          style={{
            background:
              (item.priority === "completed" && "#2ed47a") ||
              (item.priority === "ended" && "#F7685B"),
          }}
        >
          {item.priority}
        </div>
      </div>
    </div>
  ));

  const taskProgressNum = 80;
  return (
    <Repo>
      <div className="top">
      <div className="mb-4" style={{textAlign: "right"}}>
        <MainButton width={80} text='export' />
      </div>
        <Row gutter={35}>
          <Col className="gutter-row" span={14}>
            <Card>
              <div className="cardtitle">
                <p style={{ margin: 0 }}>8 task completed out of 10</p>
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
              <Progress percent={taskProgressNum} status="active" />
              <div className="calendar">
                <Calendar />
              </div>
              <div className="moreTasks">
                {taskList}
              <div style={{textAlign: "center"}}>
              <button className="show_moreBtn" onClick={showMore}>{dataRws.length > 3 ? 'Show Less' : 'Show more'}</button>
              </div>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={10}>
            <div style={{ marginBottom: "49px" }}>
              <ReactangleCharts />
            </div>
            <CircleChart />
          </Col>
        </Row>
      </div>
      <div className="bottom">
        <Row gutter={35}>
          {taskChart.map((item, i) => (
            <Col className="gutter-row" span={6}>
              <CustomCard value={item.value} status={item.status} />
            </Col>
          ))}
        </Row>
      </div>
    </Repo>
  );
};

export default Reporting;
