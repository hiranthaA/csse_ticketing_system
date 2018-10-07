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
            busroute : null,
            jstartloc : null,
            jendloc : null,
            jstarttime : null,
            jendtime : null,
            jstatus : null,
            jfare : null,
            currloc : null,
            onboarddetails : null,
            startlocname : null,
            endlocname : null
         }
    }

    componentDidMount() {
        this.getOnboard();
    }
    
    async loadData(busid) {
        this.setState({busid:busid});
        try {
            const res = await fetch('http://localhost:9090/bus/getcurrentlocation?busId='+this.state.onboarddetails.busId).then(res=>res.json())
            .then((results)=> {
                    Axios.get('http://localhost:9090/route/getHalt?routeId='+this.state.onboarddetails.busroute+'&haltIndex='+results.currentLocation).then(function (res) {
                        console.log(res.data);
                        this.setState({endlocname : res.data.name});
                        return res.data;
                    }.bind(this))
                }
            );
        } catch (e) {
            console.log(e);
        }
    }


    getOnboard() {
        Axios.get('http://localhost:9090/journey/getonboardcust/?cid='+this.props.currentuser).then(function (res) {
            console.log(res.data);
            return res.data;
        }.bind(this)).then(function (onboarddata) {
            if(onboarddata!==""){
                this.setState({onboarddetails : onboarddata});
                var busroute=onboarddata.busroute;
                var startloc = onboarddata.jstartloc;
                var startlocname;

                Axios.get('http://localhost:9090/route/getHalt?routeId='+busroute+'&haltIndex='+startloc).then(function(res){
                    console.log(res);
                    startlocname = res.data.name;
                    return res.data;
                    }.bind(this)).then(function(res){
                        console.log(res);
                        console.log(startlocname);
                        
                        Axios.get('http://localhost:9090/bus/getcurrentlocation?busId='+this.state.onboarddetails.busId).then(function (data) {
                            console.log(data.data);
                            this.setState({currloc: data.data.currentLocation});
                            return data.data.currentLocation;
                        }.bind(this)).then(function(data){
                            console.log(data);
                            this.loadData(onboarddata.busId);
                            setInterval(this.loadData, 30000);
                            Axios.get('http://localhost:9090/route/getHalt?routeId='+busroute+'&haltIndex='+data).then(function(res){
                                console.log(res);
                                console.log(res.data.name);
                                return res.data.name;
                            }.bind(this)).then(function(endlocname){
                                console.log("data found on passenger");
                                this.setState({ onboardStatus: true });
                                this.setState({ journeyid : onboarddata.journeyId });
                                this.setState({ busid : onboarddata.busId });
                                this.setState({ busroute : onboarddata.busroute });
                                this.setState({ jstartloc : onboarddata.jstartloc });
                                this.setState({ jstatus : onboarddata.jstatus });
                                this.setState({ jfare : onboarddata.jfare });
                                this.setState({startlocname:startlocname});
                                this.setState({endlocname : endlocname});
                            }.bind(this));
                        }.bind(this));
                    }.bind(this));
            }else{
                console.log("data not found on passenger");
                this.setState({ onboardStatus: false });
                this.setState({ journeyid : "" });
                this.setState({ busid : "" });
                this.setState({ busroute : "" });
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
                    <h3 className="text-success">{this.state.startlocname}</h3>
                    <p className="font-italic">currently at</p>
                    <h3 className="text-info">{this.state.endlocname}</h3>
                    <p>{this.state.jstarttime}</p>
                    <p>Route  : {this.state.busroute}</p>
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