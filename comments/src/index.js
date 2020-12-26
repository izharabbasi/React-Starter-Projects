import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetails 
                author="izhar" 
                date="Today at 6:00PM" 
                post="Nice blog post!"
                img={faker.image.city()}

                />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetails 
                author="sheryar" 
                date="yesterday at 5:00PM" 
                post="I knew it yahooo!"
                img={faker.image.cats()}

                />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetails
                author="ahmed" 
                date="Tonight at 10:00PM" 
                post="you did a great JOB!"
                img={faker.image.people()}

                />
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
