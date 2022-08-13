import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      {/* <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard> */}
      <ApprovalCard message="message">
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45 PM"
          imageSrc={faker.image.avatar()}
          comment="1st comment"
        />
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45 PM"
          imageSrc={faker.image.avatar()}
          comment="1st comment"
        />
      </ApprovalCard>
      {/* <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00 AM"
          imageSrc={faker.image.avatar()}
          comment="2nd comment"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00 PM"
          imageSrc={faker.image.avatar()}
          comment="3rd comment"
        />
      </ApprovalCard> */}
    </div>
  );
};

// React18 way to render App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
root1.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.querySelector('#root')); React17 way to render App component
