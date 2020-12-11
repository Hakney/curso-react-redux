import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments"> 
            <ApprovalCard>
                <CommentDetail author="Hakney" timeAgo="Hoje às 15h00" comment="Muito bom!" avatar={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Bea" timeAgo="Ontem às 08h00" comment="Massa" avatar={faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);