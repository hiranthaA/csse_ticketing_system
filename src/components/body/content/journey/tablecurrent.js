import React, { Component } from 'react';
import Axios from 'axios';

class TableCurrent extends Component {
    constructor(props) {
        super(props);
        this.getOnboard = this.getOnboard.bind(this);
        this.state = {
            onboardStatus : null, 
            journeyid : null,
            busid : null,
            busroot : null,
            jstartloc : null,
            jendloc : null,
            jstarttime : null,
            jendtime : null,
            jstatus : null,
            jfare : null
         }
    }

    componentWillMount(){
        this.getOnboard();
    }
    getOnboard() {
        Axios.get('http://localhost:9090/journey/getonboardcust/?cid='+this.props.currentuser).then(function (res) {
            console.log(res.data);
            return res.data;
        }.bind(this)).then(function (data) {
            if(data!==""){
                console.log("data found on passenger");
                this.setState({ onboardStatus: true });
                this.setState({ journeyid : data.journeyId });
                this.setState({ busid : data.busId });
                this.setState({ busroot : data.busroot });
                this.setState({ jstartloc : data.jstartloc });
                this.setState({ jendloc : data.jendloc });
                this.setState({ jstatus : data.jstatus });
                this.setState({ jfare : data.jfare });
            }else{
                console.log("data not found on passenger");
                this.setState({ onboardStatus: false });
                this.setState({ journeyid : "" });
                this.setState({ busid : "" });
                this.setState({ busroot : "" });
                this.setState({ jstartloc : "" });
                this.setState({ jendloc : "" });
                this.setState({ jstatus : "" });
                this.setState({ jfare : "" });
            }
        }.bind(this));
    }

    render() { 

        let onboardcontent;

        if(this.state.onboardStatus){
            onboardcontent = (
                <div>
                    <br/>
                    <p className="font-weight-bold ">You are Onboard</p>
                    <p>Bus Route  : {this.state.busroot}</p>
                    <p className="font-italic">from</p>
                    <h3 className="text-success">{this.state.jstartloc}</h3>
                    <p>{this.state.jstarttime}</p>
                    <p>Journey ID : </p>
                    <p>{this.state.journeyid}</p>
                </div>
            );
        }
        else{
            onboardcontent = "You are not onboard yet!";
        }
        return ( 
            <table className="table table-hover table-active">
                <tbody>
                    <tr>
                        {onboardcontent}
                    </tr>
                </tbody>
            </table>
        );
    }
}
 
export default TableCurrent;