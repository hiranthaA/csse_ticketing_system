import React, { Component } from 'react';
import './recharge.css';
import Account              from './account';


class Recharge extends Component {
    constructor(props) {
        super(props);
        this.validateVerification = this.validateVerification.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.sendCode = this.sendCode.bind(this);
        this.checkCode = this.checkCode.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.addAccount = this.addAccount.bind(this);
        
        this.state = { 
            balance:"",
            account:"",
            code:0,
            phoneNo:"",
            amount:0,
            createAccount:false,
            customerID:"",
            loggedIn:false,
        }
    }
    componentDidUpdate(){

    }
    componentWillMount(){

    }
    componentDidMount(){
        if(this.props.loggeduser!==null){
            console.log(this.props.loggeduser);
            this.setState({phoneNo:this.props.loggeduser.mobile,loggedIn:true});
            document.getElementById("userMobile").value=this.props.loggeduser.mobile;
        }else{

            alert("You are not logged in!");
            this.setState({loggedIn:false})
        }
    }
    addAccount(e){
        this.setState({createAccount:true});
        var element = document.getElementById("addAccModal")
        if(this.state.createAccount===true&&element!==null){
            window.$('#addAccModal').modal('show');
            window.$('#addAccModal').style="padding-right:0px";
        }
    }
    checkCode(e){
        var code = e.target.value;
        this.setState({code:code});
    }
    sendCode(e){
        
        alert(this.state.phoneNo);
        var body = {"accountQuantity":this.state.amount,"phoneNo":this.state.phoneNo};
        fetch("http://localhost:9090/accounts/sendSMS",{
                                    method: "POST",
                                    async:"false",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Accept": "application/json"
                                    },
                                    body:JSON.stringify(body)}).then((res)=>{
            debugger;
            var response = res.json();
            console.log(response);
            var status = response.then((ress)=>{
                console.log(ress);
                ress.accountQuantity;
                if(ress!==null&&ress.accountQuantity!==""){
                    this.setState({balance:ress.accountQuantity,account:ress.accountNo});
                    alert("Code sent to the phone number");
                }else{
                    console.error(ress);
                }

            }).catch((err)=>{
                console.error(err);
            });
            

        }).catch((err)=>{
            debugger;
            console.log(err);
            alert("Error!");
        });
    }
    handleAmount(e){
        var amount = e.target.value;
        amount = parseFloat(amount);
        this.setState({amount:amount});
    }
    handlePhone(e){
        var Phone=e.target.value
        this.setState({phoneNo:Phone});

    }

    validateVerification(e){

        console.log(e);
        var body = {"accountQuantity":this.state.amount,"phoneNo":this.state.phoneNo};
        fetch("http://localhost:9090/accounts/recharge/"+this.state.code,{
                                    method: "POST",

                                    headers: {
                                        "Content-Type": "application/json",
                                        "Accept": "application/json",
                                    },
                                    body:JSON.stringify(body)}).then((res)=>{
            debugger;
            var response = res.json();
            var status = response.then((ress)=>{
                if(ress.accountQuantity!==null){
                    this.setState({balance:ress.accountQuantity,account:ress.accountNo});
                    alert(this.state.phoneNo+" is  billed Rs/= "+this.state.amount);
                }
            }).catch((err)=>{
                console.error(err);
            })
            // var a = res.json().accountQuantity;
            // a = res.json()[["PromiseValue"]].accountQuantity;
            // console.log(a);
            
            
        }).catch((err)=>{
            console.log(err);
            alert("Error");
        })

        if(e.keyCode === 13){//pressed enter
            if(e.target.value!==this.state.code.toString())
             alert("Invalid Verification!");
             e.preventDefault();
        }
        if(e.target.value===this.state.code.toString()){
                // alert("Account Recharged");
                
            }

           
    }
    render() { 
        var form;
        if(this.state.loggedIn===false){
            form = (
                <form class="content">
                            <div className="row rechargeRowClass">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <br />
                                    <br />
                                    <br />
                                    <p><small>Mobile Number</small></p>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <input type="number" className="rechargeInputs" id="userMobile" placeholder="Ex: 0771234567" onChange={this.handlePhone}></input>
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
                                                <input type="number" className="rechargeInputsAmount" placeholder="Ex: 100" id="ramount" min={0} onChange={this.handleAmount}/>
                                                <label for="ramount" className="static-value-Recharge">Rs/=</label>
                                            </div>
                                        </div>
                                
                                
                                </div>
                            </div>
                            <br/>
                            <div className="row">

                                <div className="col rechargeCodeClass">
                                        <button type="submit" onClick={this.sendCode} class="btn btn-secondary btn-lg" disabled={true}>Get Code</button> 
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
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <input type="number" className="verify-code-recharge rechargeInputs" placeholder="Enter your 4 digit Code Here" onChange={this.checkCode}></input>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <button type="button"   className="btn btn-success createAccountPay" disabled={true} onClick={this.validateVerification}>Submit Code</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">

                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                    
                                    <h3 className="rechargeText"><font color="green">No Account!</font></h3>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <button type="button" className="btn btn-success createAccountPay" onClick={this.addAccount} disabled={true}>Create Account</button>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                    <button type="button" className="btn btn-info" onClick={() => this.props.setMainBodyContent("home")}>Go Back</button>
                                </div>
                            </div>
                        </form> 
            );
        }else{
            form = (
                <form class="content">
                            <div className="row rechargeRowClass">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <br />
                                    <br />
                                    <br />
                                    <p><small>Mobile Number</small></p>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <input type="number" className="rechargeInputs" id="userMobile" placeholder="Ex: 0771234567" onChange={this.handlePhone}></input>
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
                                                <input type="number" className="rechargeInputsAmount" placeholder="Ex: 100" id="ramount" min={0} onChange={this.handleAmount}/>
                                                <label for="ramount" className="static-value-Recharge">Rs/=</label>
                                            </div>
                                        </div>
                                
                                
                                </div>
                            </div>
                            <br/>
                            <div className="row">

                                <div className="col rechargeCodeClass">
                                        <button type="submit" onClick={this.sendCode} class="btn btn-secondary btn-lg">Get Code</button> 
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
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <input type="number" className="verify-code-recharge rechargeInputs" placeholder="Enter your 4 digit Code Here" onChange={this.checkCode}></input>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <button type="button"   className="btn btn-success createAccountPay" onClick={this.validateVerification}>Submit Code</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">

                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                    
                                    <h3 className="rechargeText"><font color="green">No Account!</font></h3>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <button type="button" className="btn btn-success createAccountPay" onClick={this.addAccount}>Create Account</button>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                    <button type="button" className="btn btn-info" onClick={() => this.props.setMainBodyContent("home")}>Go Back</button>
                                </div>
                            </div>
                        </form> 
            );
        }
        let addAccount;
        if(this.state.createAccount!==false){
            
            addAccount =(<Account account={this.state} loggeduser={this.props.loggeduser}/>);
        }
        var account = this.state.customerID.substring(0,3)+this.state.phoneNo.substring(3,9)
        let currentBalance=""+this.state.balance;
        let currentAccount=""+account.substring(0,3)+" "
                                        +account.substring(3,6)+" "
                                            +account.toString().substring(6,9);
        let phoneNum = ""+this.state.phoneNo;
        let div=(<div></div>);
        let bal = (<div></div>);
        let acc = (<div></div>);
        let pho = (<div></div>);
        if(this.state.phoneNo!==""){
            pho=(<h5>Phone No:   <small>{phoneNum}</small></h5>);
            if(this.state.balance!=="")
                bal=(<h5>Balance:    <small>{currentBalance}</small></h5>);
            if(this.state.account!=="")
                acc=(<h5>Account No: <small>{currentAccount}</small></h5>);
            
            div =       (
                                        <div className="row justify-content-left">
                                        <div className="col">
                                            <div className="card bg-light h-100 border-info d-flex p-2">
                                                <div class="card-header lead">
                                                            <h4>Account Information</h4>
                                                            {bal}
                                                            {acc}
                                                            {pho}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                     )    
            
        }
        return ( 
            <div>
                <div className="reChargeAccount card bg-light border-info d-flex p-2">
                    <div className="row card-header bg-info">
                        <div className="col">
                            <h4>ACCOUNT RECHARGE</h4>
                            <br />
                            <br/>
                            <br />
                        </div>
                    </div>
                    {div}
                        <div className="card-body">
                        {form}
                    </div>
                </div>
                {addAccount}
            </div>
        );
    }
}
 
export default Recharge;