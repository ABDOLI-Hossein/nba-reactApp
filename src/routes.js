import React from "react";
import {Switch} from "react-router-dom";
import NewsMain from "./components/Articles/News/Main/index";
import NewsArticles from "./components/Articles/News/Post/index";
import VideosMain from "./components/Articles/Videos/Main/index";
import VideoArticle from "./components/Articles/Videos/Video/index";
import Dashboard from "./components/dashboard/dashboard";
import Home from "./components/home/home";
import SignIn from "./components/signin/sign_in";
import Layout from "./hoc/layout/layout";
import PrivateRoute from "./components/authRoutes/private_routes";
import PublicRoute from "./components/authRoutes/public_routes";

const Routes = (props) => {
   

    return(
        <Layout user={props.user} >
            <Switch>
                <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
                <PublicRoute {...props} restricted={false} path="/news" exact component={NewsMain} />
                <PublicRoute {...props} restricted={false} path="/articles/:id" exact component={NewsArticles} />
                <PublicRoute {...props} restricted={false} path="/videos/:id" exact component={VideoArticle} />
                <PublicRoute {...props} restricted={false} path="/videos" exact component={VideosMain}/>
                <PublicRoute {...props} restricted={true} path="/sign-in" exact component={SignIn} />
                <PrivateRoute {...props} path="/dashboard" exact component={Dashboard} />
            </Switch>
        </Layout>
    )
}


export default Routes;