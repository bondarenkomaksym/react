import React from "react";
import Comment from "./Comment";

const userInfo = {
  name: "Tom",
  avatarUrl: "https://lh3.googleusercontent.com/ogw/ADGmqu-Ljco3KeROELUt70N6ptgpOgeb1Njsd-rwgyTu=s83-c-mo",
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