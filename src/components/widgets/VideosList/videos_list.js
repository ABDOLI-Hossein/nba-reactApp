import React, { Component } from 'react';
import {firebaseVideos,firebaseTeams,firebaseLooper} from "../../../firebase";
import Buttons from "../../widgets/Buttons/buttons";
import VideosListTemplate from "../VideosList/videos_list_template";

class VideosList extends Component {
    state = {
        teams:[],
        videos:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }

    renderTitle = () => {
        return this.props.title ?
         <h3><strong>NBA</strong> Videos</h3>
         : null
    }


    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }



    request = (start,end) => {
            if(this.state.teams.length < 1){
                firebaseTeams.once("value")
                 .then((snapshot)=>{
                const teams = firebaseLooper(snapshot)
                this.setState({
                    teams
                })
            })
            }

            firebaseVideos.orderByChild("id").startAt(start).endAt(end).once("value")
            .then((snapshot)=>{
            const videos = firebaseLooper(snapshot);
            this.setState({
                videos : [...this.state.videos,...videos],
                start,
                end
            })
            })
            .catch(e=>{
            console.log(e)
            })


    }

    renderVideo = () => {
        let template = null;
        switch(this.props.type){
            case "card":
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />

                break;

            default:
                template = null;    
        }
        return template;
    }


    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end + 1,end)
    }    

    renderButton = () => {
        return this.props.loadmore ?
        <Buttons type="loadMore" loadMore={()=>this.loadMore()} cta="Load More Videos" />
        : <Buttons type="linkTo" cta="More Videos" linkTo="/videos" />
    }



    render() {
        console.log(this.state.videos)


        return (
            <div className="videoList_wrapper">
                {this.renderTitle()}
                {this.renderVideo()}
                {this.renderButton()}
            </div>
        );
    }
}

export default VideosList;