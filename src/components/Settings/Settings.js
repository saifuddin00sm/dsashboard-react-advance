import React from "react";
import { Card } from "react-bootstrap";
import { RiSettings2Line } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SettingStyles = styled.div`
  padding: 2px;
  .info-contents {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all 0.3s;
    &:hover {
      box-shadow: none;
    }
    cursor: pointer;
    display: flex;
    gap: 0 20px;
    align-items: center;
    margin-bottom: 30px;
    padding: 20px;
    .infos {
      h6 {
        font-size: 22px;
        text-transform: capitalize;
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 0px;
        font-size: 17px;
      }
    }
    .info_icons {
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      padding: 15px;
      background: #dfdfffc5;
      color: #332fd0;
      height: 60px;
      width: 60px;
    }
  }
  .card-head {
    padding: 20px 5px;
    display: flex;
    gap: 0 7px;
    align-items: center;
    font-size: 20px;
  }
`;
// Users and Permissions, Analytics Settings, Email Preferences

const settingData = [
  {
    userTitle: "profile Information",
    userSubT: "Password, security, and personal information.",
    icons: <BsPersonCircle />,
    showProfile: true
  },
  {
    userTitle: "Users and Permissions",
    userSubT: "Control all invetory management settings.",
    icons: <FaUsersCog />,
  },
  {
    userTitle: "Analytics Settings",
    userSubT: "Manage all analytics settings",
    icons: <DiGoogleAnalytics />,
  },
  {
    userTitle: "Email Preferences",
    userSubT: "Handle your all emails.",
    icons: <AiOutlineMail />,
  },
];

const Settings = () => {
  const navigate = useNavigate();
  const goProfile = (items)=> {
        if(items?.showProfile){
            navigate('/settings/profile');
        }
  }
  return (
    <SettingStyles>
      <Card>
        <Card.Header className="mb-3">
          <div className="card-head">
            <div>
              <RiSettings2Line />
            </div>
            <span> Settings / </span>
          </div>
        </Card.Header>
        <Card.Body>
          <div>
            {settingData.map((i, ind) => (
              <div className="info-contents" onClick={()=>goProfile(i)}>
                <div className="info_icons">{i.icons}</div>
                <div className="infos">
                  <h6>{i.userTitle}</h6>
                  <p className="subtitle">{i.userSubT}</p>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </SettingStyles>
  );
};

export default Settings;
