import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggeduser : null
        }

    }

    componentWillMount(){
        this.setState({loggeduser:this.props.loggeduser});
        console.log(this.props.loggeduser);
    }

    render() {
        return (
            <div>
                <div class="card homemaincard h-100 w-100" >
                    <img class="card-img-top" src="background2.jpg" alt="Card image" />
                    <div class="card-body">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Welcome to Travel Pay</p>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                                <div className="row justify-content-left">
                                    <div className="colJourney col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                        <button type="button" className="btn btn-info btnJourney" onClick={()=> this.props.setMainBodyContent("journey")}>Journey</button>
                                    </div>
                                    <div className="colRecharge col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12">
                                        <button type="button" className="btn btn-info btnRecharge" onClick={()=> this.props.setMainBodyContent("recharge")}>Recharge</button>
                                    </div>
                                    <div className="colRecharge col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12">
                                        <button type="button" className="btn btn-info btnDigiPass" onClick={()=> this.props.setMainBodyContent("digitalpass")}>Digital Pass</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;