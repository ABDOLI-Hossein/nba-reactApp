import React from 'react';
import { Link } from 'react-router-dom';
import CardInfo from "../Cardinfo/card_info";


const VideosListTemplate = (props) => {
    console.log(props)
    return props.data.map((item,i)=> (
         <Link to={`/videos/${item.id}`} key={i}>
            <div className="videoListItem_wrapper">
                <div className="videosListItem_left" style={{background:`url(/images/videos/${item.image})`}}>
                    <div></div>
                </div>
                <div className="videosListItem_right">
                    <CardInfo teams={props.teams} team={item.team} date={item.date} />
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ))
};

export default VideosListTemplate;