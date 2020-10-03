import React from "react";

class ConnectionStatus extends React.Component {

  state = {
    status: "online",
  };

  //после изменения статуса обновляем состояние state
  changeStatus = (e) => {
    this.setState({
      status: e.type,
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

  //меняем название класса элемента
  toggleTextBlock = (status) =>
    `status ${status === "offline" ? "status_offline" : ""}`;

  render() {
    return (
      <div className={this.toggleTextBlock(this.state.status)}>
        {this.state.status}
      </div>
    );
  }
}

export default ConnectionStatus;