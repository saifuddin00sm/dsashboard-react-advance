import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import { IconButton, Input } from "@material-ui/core";
import { MdModeEdit } from "react-icons/md";
import MainButton from '../../UI/MainButton';

const ProfileStyles = styled.div`
  .profile_contents {
    margin-left:140px;
    .form{
      & > *{
        margin: 20px;
      }
      height: 100%;
      max-width: 600px;
      width: 100%;
      /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
      padding: 20px;
    }
    width: 100%;
    height: 100%;
    .profile_pic {
      margin-bottom: 40px;
      margin-left: 100px;
      /* margin: auto; */
      height: 200px;
      width: 200px;
      padding: 15px;
      position: relative;
      img {
        border-radius: 100%;
        border: 2px solid #dfe0eb;
        padding: 6px;
        height: 200px;
        width: 200px;
      }

      .pen {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
`;

const Profile = () => {
  return (
    <ProfileStyles>
      <Card>
        <h4> Edit Profile </h4>
        <div className="profile_contents">
          <div className="profile_pic">
            <img src={require("../../assets/images/profile-img.jpg")} alt="" />
            <div className="pen">
              <IconButton
                size="medium"
                style={{ color: "#ffff", background: "#516BEB" }}
              >
                <MdModeEdit />
              </IconButton>
            </div>
          </div>

          <form className='form' noValidate autoComplete="off">
            <Input
            required
            placeholder="First name"
              inputProps={{ "aria-label": "description" }}
            />
            <Input
            required
              placeholder="Last name"
              inputProps={{ "aria-label": "description" }}
            />
            <Input
            type="email"
              placeholder="Email"
              inputProps={{ "aria-label": "description" }}
              fullWidth
            />
            <Input
            type="number"
              placeholder="Contact number"
              fullWidth
              inputProps={{ "aria-label": "description" }}
            />
            <Input
            required
              placeholder="Address"
              fullWidth
              inputProps={{ "aria-label": "description" }}
            />
              <Input
              required
              type="text"
            placeholder="City"
              inputProps={{ "aria-label": "description" }}
            />
            <Input
            required
            type="text"
              placeholder="State"
              inputProps={{ "aria-label": "description" }}
            />
              <Input
              required
              type="number"
            placeholder="Zip code"
              inputProps={{ "aria-label": "description" }}
            />
            <Input
            required
            type="text"
              placeholder="Country"
              inputProps={{ "aria-label": "description" }}
            />
            <Input
            required
            type="password"
              placeholder="Password"
              fullWidth
              inputProps={{ "aria-label": "description" }}
            />
            <div>
              <MainButton text="save" width={100} />
            </div>
          </form>
        </div>
      </Card>
    </ProfileStyles>
  );
};

export default Profile;
