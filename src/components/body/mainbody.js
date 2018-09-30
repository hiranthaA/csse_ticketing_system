import React, { Component } from 'react';
import Journey from './content/journey/journey';
import Recharge from './content/recharge/recharge';
import Home from './content/home/home';
import Login from './content/login/login';
import Registration from './content/registration/registration';

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.setMainBodyContent = this.setMainBodyContent.bind(this);
        this.state = { 
            loadedContent : "login"
         }
    }


    setMainBodyContent(cont){
        this.setState({loadedContent : cont});
    }

    render() { 
        let loadcontent;

        if(this.state.loadedContent==="journey"){
            loadcontent = (
                <Journey/>
            );
        }
        else if(this.state.loadedContent==="recharge"){
            loadcontent = (
                <Recharge/>
            );
        }
        else if(this.state.loadedContent==="login"){
            loadcontent = (
                <Login setMainBodyContent={this.setMainBodyContent}/>
            );
        }
        else if(this.state.loadedContent==="reg"){
            loadcontent = (
                <Registration/>
            );
        }
        else if(this.state.loadedContent==="home"){
            loadcontent = (
                <Home setMainBodyContent={this.setMainBodyContent}/>
            );
        }

        return ( 
            <div>
                {loadcontent}
            </div> 
        );
    }
}
 
export default MainBody;