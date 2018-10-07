import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import './digitalpass.css';

class DigitalPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggeduser : null
        }
    }

    //current logged user will be added to the state
    componentWillMount(){
        this.setState({loggeduser : this.props.loggeduser});
    }

    render() {
        return (
            <div>
                <div className=" digitalpasscard">
                    <div className="row">
                        <div className="col">
                            <h4>Digital Pass</h4>
                            <br />
                            <p>Hold your device over the QR Scanner in the bus</p>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="card qrcard border-info">
                            <QRCode value={this.state.loggeduser.id}></QRCode>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <br />
                            <br />
                            <br />
                            <p>You can use this digital pass instead of your travel card any time.</p>
                        </div>
                        <div className="colRecharge col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <button type="button" className="btn btn-info btnDigiPassGoBack" onClick={() => this.props.setMainBodyContent("home")}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DigitalPass;