import React, {Component} from "react";
import {firebase, firebaseDB,firebaseLooper,firebaseTeams} from "../../../../firebase";
import Header from "./header";


class NewsArticles extends Component{
    
    state = {
        articles : [],
        team:[],
        imageURL:''
    }

    componentWillMount(){
        firebaseDB.ref(`articles/${this.props.match.params.id}`).once("value")
        .then((snapshot)=>{
            let article = snapshot.val();
            firebaseTeams.orderByChild("teamId").equalTo(article.team).once("value")
            .then((snapshot)=>{
                const team = firebaseLooper(snapshot);
                this.setState({
                    articles:article,
                    team
                    })
                    this.getImageURL(article.image)
            })
        })

        // axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        // .then(response=>{
        //    let articles = response.data[0];

        //    axios.get(`${URL}/teams?id=${articles.team}`)
        //     .then(response=>{
        //         this.setState({
        //             articles,
        //             team:response.data
        //         })
        //     })
        // })
    }


    getImageURL = (filename) => {
        firebase.storage().ref('images')
        .child(filename).getDownloadURL()
        .then(url=>{
            this.setState({
                imageURL:url
            })
        })
    }


    render(){
        console.log(this.state)

        const articles = this.state.articles;
        const team = this.state.team
        return(
            <div className="articleWrapper">
                <Header
                    teamData = {team[0]}
                    date = {articles.date}
                    author={articles.author}
                />
                <div className="articleBody">
                    <h1>{articles.title}</h1>
                    <div className="articleImage" style={{background:`url('${this.state.imageURL}')`}}>

                    </div>
                    <div className="articleText"
                        dangerouslySetInnerHTML={{
                            __html:articles.body
                        }}
                    >
                      
                    </div>
                </div>
            </div>
        )
    }

}


export default NewsArticles;