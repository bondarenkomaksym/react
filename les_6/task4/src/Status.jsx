import React from "react";
import Online from "./Online";
import Offline from "./Offline";

const Status = ({ isOnline }) =>
  <div className="status">
    {isOnline
      ? <Online />
      : <Offline />}
  </div>

export default Status;