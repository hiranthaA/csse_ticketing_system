import React, { Component } from 'react';
import './registration.css';

class Registration extends Component {
    constructor(props) {
        super(props);

        {/*Binding methods*/}
        this.addForeignCustomer = this.addForeignCustomer.bind(this);
        this.addLocalCustomer = this.addLocalCustomer.bind(this);
        this.state = { 

        }
    }

    //adding a foreign customer function
    addForeignCustomer(){

        //get the value of text boxes
        var ffname = document.getElementById("fCusFirstName").value;
        var flname = document.getElementById("fCusLastName").value;
        var fdob = document.getElementById("fCusDob").value;
        var fpass = document.getElementById("fCusPassport").value;
        var fpwd = document.getElementById("fCusPassword").value;
        var fpwdcnf = document.getElementById("fCusPasswordConf").value;
        var fcrdno = document.getElementById("fCusCreditCardNo").value;
        var fcrdname = document.getElementById("fCusCreditCardName").value;
        var fcvv = document.getElementById("fCusCvv").value;
        var fexpiry = document.getElementById("fCusExpiry").value;


        //checking for validations
        if(ffname==""){
            alert("First Name Required");
        }else if(flname==""){
            alert("Last Name Required");
        }else if(fdob==""){
            alert("Date of Birth Required");
        }else if(fpass==""){
            alert("NIC Number Required");
        }else if(fpwd==""){
            alert("Password Required");
        }else if(fcrdno==""){
            alert("Payment Details Required");
        }else if(fcrdname==""){
            alert("Payment Details Required");
        }else if(fcvv==""){
            alert("Payment Details Required");
        }else if(fexpiry==""){
            alert("Payment Details Required");
        }else if(fpwd!=fpwdcnf){
            alert("Password Not Matching");
        }else{
            var bal=100;
            var obj1 ={
                nicorpassport : fpass,
                fname : ffname,
                lname : flname,
                dob : fdob,
                password : fpwd,
                balance : bal,
                customerType : "foreign"

            }
            console.log(obj1);

            //pass api call for the validation of user to check whether he already registered with the system
            fetch("http://localhost:9090/customer/getuser/"+fpass)
                .then(res=>res.json())
                .then(
                    (results)=> {

                            alert("The Passport Number is already Registered with the system");

                    },
                    (response) => {
                        //adding customer to database
                        fetch('http://localhost:9090/customer/add', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json, text/plain',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(obj1)
                        }).then(function (data) {
                            /*alert("Succesfully Registered!");*/
                            return data.json();
                        }).then(function (data){
                            console.log("return2", data);
                            var passengerId = (data.nicorpassport);
                            var objAcc = {
                                passengerId: passengerId,
                                accountQuantity: 100
                            };
                            //adding customer account to the account table
                            return fetch('http://localhost:9090/accounts/add', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json, text/plain',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(objAcc)
                            }).then(function () {
                                alert("Succesfully Registered! Please Login...");
                            });
                        })
                    }
                )


        }

    }

    //adding a local customer function
    addLocalCustomer(){

        //get the user entered values of text boxes
        var lfname = document.getElementById("lCusFirstName").value;
        var llname = document.getElementById("lCusLastName").value;
        var ldob = document.getElementById("lCusDob").value;
        var lmob = document.getElementById("lCusMobile").value;
        var lnic = document.getElementById("lCusNic").value;
        var lpwd = document.getElementById("lCusPassword").value;
        var lpwdcnf = document.getElementById("lCusPasswordConf").value;
        var lcrdno = document.getElementById("lCusCreditCardNo").value;
        var lcrdname = document.getElementById("lCusCreditCardName").value;
        var lcvv = document.getElementById("lCusCvv").value;
        var lexpiry = document.getElementById("lCusExpiry").value;

        //check for the basic validations
        if(lfname==""){
            alert("First Name Required");
        }else if(llname==""){
            alert("Last Name Required");
        }else if(ldob==""){
            alert("Date of Birth Required");
        }else if(lmob==""){
            alert("Contact Number Required");
        }else if(lnic==""){
            alert("NIC Number Required");
        }else if(lpwd==""){
            alert("Password Required");
        }else if(lcrdno==""){
            alert("Payment Details Required");
        }else if(lcrdname==""){
            alert("Payment Details Required");
        }else if(lcvv==""){
            alert("Payment Details Required");
        }else if(lexpiry==""){
            alert("Payment Details Required");
        }else if(lpwd!=lpwdcnf){
            alert("Password Not Matching");
        }else if(lmob.length!=10){
            alert("Incorrect Mobile Number");
        }else{
            var bal=0;
            var obj ={
                nicorpassport : lnic,
                fname : lfname,
                lname : llname,
                dob : ldob,
                mobile : lmob,
                password : lpwd,
                balance : bal,
                customerType : "local",
            }
            console.log(obj);
            //pass api call to validate whether the entered nic already used
            fetch("http://localhost:9090/customer/getuser/"+lnic)
                .then(res=>res.json())
                .then(
                    (results)=> {

                            alert("The NIC Number is already Registered with the system");

                    },
                    (error) => {
                        //adding customer to the customer table
                        fetch('http://localhost:9090/customer/add', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json, text/plain',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(obj)
                        }).then(function (data) {
                            /*alert("Succesfully Registered!");*/
                            return data.json();
                        }).then(function (data){
                            console.log("return2", data);
                            var passengerId = (data.nicorpassport);
                            var objAcc = {
                                passengerId: passengerId,
                                accountQuantity: 100
                            };
                            //adding customer to the account table
                            return fetch('http://localhost:9090/accounts/add', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json, text/plain',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(objAcc)
                            }).then(function () {
                                alert("Succesfully Registered! Please Login...");
                            });
                        })
                    }
                )
            /*fetch('http://localhost:9090/customer/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(function (data) {
                /!*alert("Succesfully Registered!");*!/
                return data.json();
            }).then(function (data){
                console.log("return2", data);
                var passengerId = (data.nicorpassport);
                var objAcc = {
                    passengerId: passengerId,
                    accountQuantity: 0
                };
                return fetch('http://localhost:9090/accounts/add', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(objAcc)
                }).then(function () {
                    alert("Succesfully Registered!");
                });
            })*/

        }


    }

    render() { 
        return (
            <div className="content card ">
                <div className="card header">
                    <div className="card-header form-group row bg-info">
                        <h4 className="heading "><i class="fas fa-user-plus"></i> Registration</h4>
                    </div>

                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"> Local </a>
                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Foreign </a>
                        </div>
                    </nav>
                </div>

                <div className="card body">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="content card ">

                                {/*Local Customer Registration form begins*/}

                                <div className="card-header form-group row bg-info">
                                    <h4 className="heading "> Local Registration</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="regUserCard col-sm-6 col-md-6">

                                            {/*First Name field of the Customer*/}
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">First Name</label>
                                                        <input type="text" className="form-control" id="lCusFirstName" placeholder="First Name"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*Last Name field of the Customer*/}
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Last Name</label>
                                                        <input type="text" className="form-control" id="lCusLastName" placeholder="Last Name"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*Date of birth field of the Customer*/}
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Date of Birth</label>
                                                        <input type="date" className="form-control" id="lCusDob" placeholder="Address"></input>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                {/*Mobile Number field of the Customer*/}
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">Mobile</label>
                                                        <input type="number" className="form-control" id="lCusMobile" placeholder="Mobile"></input>
                                                    </div>
                                                </div>
                                                {/*NIC Number field of the Customer*/}
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">NIC (This will be your Username)</label>
                                                        <input type="text" className="form-control" id="lCusNic" placeholder="NIC"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/*Password field of the Customer*/}
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">Password</label>
                                                        <input type="password" className="form-control" id="lCusPassword" placeholder="Password"></input>
                                                    </div>
                                                </div>
                                                {/*Confirm Password field of the Customer*/}
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">Confirm Password</label>
                                                        <input type="password" className="form-control" id="lCusPasswordConf" placeholder="Confirm Password"></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*Payment Details of the Customer*/}
                                        <div className="regPaymentCard col-sm-6 col-md-6">
                                            <div className="card-header form-group row border-info">
                                                <h5 className="heading "> Payment Details</h5>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">

                                                   {/* Card Name field of the Customer*/}
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form-group row">
                                                                <label id="label" >Name on Card</label>
                                                                <input type="text" className="form-control" id="lCusCreditCardName" placeholder="Name on Card"></input>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*Card Number field of the Customer*/}
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form-group row">
                                                                <label id="label" >Credit Card No</label>
                                                                <input type="number" className="form-control" id="lCusCreditCardNo" placeholder="Card No"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-sm-6 col-md-6">

                                                    {/*CVV field of the Customer*/}
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form-group row">
                                                                <label id="label" >CVV</label>
                                                                <input type="text" className="form-control" id="lCusCvv" placeholder="CVV"></input>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/*Expiry Date field of the Customer*/}
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form-group row">
                                                                <label id="label" >Expiry MM/YY</label>
                                                                <input type="text" className="form-control" id="lCusExpiry" placeholder="MM/YY"></input>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*Initial Amount of the Customer*/}
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-8">
                                                            <div className="form-group row">
                                                                <label id="label" >Amount</label>
                                                                <input type="text" className="form-control" value="Rs.100.00" readOnly></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                </div>
                                            </div>
                                           {/* Payment Form ends*/}

                                            {/*Registration button of the customer*/}
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12">
                                                    <div className="form-group row">
                                                        <button type="button" class="btn btn-outline-primary btn-block" onClick={this.addLocalCustomer}>Pay & Register</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

          {/*Starting form foreign customer registration*/}

                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="content card ">

                                <div className="card-header form-group row bg-info">
                                    <h4 className="heading "> Foreign Registration</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="regUserCard col-sm-6 col-md-6">

                                            {/*First Name field of the Customer*/}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label" >First Name</label>
                                                        <input type="text" className="form-control" id="fCusFirstName" placeholder="First Name"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*Last Name field of the Customer*/}
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Last Name</label>
                                                        <input type="text" className="form-control" id="fCusLastName" placeholder="Last Name"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*Date of birth field of the Customer*/}
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Date of Birth</label>
                                                        <input type="date" className="form-control" id="fCusDob" ></input>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*Passport Number field of the Customer*/}
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Passport Number (This will be your Username)</label>
                                                        <input type="number" className="form-control" id="fCusPassport" placeholder="Passport Number"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">

                                                {/*Password field of the Customer*/}
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">Password</label>
                                                        <input type="password" className="form-control" id="fCusPassword" placeholder="Password"></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">

                                                    {/*Confirm Password field of the Customer*/}
                                                    <div className="form-group row">
                                                        <label id="label">Confirm Password</label>
                                                        <input type="password" className="form-control" id="fCusPasswordConf" placeholder="Confirm Password"></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*Payment Details form of the Customer*/}
                                            <div className="regPaymentCard col-sm-6 col-md-6">
                                                <div className="card-header form-group row border-info">
                                                    <h5 className="heading "> Payment Details</h5>
                                                </div>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6">

                                                        {/*Card Name field of the Customer*/}
                                                         <div className="row">
                                                            <div className="col-sm-12 col-md-12">
                                                                <div className="form-group row">
                                                                    <label id="label" >Name on Card</label>
                                                                    <input type="text" className="form-control" id="fCusCreditCardName" placeholder="Name on Card"></input>
                                                                </div>
                                                            </div>
                                                         </div>

                                                        {/*Card No field of the Customer*/}
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12">
                                                                <div className="form-group row">
                                                                    <label id="label" >Credit Card No</label>
                                                                    <input type="number" className="form-control" id="fCusCreditCardNo" placeholder="Card No"></input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-sm-6 col-md-6">

                                                        {/*CVV field of the Customer*/}
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12">
                                                                <div className="form-group row">
                                                                    <label id="label" >CVV</label>
                                                                    <input type="text" className="form-control" id="fCusCvv" placeholder="CVV"></input>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/*Expiry Date field of the Customer*/}
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12">
                                                                <div className="form-group row">
                                                                    <label id="label" >Expiry MM/YY</label>
                                                                    <input type="text" className="form-control" id="fCusExpiry" placeholder="MM/YY"></input>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/*Amount field of the Customer*/}
                                                        <div className="row">
                                                            <div className="col-sm-6 col-md-8">
                                                                <div className="form-group row">
                                                                    <label id="label" >Amount</label>
                                                                    <input type="text" className="form-control"  value="Rs.100.00" readOnly></input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </div>
                                                </div>

                                                {/*Registration button of the foreign Customer*/}
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12">
                                                        <div className="form-group row">
                                                            <button type="button" class="btn btn-outline-primary btn-block" onClick={this.addForeignCustomer} >Pay & Register</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Registration;