import React, { Component } from 'react';
import './home.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div >
                            <img class="img-thumbnail imghomebg" src="background.jpg" width="500" alt="Card image cap" />
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button type="button" className="btn btnJourney btn-info" >Journey</button>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button type="button" className="btn btnRecharge btn-info" >Recharge Account</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LandingPage;