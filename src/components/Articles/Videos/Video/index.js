import React, { Component } from 'react';
import {firebaseDB,firebaseLooper,firebaseTeams,firebaseVideos} from "../../../../firebase";
import Header from './header';
import VideoRelated from '../../../widgets/VideosList/videosRelated/video_related';

class VideoArticle extends Component {

    state = {
        articles:[],
        team:[],
        teams:[],
        related:[]
    }


    componentWillMount(){
        firebaseDB.ref(`videos/${this.props.match.params.id}`).once("value")
        .then((snapshot)=>{
            let article = snapshot.val();
            firebaseTeams.orderByChild("teamId").equalTo(article.team).once("value")
            .then((snapshot)=>{
                const team = firebaseLooper(snapshot);
                this.setState({
                    articles:article,
                    team
                    });
                    this.getRelated();
            })
        })
        // axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        // .then(response=>{
        //    let articles = response.data[0];

        //    axios.get(`${URL}/teams?id=${articles.team}`)
        //     .then(response=>{
        //         this.setState({
        //             articles,
        //             team:response.data
        //         });
        //         this.getRelated();
        //     })
        // })
    }

    getRelated = () => {
        firebaseTeams.once("value")
        .then((snapshot)=>{
            const teams = firebaseLooper(snapshot);

            firebaseVideos.orderByChild("team").equalTo(this.state.articles.team).limitToFirst(3).once("value")
            .then((snapshot)=>{
                const related = firebaseLooper(snapshot);
                this.setState({
                    teams,
                    related
                })
            })
        })
        // axios.get(`${URL}/teams`)
        // .then(response=>{
        //      let teams = response.data
        //      axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
        //      .then(response=>{
        //         this.setState({
        //             teams,
        //             related:response.data
        //         })
        //      })
        // })
    }

    render() {
        const articles = this.state.articles;
        const team = this.state.team
       
        return (
            <div>
                <Header teamData={team[0]} />
                <div className="videoWrapper">
                    <h1>{articles.title}</h1>
                    <iframe title="videoplayer" width="100%" height="300px" src={`https://www.youtube.com/embed/${articles.url}`} >

                    </iframe>
                    
                </div>
                <VideoRelated data={this.state.related} teams={this.state.teams}/>
            </div>
        );
    }
}

export default VideoArticle;