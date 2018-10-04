import React, { Component } from 'react';
import Axios from 'axios';

class TableCurrent extends Component {
    constructor(props) {
        super(props);
        this.getOnboard = this.getOnboard.bind(this);
        this.loadData = this.loadData.bind(this);
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
            jfare : null,
            currloc : null
         }
    }

    componentWillMount(){
        this.getOnboard();
    }


    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 30000);
    }
    
    async loadData() {
        try {
        const res = await fetch('http://localhost:9090/bus/getcurrentlocation?busId=LT-8712');
        const blocks = await res.json();
        const curloc = blocks.currentLocation;
        console.log(curloc);
        this.setState({currloc: curloc});
    } catch (e) {
        console.log(e);
    }
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
                    <p className="font-italic">from</p>
                    <h3 className="text-success">{this.state.jstartloc}</h3>
                    <p className="font-italic">currently at</p>
                    <h3 className="text-info">{this.state.currloc}</h3>
                    <p>{this.state.jstarttime}</p>
                    <p>Route  : {this.state.busroot}</p>
                    <p>Bus  : {this.state.busid}</p>
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