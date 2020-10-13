import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {

  const [isOnline, setNetwork] = useState("online");

  const updateNetwork = (event) => {
    setNetwork(event.type);
  };

  useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);
    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });


  return (
    <div className="status status_offline">{isOnline}</div>
  )
}

export default ConnectionStatus;