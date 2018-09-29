import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <div>
                <button className="btn btnskip login btn-outline-dark text-black my-2 my-sm-0" type="button" onClick={()=> this.props.setMainBodyContent("home")}>Skip Login</button>
            </div>
        );
    }
}
 
export default Login;