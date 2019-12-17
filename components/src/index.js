import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import AprovalCard from "./AprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <AprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
        />
      </AprovalCard>
      <AprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I like the subject"
        />
      </AprovalCard>
      <AprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 5:00AM"
          content="I like the writing"
        />
      </AprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
