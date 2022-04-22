import React, { useState, useEffect } from "react";
import { Row, Col, Card, List, message } from "antd";
import styled from "styled-components";
import MainButton from "../../UI/MainButton";
import { useNavigate } from "react-router-dom";
import TaskCard from "../../TaskCard/TaskCard";
import ProjectTable from "./ProjectTable";

const DetailsPage = styled.div`
  .header-itms {
    .searchbox {
      display: flex;
      gap: 0 20px;
align-items: center; 
      width: 100%;
      .inputs {
        width: 100%;
        position: relative;
        input {
          width: 100%;
          padding: 13px 47px;
          outline: none;
          border-radius: 4px;
          border: none;
          background: #fff;
        }
        img {
          position: absolute;
          top: 32%;
          left: 18px;
          height: 20px;
          width: 20px;
        }
      }
    }
    margin-bottom: 40px;
    .buttons_left {
      display: flex;
      gap: 0 20px;
      align-items: center;
    }
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

  /* notes stylings */
  .notesHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    p {
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

  .notes {
    .note {
      .note-date {
        margin-bottom: 14px;
        display: block;
      }
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: 0.01em;

      /* table_black */

      color: #323c47;
      margin-bottom: 40px;
    }
  }

  .moreBtn {
    text-align: center;
    a {
      text-decoration: underline;
      text-transform: capitalize;
      font-family: "Mulish";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      text-align: right;
      letter-spacing: 0.2px;
      text-decoration-line: underline;

      /* accent / default */

      color: #3751ff;
    }
  }

  .infos {
    .details {
      word-break: break-all;
      text-transform: capitalize;
      margin-bottom: 21px;
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

  .file_input {
    width: 58px;
    color: transparent;
    &::-webkit-file-upload-button {
      visibility: hidden;
    }
    &::before {
      content: "Upload";
      color: black;
      display: inline-block;
      padding: 5px 8px;
      outline: none;

      cursor: pointer;
      font-family: "Mulish";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      text-align: right;
      letter-spacing: 0.2px;

      /* accent / default */

      color: #3751ff;
    }
  }

  .pdf-contents {
    .pdf-list {
      display: flex;
      align-items: center;
      gap: 0 5px;
      a {
        text-decoration: underline;
      }
    }
  }
  .ant-card {
    border: 1px solid #dfe0eb;
    border-radius: 8px;
  }
`;

const Details = ({ user }) => {
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const [notes, setNotes] = useState(user.row.notes.slice(0, 4));
  const [selectedFile, setSelectedFile] = useState([]);
  const [file, setFile] = useState("");
  const [showProjects, setShowProjets] = useState(false);

  const searchHandler = (e) => {
    console.log(e.target.value);
  };

  const more = (e) => {
    e.preventDefault();
    setNotes(user.row.notes);
    if (notes.length > 4) {
      setNotes(user.row.notes.slice(0, 4));
    }
  };

  const goGack = () => {
    if (currentURL.includes("clients")) {
      navigate("/clients");
    } else if (currentURL.includes("subcontractors")) {
      navigate("/subcontractors");
    } else if (currentURL.includes("agents")) {
      navigate("/agents");
    }
  };

  const fileUploader = (e) => {
    if (!e?.name.includes(".pdf")) return message.info("Please add pdf files!");
    else if (!e?.name) return message.info("Please Select a file!");
    else {
      message.success("File added!");
      setFile(e?.name);
    }
  };

  const handleSubmit = () => {
    const list = selectedFile;
    const fi = { file: file };
    list.push(fi);
    setSelectedFile(list);
    if (file) {
      setFile("");
    }
  };

  const handleProject = () => {
    setShowProjets(!showProjects);
  };

  useEffect(() => {
    if (file !== "") {
      handleSubmit();
    }
  }, [file]);

  return (
    <DetailsPage>
      <div className="header-itms">
        <Row gutter={20}>
          <Col span={12} className="buttons_left">
            <MainButton type="back" goBack={goGack} width={70} text="back" />
            <MainButton width={87} text="actions" />
            <MainButton
              classes={showProjects}
              type="projects"
              handleProject={handleProject}
              width={139}
              text="projects"
            />
            {user.type === "subs" && (
              <MainButton width={139} text="send request" />
            )}
          </Col>
          <Col span={12}>
            <div className="searchbox">
            <div>
              {showProjects && <MainButton width={127} text="add new project" />}
            </div>
              <div className="inputs">
                <input
                  onChange={searchHandler}
                  type="text"
                  placeholder="Search"
                />
                <img
                  src={require("../../assets/images/search.png")}
                  alt="search-icon"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        {showProjects ? (
          <ProjectTable />
        ) : (
          <Row gutter={20}>
            <Col span={6}>
              <Card>
                <div className="infos">
                  <div className="details">
                    <span>name:</span>
                    <p>{user.row.name}</p>
                  </div>
                  <div className="details">
                    <span>account:</span>
                    <p>{user.row.account}</p>
                  </div>
                  <div className="details">
                    <span>assinged to:</span>
                    <p>{user.row.owner}</p>
                  </div>
                  <div className="details">
                    <span>WC Exp. Date:</span>
                    <p>{user.row.wcExpDate}</p>
                  </div>
                  <div className="details">
                    <span>GL Exp. Date:</span>
                    <p>{user.row.glExpDate}</p>
                  </div>
                  <div className="details">
                    <span>point of contact:</span>
                    <p>{user.row.pointOfCont}</p>
                  </div>
                  <div className="details">
                    <span>phone number:</span>
                    <p>{user.row.phone}</p>
                  </div>
                  <div className="details">
                    <span>email:</span>
                    <p>{user.row.email}</p>
                  </div>
                  <div className="details">
                    <span>address:</span>
                    <p>{user.row.address.house}</p>
                    <p>{user.row.address.street}</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ padding: "0 18px" }}>
                <div className="notesHeader">
                  <p>Notes:</p>
                  <div>
                    <MainButton width={127} text="add new notes" />
                  </div>
                </div>
                <div className="notes">
                  {notes &&
                    notes.map((i, index) => (
                      <div className="note" key={index}>
                        <span className="note-date">{i.date}</span>
                        <p>{i.note}</p>
                      </div>
                    ))}
                </div>
                <div className="moreBtn">
                  <a href="/" onClick={more}>
                    {notes.length > 4 ? "less" : "more"}
                  </a>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <div className="mb-3">
                <Card>
                  <div className="card-title">
                    <h5>Files</h5>
                    <div>
                      <input
                        className="file_input"
                        type="file"
                        onChange={(e) => fileUploader(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <div className="pdf-contents">
                    <List>
                      {selectedFile.length > 0 &&
                        selectedFile.map(
                          (i, index) =>
                            i !== "" && (
                              <List.Item key={index}>
                                <div className="pdf-list">
                                  <div>
                                    <img
                                      style={{
                                        width: "36px",
                                        height: "51px",
                                        marginRight: "10px",
                                      }}
                                      src={require("../../assets/images/pdf-icon.png")}
                                      alt="pdf-icons"
                                    />
                                  </div>
                                  <a href="/">
                                    {i.file.split(".pdf")[0].slice(0, 25)}
                                  </a>
                                </div>
                              </List.Item>
                            )
                        )}
                    </List>
                  </div>
                </Card>
              </div>
              <div>
                <Card>
                  <div className="card-title">
                    <h5>Tasks</h5>
                    <a href="/">View all</a>
                  </div>
                  <div>
                    <TaskCard />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </DetailsPage>
  );
};

export default Details;
