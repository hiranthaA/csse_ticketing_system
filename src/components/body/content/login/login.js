import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor(props) {

        super(props);

        {/*Binding methods*/}
        this.logUser = this.logUser.bind(this);
        this.state = {

        }
    }

    logUser(){

        //read the values from fields
        var user = document.getElementById("username").value;
        var pwd = document.getElementById("password").value;

        //getting required info from the db
        fetch("http://localhost:9090/customer/getuser/"+user)
            .then(res=>res.json())
            .then(
                (results)=> {

                    //checking whether entered password equal to the password at db
                    if(results.password!=pwd){
                        alert("Username or password Incorrect");
                    }else {

                        //navigate to the home component
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

                {/*starting login form*/}
                <form className="login-form col-sm-8 col-md-8 col-lg-4">
                    <div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
                    <h4 class="modal-title">Login to Your Account</h4>

                    {/*username field*/}
                    <div class="form-group">
                        <input type="text" class="form-control" id="username" placeholder="Username" required="required"/>
                    </div>

                    {/*password field*/}
                    <div class="form-group">
                        <input type="password" class="form-control" id="password" placeholder="Password" required="required"/>
                    </div>

                    {/*login button*/}
                    <input type="button" class="btn btn-primary btn-block bg-info btn-lg" value="Login" onClick={this.logUser}/>
                </form>
                {/*end login form*/}

                {/*Sign up link*/}
                <div class="text-center small">Don't have an account? <a className="text-info" href="#" onClick={()=> this.props.setMainBodyContent("reg")}>Sign up</a></div>
            </div>
            </div>
        );
    }
}
 
export default Login;