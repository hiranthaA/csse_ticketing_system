import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedcontent: "reg"
        }
    }

    setHeaderLoadedContent(cont) {
        this.setState({ loadedcontent: cont });
    }

    render() {

        let visiblecontent;

        if (this.state.loadedcontent === "login" || this.state.loadedcontent ==="reg") {
            visiblecontent = (
                <nav class="navbar nodesktop navbar-expand-lg fixed-top navbar-light bg-info">
                    <a class="navbar-brand" href="#">
                        <img src="appLogo.png" width="30" height="30" alt=""/>
                    </a>
                    <a class="navbar-brand" href="#">Travel Pay</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#" >Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" >Journey</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" >Recharge Account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" >Digital Pass</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <button className="btn btnreg btn-outline-dark text-white my-2 my-sm-0" type="button" onClick={() => this.props.setBodyContent("reg")}>Registration</button>
                            <button className="btn btnlogin btn-outline-dark text-white my-2 my-sm-0" type="button" onClick={() => this.props.setBodyContent("login")}>Login</button>
                        </form>
                    </div>
                </nav>
            );
        }
        else if (this.state.loadedcontent === "registration") {
            visiblecontent = null;
        }
        else {
            visiblecontent = (
                <nav class="navbar nodesktop navbar-expand-lg fixed-top navbar-light bg-info">
                    <a class="navbar-brand" href="#">
                        <img src="appLogo.png" width="30" height="30" alt="" onClick={() => this.props.setBodyContent("home")} />
                    </a>
                    <a class="navbar-brand" href="#">Travel Pay</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#" onClick={() => this.props.setBodyContent("home")}>Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => this.props.setBodyContent("journey")}>Journey</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => this.props.setBodyContent("recharge")}>Recharge Account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => this.props.setBodyContent("digitalpass")}>Digital Pass</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <button className="btn btnlogin btn-outline-dark text-white my-2 my-sm-0" type="button" onClick={() => this.props.setBodyContent("login")}>Logout</button>
                        </form>
                    </div>
                </nav>
            );

        }

        return (
            <div>
                {visiblecontent}
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Header;