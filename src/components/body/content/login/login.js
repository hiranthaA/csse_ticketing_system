import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor(props) {

        super(props);
        this.logUser = this.logUser.bind(this);
        this.state = {

        }
    }

    logUser(){
        var user = document.getElementById("username").value;
        var pwd = document.getElementById("password").value;

        fetch("http://localhost:9090/customer/getuser/"+user)
            .then(res=>res.json())
            .then(
                (results)=> {

                    if(results.password!=pwd){
                        alert("Username or password Incorrect");
                    }else {
                        this.props.setLoggedUser(results);
                        this.props.setMainBodyContent("home");

                    }
                    },
                (error) => {
                    alert("Username or password Incorrect");
                }
            )



    }
    render() { 
        return (
            <div className="body-login col-sm-12 col-md-12 col-lg-12">
            <div className="login-form col-sm-8 col-md-8 col-lg-12">
                <form className="login-form col-sm-8 col-md-8 col-lg-4">
                    <div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
                    <h4 class="modal-title">Login to Your Account</h4>
                    <div class="form-group">
                        <input type="text" class="form-control" id="username" placeholder="Username" required="required"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="password" placeholder="Password" required="required"/>
                    </div>

                    <input type="button" class="btn btn-primary btn-block bg-info btn-lg" value="Login" onClick={this.logUser}/>
                </form>
                <div class="text-center small">Don't have an account? <a className="text-info" href="#" onClick={()=> this.props.setMainBodyContent("reg")}>Sign up</a></div>
            </div>
            </div>
        );
    }
}
 
export default Login;