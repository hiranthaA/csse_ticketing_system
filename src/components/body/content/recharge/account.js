import React, { Component } from 'react';

class Account extends Component {
    constructor(props) {
        super(props);
        this.mobileChange = this.mobileChange.bind(this);
        this.cardChange = this.cardChange.bind(this);
        this.nicChange = this.nicChange.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.state = { 
            phoneNo:"",
            cardNo:"",
            nic:""
        }
    }
    componentDidUpdate(){

    }
    componentWillMount(){

    }
    componentDidMount(){
        this.setState({
            nic:this.props.loggeduser.nicorpassport,
            phoneNo:this.props.loggeduser.mobile
        })
        document.getElementById("NIC").value = this.props.loggeduser.nicorpassport;
        document.getElementById("mobileNo").value = this.props.loggeduser.mobile;
        window.$('#addAccModal').modal('show');
        window.$('#addAccModal').style="padding-right:0px";
    }
    validate(){
        var valid=false;
        var validPhone=false;
        var validNIC = false;
        var validCard =false;
        var text;
        text = this.state.phoneNo;
        if(text===""){
            validPhone = false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(text)){
            validPhone =  false;
        } else {

            validPhone =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(text);
        }  

        text = this.state.nic;
        if(text===""){
            validNIC= false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(text)){
            validNIC= false;
        } else {

            validNIC= /[0-9]{9}[VvXx]/.test(text);
            
        }

        text = this.state.cardNo;
        var format = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/
        if(format.test(text)){
            validCard= false;
        } else {
            validCard= true;
            // validCard= /^\[0-9]{9}[VvXx]$/.test(text);
            
        }
        if(validCard&&validNIC&&validPhone){
            valid=true;
        }

        return valid;
    }
    nicChange(e){
        this.setState({nic:e.target.value});
    }
    mobileChange(e){
        this.setState({phoneNo:e.target.value});
    }
    cardChange(e){
        this.setState({cardNo:e.target.value});
    }
    createAccount(e){
        var accountNo = this.state.nic.substring(0,3)+this.state.phoneNo.substring(3,9);
        var body = {"cardNo":this.state.cardNo,"phoneNo":this.state.phoneNo,"passengerId":this.state.nic,"accountNo":accountNo};
        if(this.validate())
            fetch("http://localhost:9090/accounts/add",{
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                            "Accept": "application/json",
                                        },
                                        body:JSON.stringify(body)}).then((res)=>{
                            var response = res.json();
                            var status = response.then((ress)=>{
                                if(ress.nic!==null){

                                    alert("Account created for: "+ress.passengerId);
                                }
                            }).catch((err)=>{
                                console.error(err);
                            });
            });
    }
    render() { 
        return ( 
            <div>
                <div className="modal fade bd-example-modal-lg supervisorView" id="addAccModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-Student">
                    <div className="modal-content">
                        
                        <div className="card bg-light h-100 border-info d-flex p-2">
                            <div class="card-header bg-info lead">
                                                                    <h3>Create Account</h3>
                                                                    
                            </div>
                            <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <label for="NIC">Enter NIC:<font color="red">*</font></label>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <input type="text" id="NIC" placeholder="Ex: 901121234v -Required" value={this.state.nic} onChange={this.nicChange}  required={true}></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <label for="phoneNo">Enter Mobile No:<font color="red">*</font></label>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <input type="number" id="mobileNo" placeholder="Ex: 0712345678  -Required" onChange={this.mobileChange} required={true}></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <label for="cardNo">Enter Card(Debit/Credit) No:</label>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <input type="number" id="cardNo" placeholder="Optional" onChange={this.cardChange}></input>
                                                </div>
                                            </div>
                                            
                            </div>
                            <div className="card-footer">
                                    <button className="btn btn-outline-dark text-black my-2 my-sm-0" type="button" onClick={this.createAccount}>Create Account</button>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Account;