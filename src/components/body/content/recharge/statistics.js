import React, { Component }                                             from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer}  from 'recharts';
import './recharge.css';


class Statistics extends Component {
    constructor(props) {
        super(props);
        this.getJourney = this.getJourney.bind(this);
        this.state = {
            data:""
        }
    }
    componentWillMount(){

    }
    componentDidMount(){
        this.getJourney().then((res)=>{
            var data = [];

            res.forEach((element)=>{
                data.push(JSON.parse(JSON.stringify(element)));
            })
            console.log(data);
            // this.setState({data:data});
            
        });
        console.log()
        window.$('#addStatModal').modal('show');
        window.$('#addStatModal').style="padding-right:0px";
    }

    getJourney(e){
        return new Promise((resolve, reject) => {
                var journey=[];
                if(this.props.loggeduser!==null){

                    
                    fetch("http://localhost:9090/journey/getall/?cid="+this.props.loggeduser.nicorpassport,
                                        {
                                            method: "GET",
                                            async:"false",
                                            headers: {
                                                "Content-Type": "application/json",
                                                "Accept": "application/json"
                                            },
                                            // body:JSON.stringify(body)
                                        }).then((res)=>{
                                            
                                                var response = res.json();
                                                var status = response.then((ress)=>{
                                                    
                                                    journey.pop();
                                                    ress.forEach(element => {
                                                        var time = parseInt((Date.parse( element.jendtime)-Date.parse(element.jstarttime))/1000);
                                                        var date = element.jstarttime.split('T')[0]+" "+ element.jstarttime.split('T')[1].split('+')[0].split('.')[0];
                                                        journey.push((JSON.parse(JSON.stringify({name:date,fare:parseInt(element.jfare),travel:time}))));
                                                    });
                                                   console.log(JSON.stringify(journey));
                                                   this.setState({data:journey});
                                                    // ress.accountQuantity;
                                                }).catch(err=>{
                                                    console.error(err);
                                                })
                        }).catch((err)=>{
                            console.error(err);
                            reject(err);
                        })
                    }else{
                        alert("Please Login");
                       
                    }
                    
                    resolve(journey);

        
        });
        
    }
    render() { 
        var data;
        if(this.state.data!==null){
            data=this.state.data;
        }
        let SimpleLineChart;
        // var a = this.getJourney().then(
        //     (res)=>{
        //         console.log(res+"res");
        //         console.log("a"+a);
        //        a.then((ress)=>{

        //         console.log(ress);
        //         console.log(ress.json());
       console.log(data);
       var array=[];
      
       const dataArray=data;
       data = [
        {name: 'Page A', uv: 4000, pv: 2400},
        {name: 'Page B', uv: 3000, pv: 1398},
        {name: 'Page C', uv: 2000, pv: 9800},
        {name: 'Page D', uv: 2780, pv: 3908},
        {name: 'Page E', uv: 1890, pv: 4800},
        {name: 'Page F', uv: 2390, pv: 2312},
        {name: 'Page G', uv: 3490, pv: 4300},
        ];
        // for (let index = 0; index < dataArray.length; index++) {
        //     array[index]= dataArray.pop();
            
        // }
             
        console.log(data);

                SimpleLineChart = (

                    <div className="modalChartRecharge">
                        <ResponsiveContainer width="95%" height="85%">
                            <LineChart data={this.state.data}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="travel" stroke="#8884d8" activeDot={{r: 8}}/>
                            <Line type="monotone" dataKey="fare" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                );

            //    })
                
                    
            // })
                
            
        
        
        
 
        
        
        return (
            <div className="modal fade bd-example-modal-lg supervisorView" id="addStatModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-Student">
                    
                        
                    
                    <div className="modal-content modal-dialog-Student">
                        <div className="row">
                            <h4>Journey(Spent Time and Fare)</h4>
                        </div>
                        <div className="row">
                            <div className=" col-sm-12 col-md-12 col-lg-12">
                                
                                
                                    {SimpleLineChart}
                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
        );
    }
}
 
export default Statistics;