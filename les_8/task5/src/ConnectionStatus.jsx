import React from "react";

class ConnectionStatus extends React.Component {

  state = {
    status: "online",
  };

  //после изменения статуса обновляем состояние state
  changeStatus = (event) => {
    this.setState({
      status: event.type,
    });
  };

  componentDidMount() {
    window.addEventListener("online", this.changeStatus);
    window.addEventListener("offline", this.changeStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.changeStatus);
    window.removeEventListener("offline", this.changeStatus);
  }


  render() {
    const { status } = this.state;
    const toggleClass = status !== 'online' ? "status status_offline" : "status";
    return (
      <div className={toggleClass}>{status}</div>
    )
  }
}

export default ConnectionStatus;