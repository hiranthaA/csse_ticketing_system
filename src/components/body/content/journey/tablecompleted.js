import React, { Component } from 'react';
import Axios from 'axios';
import './tablecompleted.css';

class TableCompleted extends Component {
    constructor(props) {
        super(props);
        this.getJourneyDetails = this.getJourneyDetails.bind(this);
        this.state = {
            journeylist: [],
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

    componentWillMount() {
        this.getJourneyList();
    }

    getJourneyList() {
        Axios.get('http://localhost:9090/journey/getall?cid=' + this.props.currentuser + '&status=completed').then(function (res) {
            console.log(res);
            this.setState({ journeylist: res.data });
            return res.data;
        }.bind(this)).then(function (data) {
            console.log(data);

        }.bind(this));
    }

    getJourneyDetails(e) {
        console.log("this is get journey details"+e.target.id);
        Axios.get('http://localhost:9090/journey/getbyid/?jid='+e.target.id).then(function (res) {
            console.log(res.data);
            return res.data;
        }.bind(this)).then(function (data) {
            if(data!==""){
                console.log("data found on passenger");
                this.setState({ journeyid : data.journeyId });
                this.setState({ busid : data.busId });
                this.setState({ busroot : data.busroot });
                this.setState({ jstartloc : data.jstartloc });
                this.setState({ jendloc : data.jendloc });
                this.setState({ jstatus : data.jstatus });
                this.setState({ jfare : data.jfare });
            }
        }.bind(this));
    }

    render() {

        let table;

        if (this.state.journeylist.length !== 0) {
            console.log("data available");
            console.log(this.state.journeylist.length);
            table = (
                <table className="table table-hover table-active">
                    <tbody>
                        {this.state.journeylist.map((journey, j) => {
                            console.log(journey);
                            var  sdate =  new Date(journey.jstarttime);                            
                            var startdate = sdate.toDateString();
                            var starttime = sdate.toLocaleTimeString();
                            var  edate =  new Date(journey.jendtime);                            
                            var enddate = edate.toDateString();
                            var endtime = edate.toLocaleTimeString();
                            console.log(starttime);
                            var  enddate =  new Date(journey.jstarttime); 
                            return (
                                <tr key={j}>
                                    <td className="text-left" id={journey.journeyId} data-toggle="modal" data-target="#viewTicketModal" onClick={this.getJourneyDetails}>{
                                        <div>
                                            <p className="font-weight-bold text-dark">{startdate}</p>
                                            <hr />
                                            <ul>
                                                <li className="listFrom text-success">{journey.jstartloc}</li>
                                                <p className="lbltime font-italic">{starttime}</p>
                                            </ul>
                                            <ul>
                                                <li className="listFrom text-active">{journey.jendloc}</li>
                                                <p className="lbltime font-italic">{endtime}</p>
                                            </ul>
                                            <div className="text-right bg-secondary">
                                                <p className="lbljfare text-white">Rs. {journey.jfare}</p>
                                            </div>
                                        </div>
                                    }
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            );
        }
        else {
            table = "No data available";
        }


        return (
            <div>
                {table}

                <div class="modal fade" id="viewTicketModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h4>ID : { this.state.journeyid}</h4>
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>


            </div>
        );


    }
}

export default TableCompleted;