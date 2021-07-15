import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = (props) => {
    let template = null;
    switch(props.type){
        case "loadMore":
            template = (
                <div className="blue_btn"
                    onClick={props.loadMore}
                >
                    {props.cta}
                </div>
            )
            break;
        case "linkTo":
            template = (
                <div>
                    <Link to={props.linkTo} className="blue_btn">
                    {props.cta}
                    </Link>
                </div>
            )
            break;    
        default:
            template = null;    
    }

    return template;
};

export default Buttons;