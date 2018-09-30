import React, { Component } from 'react';
import Axios from 'axios';
import './tablecompleted.css';

class TableCompleted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journeylist: []
        }
    }

    componentWillMount() {
        this.getJourneyList();
    }

    getJourneyList() {
        Axios.get('http://192.168.8.100:9090/journey/getall/').then(function (res) {
            console.log(res.data);
            this.setState({ journeylist: res.data });
            return res.data;
        }.bind(this)).then(function (data) {
            console.log(data)

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
                            return (
                                <tr key={j}>
                                    <td className="text-left">{
                                        <div>
                                            <p className="font-weight-bold text-dark">{journey.jstarttime}</p>
                                            <hr />
                                            <ul>
                                                <li className="listFrom text-success">{journey.jstartloc}</li>
                                                <p className="lbltime font-italic">8.45am</p>
                                            </ul>
                                            <ul>
                                                <li className="listFrom text-active">{journey.jendloc}</li>
                                                <p className="lbltime font-italic">9.15am</p>
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
            </div>
        );


    }
}

export default TableCompleted;