import React from 'react';
import Pagination from './Pagination';
import User from './User';


//1. create state - currPage, totalItems +++
//2. goPrev goNext
//3. create test data +++
//4. display data +++
//5. calculate users to display+++


class UsersList extends React.Component {

  state = {
    currentPage: 0,
    itemsPerPage: 3
  };

  goPrev = () => {


  }

  goNext = () => {


  }

  render() {

    //принимаем список поль-лей
    const users = this.props.users;

    //высчитываем кол поль-лей
    const currentPage = this.state.currentPage;

    const startIndex = currentPage * 3;
    const endIndex = startIndex + 3;
    //через slice режем начальный массив поль-лей
    const usersToDisplay = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination />
        <ul className="users">
          {usersToDisplay.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;