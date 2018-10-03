import React, { Component } from 'react';
import Journey from './content/journey/journey';
import Recharge from './content/recharge/recharge';
import Home from './content/home/home';
import Login from './content/login/login';
import Registration from './content/registration/registration';
import DigitalPass from './content/digitalpass/digitalpass';

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.setMainBodyContent = this.setMainBodyContent.bind(this);
        this.setLoggedUser = this.setLoggedUser.bind(this);
        this.state = { 
            loadedContent : "login",
            loggeduser : null
         }
    }

    setLoggedUser(user){
        console.log(user);
        this.setState({loggeduser:user});
    }

    setMainBodyContent(cont){
        this.setState({loadedContent : cont});
    }

    render() { 
        let loadcontent;

        if(this.state.loadedContent==="journey"){
            loadcontent = (
                <Journey setMainBodyContent={this.setMainBodyContent} loggeduser={this.state.loggeduser}/>
            );
        }
        else if(this.state.loadedContent==="recharge"){
            loadcontent = (
                <Recharge setMainBodyContent={this.setMainBodyContent} loggeduser={this.state.loggeduser}/>
            );
        }
        else if(this.state.loadedContent==="login"){
            loadcontent = (
                <Login setMainBodyContent={this.setMainBodyContent} loggeduser={this.state.loggeduser} setLoggedUser={this.setLoggedUser}/>
            );
        }
        else if(this.state.loadedContent==="reg"){
            loadcontent = (
                <Registration setMainBodyContent={this.setMainBodyContent} loggeduser={this.state.loggeduser}/>
            );
        }
        else if(this.state.loadedContent==="home"){
            loadcontent = (
                <Home setMainBodyContent={this.setMainBodyContent} loggeduser={this.state.loggeduser}/>
            );
        }
        else if(this.state.loadedContent==="digitalpass"){
            loadcontent = (
                <DigitalPass setMainBodyContent={this.setMainBodyContent} loggeduser={this.state.loggeduser}/>
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