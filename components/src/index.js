import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
              author="Sam"
              timeAgo="Today at 4:45PM"
              content={ faker.lorem.sentence() }
              avatar={ faker.image.avatar() }
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
              author="Alex"
              timeAgo="Today at 2:45PM"
              content={ faker.lorem.sentence() }
              avatar={ faker.image.avatar() }
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
              author="Luci"
              timeAgo="Yesterday at 5:45PM"
              content={ faker.lorem.sentence() }
              avatar={ faker.image.avatar() }
            />
        </ApprovalCard>

    </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
