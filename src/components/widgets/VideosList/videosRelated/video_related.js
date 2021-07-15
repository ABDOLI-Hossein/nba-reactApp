import React from 'react';
import VideosListTemplate from '../videos_list_template';

const VideoRelated = (props) => 
     (
        <div className="relatedWrapper">
           <VideosListTemplate data={props.data} teams={props.teams}/>
        </div>
    );


export default VideoRelated;