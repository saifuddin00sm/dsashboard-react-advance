import React from "react";
import styled from "styled-components";

const PriorityStyle = styled.div`
  /* background: #fec400; */
  border-radius: 8px;
  padding: 0px 12px;
  width:74px;;
  height: 24px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  /* grayscale / white */

  color: #ffffff;
`;

const Priority = ({ priority }) => {
  return (
    <PriorityStyle
      style={{
        backgroundColor:
          priority === "urgent" || priority === "low"
            ? "#FEC400"
            : priority === "view" || priority === "normal"
            ? "#29CC97" : priority === "high" ? '#F12B2C'
            : "#F0F1F7",
        color: priority === "default" ? "#9FA2B4" : "#ffff",
      }}
    >
      {priority}
    </PriorityStyle>
  );
};

export default Priority;
