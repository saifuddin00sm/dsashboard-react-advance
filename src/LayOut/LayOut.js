import React, { useState, useEffect } from "react";
import { Layout, Menu, Typography, Badge } from "antd";
import { RiDashboardFill } from "react-icons/ri";
import { IoIosPeople, IoIosNotifications } from "react-icons/io";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  AiFillBulb,
  AiTwotoneSetting,
  AiOutlineGateway,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import styled from "styled-components";
// Components
import DashBoard from "../components/DashBoard/DashBoard";
import Tasks from "../components/Tasks/Tasks";
import Reporting from "../components/Reporting/Reporting";
import Clients from "../components/Clients/Clients";
import Subcontractors from "../components/Subcontractors/Subcontractors";
import Agents from "../components/Agents/Agents";
import Settings from "../components/Settings/Settings";
import Details from "../components/DetailsPage/Details";
import Profile from '../components/Settings/Profile';
import {Input} from "@material-ui/core";

const RightHeader = styled.div`
  display: flex;
  gap: 20px;
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    h5 {
      margin: 0;
      font-family: "Mulish";
      font-style: normal;
      font-weight: 600;
      /* font-size: 14px; */
      line-height: 20px;

      letter-spacing: 0.2px;

      color: #252733;
    }
    img {
      height: 44px;
      width: 44px;
      border: 1.5px solid #dfe0eb;
      border-radius: 100%;
    }
  }

  .vertical-line {
    /* display: inline-block; */
    margin: 19px 0px 0px 0px;
    border-left: 1px solid #dfe0eb;
    height: 32px;
  }

  .notification {
    cursor: pointer;
    svg {
      height: 1.6em;
      width: 1.6em;
    }
  }
  .searchIcon {
    cursor: pointer;
    svg {
      height: 1.6em;
      width: 1.6em;
    }
  }
`;

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const LayOut = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Main Dashboard");
  const location = useLocation();
  const [user, setUser] = useState({});
  const [link, setLink] = useState("");


  const handleTableRow = (row, type) => {
    if (type === "clients") {
      navigate("/clients/" + row.id);
      setLink("clients");
    } else if (type === "subs") {
      navigate("/subcontractors/" + row.id);
      setLink("subcontractors");
    } else if (type === "agents") {
      navigate("/agents/" + row.id);
      setLink("agents");
    }

    setUser({row, type});
  };
  
  useEffect(() => {
    if (location.pathname.includes("tasks")) {
      setTitle("Tasks");
    } else if (location.pathname.includes("reporting")) {
      setTitle("Reporting");
    } else if (location.pathname.includes("clients")) {
      setTitle("Clients");
    } else if (location.pathname.includes("subcontractors")) {
      setTitle("Subcontractors");
    } else if (location.pathname.includes("agents")) {
      setTitle("Agents");
    } else if (location.pathname.includes("settings")) {
      setTitle("Settings");
    } else {
      setTitle("Main Dashboard");
    }
  }, [location]);

  const hasNumber = /\d/;


  return (
    <Layout style={{ height: "100vh" }}>
      <Sider className="site-layout-background" theme="light" width={255}>
        <div className="logo" style={{ margin: "25px 0" }}>
          <img src={require("../assets/images/Logo.png")} alt="logo" />
        </div>
        <Menu theme="white" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<RiDashboardFill />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AiOutlineGateway />}>
            <Link to="/tasks">Tasks</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<AiFillBulb />}>
            <Link to="/reporting">Reporting</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<IoIosPeople />}>
            <Link to="/clients">Clients</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<IoIosPeople />}>
            <Link to="/subcontractors">Subcontractors</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<AiOutlineUser />}>
            <Link to="/agents">Agents</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<AiTwotoneSetting />}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ background: "#E5E5E5" }}>
        <Header theme="light" style={{ padding: 33, background: "#E5E5E5" }}>
          <Title level={3}>{hasNumber.test(location.pathname) ? title + ' details' : title}</Title>
          <RightHeader>
            <div className="searchIcon">
              <form>
                <Input placeholder="Search here" inputProps={{ 'aria-label': 'description' }} />
                <button style={{background:'none', border:'none', outline: 'none'}} type="submit">
                <AiOutlineSearch />
                </button>
              </form>
            </div>
            <div className="notification">
              <Badge count={5}>
                <IoIosNotifications />
              </Badge>
            </div>
            <div className="vertical-line"></div>
            <div className="avatar">
              <Title level={5}>Matthew Pitnick</Title>
              <img
                src={require("../assets/images/profile-img.jpg")}
                alt="userImage"
              />
            </div>
          </RightHeader>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflowX: "hidden" }}>
          <div style={{ padding: 24, minHeight: "100%" }}>
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/reporting" element={<Reporting />} />
              <Route
                path="/clients"
                element={<Clients handleTableRow={handleTableRow} />}
              />
              <Route
                path="/subcontractors"
                element={<Subcontractors handleTableRow={handleTableRow} />}
              />
              <Route
                path="/agents"
                element={<Agents handleTableRow={handleTableRow} />}
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/settings/profile" element={<Profile />} />
              <Route
                path={`/${link}/:id`}
                element={<Details user={user && user} />}
              />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayOut;
