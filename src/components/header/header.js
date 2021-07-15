import React, { Component } from "react";
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import Sidenav from "./sidenav";


class Header extends Component{
    




   render(){
       
    return(
        <header className="header">
            <Sidenav {...this.props} />
            <div className="headerOpt">
                <FontAwesome onClick={this.props.onOpenNav} name="bars" style={{color:"#dfdfdf",padding:"10px",cursor:"pointer"}} />
                <Link to="/" >
                <img src="/images/nba_logo.png"  alt="nba logo" className="logo" />
                </Link>
            </div>
        </header>
    )
   }

}

export default Header;