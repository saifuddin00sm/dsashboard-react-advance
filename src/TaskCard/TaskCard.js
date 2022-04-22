import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox, List, message, Select } from "antd";
import Priority from "../UI/Priority";

const TaskCards = styled.div`
  .task-input {
    input {
      ::placeholder{ color: #c5c7cd;}
      outline: none;
      border: none;
      font-family: "Mulish";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;

      letter-spacing: 0.2px;
    }
  }
  .addBtn {
    width: 24px;
    height: 24px;
    background: #f0f1f7;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    padding: 14px;
    font-size: 21px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 0;
    color: #1080ff;
  }
`;

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("");

  const handleSelect = (value) => {
    setPriority(value);
  };

  const checkboxHandler = (e) => {
    console.log(e.target);
  };


  const handleTaskSubmit = (e) => {
    e.preventDefault();

    if (input === "") return message.info("Please fill the input!");
    else if(!priority) return message.info("Please Select a priority!");

    const arr = tasks;
    const obj = { priority: priority, data: input };
    arr.push(obj);

    setTasks(arr);
    message.success({
      content: "Task Added!",
      className: "custom-class",
    });

    setInput("");
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <TaskCards>
      <div style={{borderBottom: '1px solid #DFE0EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0'}}>
          <div className="task-input">
            <input
              type="text"
              placeholder="Create new task"
              value={input}
              onChange={handleInput}
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Select defaultValue={{ value: "default" }} onChange={handleSelect}>
              <Select.Option value="urgent">Urgent</Select.Option>
              <Select.Option value="view">View</Select.Option>
              <Select.Option value="default">Default</Select.Option>
              <Select.Option value="high">High</Select.Option>
              <Select.Option value="low">Low</Select.Option>
              <Select.Option value="normal">Normal</Select.Option>
            </Select>
            <button onClick={handleTaskSubmit} className="addBtn">
              <span>+</span>
            </button>
          </div>
        </div>
      <List>
        { tasks.length > 0 &&
          tasks.map((i, index) => (
            <List.Item key={index}>
              <div className="task-item">
                <Checkbox
                  style={{
                    marginRight: "15px",
                  }}
                  onChange={checkboxHandler}
                ></Checkbox>
                <span className="text-capitalize">{i.data}</span>
              </div>
              <Priority priority={i.priority}/>
            </List.Item>
          ))
        }
      </List>
    </TaskCards>
  );
};

export default TaskCard;
