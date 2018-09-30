import React, { Component } from 'react';
import './recharge.css'
class Recharge extends Component {
    constructor(props) {
        super(props);
        this.validateVerification = this.validateVerification.bind(this);
        this.state = { 
            balance:60,
            account:582065002,
            code:1234
        }
    }

    validateVerification(e){
        console.log(e);

        if(e.keyCode === 13){//pressed enter
            if(e.target.value!==this.state.code.toString())
             alert("Invalid Verification!");
        }
        if(e.target.value===this.state.code.toString()){
                alert("Account Recharged");
            }

            e.preventDefault();
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
                                            <input type="number" className="rechargeInputsAmount" placeholder="0 of 0" id="ramount"/>
                                            <label for="ramount" class="static-value-Recharge">Rs/=</label>
                                        </div>
                                    </div>
                             
                            
                            </div>
                        </div>
                        <br/>
                        <div className="row">

                            <div className="col rechargeCodeClass">
                                    <button type="submit" class="btn btn-secondary btn-lg">Get Code</button> 
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