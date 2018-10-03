import React, { Component } from 'react';
import './recharge.css'

const accountSid = 'ACb973d8209fc075d129ff421383aec6b1';
const authToken = '59814d7d40309d08296b1c70e8a46a9e';

const twilio = require('twilio');
const cors = require('cors');
var client = new twilio(accountSid, authToken);

class Recharge extends Component {
    constructor(props) {
        super(props);
        this.validateVerification = this.validateVerification.bind(this);
        this.sendCode = this.sendCode.bind(this);
        this.state = { 
            balance:60,
            account:582065002,
            code:1234
        }
    }
    sendCode(e){
        // fetch("https://api.txtlocal.com/send/",{method:"POST",body:{"apiKey":apiKey,"numbers":numbers,"sender":sender,"message":message}}).then((res)=>{
        //     if(res.status==="success"){
        //         alert("Verification Code Sen");
        //     }
        // });
       /** 
        //TWILIO
        process.env.MY_PHONE_NUMBER            TO STORE MY NUMBER

        */
        client.messages.create({
            to:'+94705143507',
            from:'+18606153924',
            body:'Your Code: '+this.state.code
        }).then((message)=>console.log(message.sid)).catch((err)=>console.log(err));
    }

    validateVerification(e){
        console.log(e);

        if(e.keyCode === 13){//pressed enter
            if(e.target.value!==this.state.code.toString())
             alert("Invalid Verification!");
             e.preventDefault();
        }
        if(e.target.value===this.state.code.toString()){
                alert("Account Recharged");
                
            }

           
    }
    render() { 
        let currentBalance="$"+this.state.balance;
        let currentAccount="Account "+this.state.account.toString().substring(0,3)+" "
                                        +this.state.account.toString().substring(3,6)+" "
                                            +this.state.account.toString().substring(6,9);
        return ( 
            <div>
                <div className="reChargeAccount">
                    <div className="row">
                        <div className="col">
                            <h4>ACCOUNT RECHARGE</h4>
                            <br />
                            <br/>
                            <br />
                        </div>
                    </div>
                     <div className="row justify-content-left">
                        <div className="col">
                            <div className="card bg-light h-100 border-info d-flex p-2">
                                <div class="card-header lead">
                                    <p>{currentBalance}</p>
                                    <br />
                                    <p>{currentAccount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form class="">
                        <div className="row rechargeRowClass">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <br />
                                <br />
                                <br />
                                <p><small>Mobile Number</small></p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <input type="number" className="rechargeInputs" placeholder="Ex: 0771234567" ></input>
                            </div>
                        </div> 
                        <div className="row rechargeRowClass">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <br />
                                <br />
                                <br />
                                <p><small>Recharge Amount</small></p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                
                                    <div class="form-group form-inline">
                                        <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
                                        <div class="form-text-Recharge">
                                            <input type="number" className="rechargeInputsAmount" placeholder="Ex: 100" id="ramount" min={0}/>
                                            <label for="ramount" className="static-value-Recharge">Rs/=</label>
                                        </div>
                                    </div>
                             
                            
                            </div>
                        </div>
                        <br/>
                        <div className="row">

                            <div className="col rechargeCodeClass">
                                    <button type="submit" onSubmit={this.sendCode} class="btn btn-secondary btn-lg">Get Code</button> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <br />
                                <br />
                                <br />
                                <p className="lead">Please enter the 4 digit code received to your mobile to recharge this amount.</p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <input type="number" className="verify-code-recharge" onKeyUp={this.validateVerification}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <br />
                                <br />
                                <br />
                                <p>Go Back</p>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <button type="button" className="btn btn-info btnDigiPassGoBack" onClick={() => this.props.setMainBodyContent("home")}>Go Back</button>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        );
    }
}
 
export default Recharge;