import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div class="card homemaincard h-100 w-100" >
                    <img class="card-img-top" src="background2.jpg" alt="Card image" />
                    <div class="card-body">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Welcome to Travel Pay</p>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="row justify-content-center">
                                    {/* <div className="colJourney col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <a href="#" className="btn btnJourney btn-info" onClick={this.props.setMainBodyContent("recharge")}>Journey</a>
                                    </div>
                                    <div className="colRecharge col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <a href="#" className="btn btnRecharge btn-info">Recharge</a>
                                    </div> */}
                                    <div className="colJourney col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <button type="button" className="btn btn-info btnJourney" onClick={()=> this.props.setMainBodyContent("journey")}>Journey</button>
                                    </div>
                                    <div className="colRecharge col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <button type="button" className="btn btn-info btnRecharge" onClick={()=> this.props.setMainBodyContent("recharge")}>Recharge</button>
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