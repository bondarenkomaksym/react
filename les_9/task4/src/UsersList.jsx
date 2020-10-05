import React from "react";
import User from "./User";
import Filter from "./Filter.jsx";

class UsersList extends React.Component {
  state = {
    name: "",
  };

  //передаём данные из инпута в UsersList
  onChange = (event) => {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  };


  render() {
    //фильтруем users по именам содержащими this.state.name
    //возвращаем компоненту User с отфильтрованным массивом поль-лей
    const usersList = this.props.users
      .filter((user) =>
        user.name.toLowerCase().includes(this.state.name.toLowerCase())
      )
      .map((user) => <User {...user} key={user.id} />);

    return (
      <div>
        <Filter
          filterText={this.state.name}
          onChange={this.onChange}
          count={usersList.length}
        />
        <ul className="users">{usersList}</ul>
      </div>
    );
  }
}

export default UsersList;