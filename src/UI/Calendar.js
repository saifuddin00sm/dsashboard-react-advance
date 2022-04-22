import { useState } from "react";
// import './calendar.css';
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
} from "date-fns";
import styled from "styled-components";

const Calen = styled.div`
  .icon {
    font-family: "Material Icons", serif;
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "liga";
  }

  /* GENERAL */

  * {
    box-sizing: border-box;
  }

  header {
    display: block;
    width: 100%;
    padding: 1.75em 0;
    border-bottom: 1px solid var(--border-color);
    background: var(--neutral-color);
  }

  header #logo {
    font-size: 175%;
    text-align: center;
    color: var(--main-color);
    line-height: 1;
  }

  header #logo .icon {
    padding-right: 0.25em;
  }

  main {
    display: block;
    margin: 0 auto;
    margin-top: 5em;
    max-width: 50em;
  }

  /* GRID */

  .row {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .row-middle {
    align-items: center;
  }

  .col {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-start {
    justify-content: flex-start;
    text-align: left;
  }

  .col-center {
    justify-content: center;
    text-align: center;
  }

  .col-end {
    justify-content: flex-end;
    text-align: right;
  }

  /* Calendar */

  display: block;
  position: relative;
  width: 100%;
  background: var(--neutral-color);

  .header {
    .top_header {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      /* identical to box height */

      letter-spacing: 0.01em;

      color: #192a3e;
    }
    text-transform: uppercase;
    font-weight: 700;
    font-size: 115%;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-color);
  }

  .header .icon {
    cursor: pointer;
    transition: 0.15s ease-out;
  }

  .header .icon:hover {
    transition: 0.25s ease-out;
    color: var(--main-color);
  }

  .header .icon:first-of-type {
    margin-left: 1em;
  }

  .header .icon:last-of-type {
    margin-right: 1em;
  }

  .days {
    text-transform: uppercase;
    padding: 0.75em 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #334d6e;
    opacity: 0.5;
  }

  .body .cell {
    height: 2em;
    overflow: hidden;
    cursor: pointer;
    background: var(--neutral-color);
    transition: 0.25s ease-out;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
  }

  .body .cell .number:hover {
    color: #109cf1;
    transition: 0.5s ease-out;
  }

  .body .today {
    .number {
      background-color: #109cf1;
      color: #ffff !important;
    }
  }

  .body .selected {
    .number {
      color: #109cf1 !important;
    }
  }
  .body .cell:last-child {
    border-right: none;
  }

  .body .cell .number {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #4c5862;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body .row {
    border-bottom: 1px solid var(--border-color);
  }

  .body .disabled {
    color: var(--text-color-light);
    pointer-events: none;
  }

  .body .col {
    flex-grow: 0;
    flex-basis: calc(100% / 7);
    width: calc(100% / 7);
  }
`;

const Calendar = ({ showDetailsHandle }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormat = "dd MMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <span className="top_header">{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-center"></div>
        <div className="col col-end"></div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              isSameDay(day, new Date())
                ? "today"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  return (
    <Calen>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </Calen>
  );
};

export default Calendar;
