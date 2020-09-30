import React from 'react';
import User from './User';
import Pagination from "./Pagination";

class UsersList extends React.Component {

  state = {
    currentPage: 0,
    itemsPerPage: 3
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {


    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={}
          itemsPerPage={}
          totalItems={}
        />
        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}


//в элементах списка должно быть свойство key={}
//ключ должен находится в том файле который отрисовывает список
//{...user} такая запись в свойствах элемента позволяет передать все свойства из нашего объекта

export default UsersList;