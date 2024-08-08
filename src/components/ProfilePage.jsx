import React from "react";
import maleImg from "../images/male_person_img.jpg";
import { Flex, Progress } from "antd";

function ProfilePage() {
  return (
<div>
        <div className="box">
      <div className="profileImgBox">
        <img className="personProfileImg" src={maleImg} alt="" />
        <h3>Bobomurod Eshmamatov</h3>
      </div>
      <div className="enrolledcourseBox">
        <div className="jsBox">
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              className="jsImg"
              src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png"
              alt=""
            />
            <p>You are learning javascript online lessons </p>
          </div>
          <div>
            <Flex gap="small" wrap>
              <Progress type="circle" percent={100} size={80} />
            </Flex>
          </div>
        </div>
        <div className="jsBox">
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              className="jsImg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
              alt=""
            />
            <p>You are learning javascript online lessons </p>
          </div>
          <div>
            <Flex gap="small" wrap>
              <Progress type="circle" percent={50} size={80} />
            </Flex>
          </div>
        </div>
        <div className="jsBox">
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              className="jsImg"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt=""
            />
            <p>You are learning javascript online lessons </p>
          </div>
          <div>
            <Flex gap="small" wrap>
              <Progress type="circle" percent={10} size={80} />
            </Flex>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}

export default ProfilePage;
