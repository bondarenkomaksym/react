import React from "react";
import Avatar from "./Avatar";

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar
        avatarUrl={props.avatarUrl}
        name={props.name} />
      <div className="user-info__name">{props.name}</div>
    </div>
  );
};

export default UserInfo;