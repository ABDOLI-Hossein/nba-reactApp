import React from 'react';
import FontAwesome from "react-fontawesome";
import moment from "moment";

const CardInfo = (props) => {

    const teamName = (teams,team) => {
            let data = teams.find((item)=>{
                return item.teamId === team
               
            })  
            
            if(data){
                return data.name;
                
            }  
            
            
    }

    const FormData = (date) => {
        return moment(date).format(" MM-DD-YYYY");
    }

    
    return (
        
        <div className="cardinfo">
            <span className="teamname">
                {teamName(props.teams,props.team)}
            </span>
            <span className="date">
                <FontAwesome name="calendar-day" />
                {FormData(props.date)}
            </span>
        </div>
    );
};

export default CardInfo;