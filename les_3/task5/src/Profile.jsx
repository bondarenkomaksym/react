import React from "react";
import moment from "moment";

const Greeting = (props) => {
  // console.log(props);
  const date = moment(props.birthDate).format('DD MMM YY');

  return (

    <div className="profile">
      <span className="profile__name">{`${props.firstName} ${props.lastName}`}</span>
      <span className="profile__birth">{`Was born ${date} in ${props.birthPlace}`}</span>
    </div>

  );
};

export default Greeting


