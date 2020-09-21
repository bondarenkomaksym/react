import React from "react";
import Comment from "./Comment";

const userInfo = {
  name: "Tom",
  avatarUrl: "https://avatars1.githubusercontent.com",
};

const App = () => {
  return (
    <Comment
      user={userInfo}
      text="Good job!"
      date={new Date("2020-01-01T05:01:01.566Z")}
    />
  );
};

export default App;