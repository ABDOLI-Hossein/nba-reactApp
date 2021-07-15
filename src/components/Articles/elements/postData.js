import React from 'react';
import moment from "moment";


const FormData = (date) => {
    return moment(date).format(" MM-DD-YYYY");
}

const PostData = (props) => {
    console.log(props)
    return (
        <div className="articlesPostData">
            <div>
                Date:
                <span>{FormData(props.data.date)}</span>
            </div>
            <div>
                Author:
                <span>{props.data.author}</span>
            </div>
        </div>
    );
};

export default PostData;