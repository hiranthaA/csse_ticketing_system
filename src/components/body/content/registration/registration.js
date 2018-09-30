import React, { Component } from 'react';
import './registration.css';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 

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

                                <div className="card-header form-group row bg-info">
                                    <h4 className="heading "> Local Registration</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="regUserCard col-sm-6 col-md-6">

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">First Name</label>
                                                        <input type="text" className="form-control" id="lCusFirstName" placeholder="First Name"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Last Name</label>
                                                        <input type="text" className="form-control" id="lCusLastName" placeholder="Last Name"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Date of Birth</label>
                                                        <input type="date" className="form-control" id="lCusDob" placeholder="Address"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">Mobile</label>
                                                        <input type="number" className="form-control" id="lCusMobile" placeholder="Mobile"></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">NIC</label>
                                                        <input type="text" className="form-control" id="lCusNic" placeholder="NIC"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">Password</label>
                                                        <input type="password" className="form-control" id="lCusPassword" placeholder="Password"></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">Confirm Password</label>
                                                        <input type="password" className="form-control" id="lCusPasswordConf" placeholder="Confirm Password"></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="regPaymentCard col-sm-6 col-md-6">
                                            <div className="card-header form-group row border-info">
                                                <h5 className="heading "> Payment Details</h5>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form-group row">
                                                                <label id="label" >Name on Card</label>
                                                                <input type="text" className="form-control" id="fCusCreditCardNo" placeholder="Name on Card"></input>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form-group row">
                                                                <label id="label" >Credit Card No</label>
                                                                <input type="number" className="form-control" id="fCusCreditCardName" placeholder="Card No"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-sm-6 col-md-6">

                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form-group row">
                                                                <label id="label" >CVV</label>
                                                                <input type="text" className="form-control" id="fCusCreditCardName" placeholder="CVV"></input>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form-group row">
                                                                <label id="label" >Expiry MM/YY</label>
                                                                <input type="text" className="form-control" id="fCusCreditCardName" placeholder="MM/YY"></input>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-8">
                                                            <div className="form-group row">
                                                                <label id="label" >Amount</label>
                                                                <input type="text" className="form-control" id="fCusCreditCardName" value="Rs.100.00" readOnly></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12">
                                                    <div className="form-group row">
                                                        <button type="button" class="btn btn-outline-primary btn-block" >Pay & Register</button>
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

                                            <div className="row">
                                                <div className="col-sm-6 col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label" >First Name</label>
                                                        <input type="text" className="form-control" id="fCusFirstName" placeholder="First Name"></input>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Last Name</label>
                                                        <input type="text" className="form-control" id="fCusLastName" placeholder="Last Name"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Date of Birth</label>
                                                        <input type="date" className="form-control" id="fCusDob" ></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <label id="label">Passport Number</label>
                                                        <input type="number" className="form-control" id="fCusPassport" placeholder="Passport Number"></input>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">Password</label>
                                                        <input type="password" className="form-control" id="fCusPassword" placeholder="Password"></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label id="label">Confirm Password</label>
                                                        <input type="password" className="form-control" id="fCusPasswordConf" placeholder="Confirm Password"></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                            <div className="regPaymentCard col-sm-6 col-md-6">
                                                <div className="card-header form-group row border-info">
                                                    <h5 className="heading "> Payment Details</h5>
                                                </div>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6">
                                                         <div className="row">
                                                            <div className="col-sm-12 col-md-12">
                                                                <div className="form-group row">
                                                                    <label id="label" >Name on Card</label>
                                                                    <input type="text" className="form-control" id="fCusCreditCardNo" placeholder="Name on Card"></input>
                                                                </div>
                                                            </div>
                                                         </div>

                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12">
                                                                <div className="form-group row">
                                                                    <label id="label" >Credit Card No</label>
                                                                    <input type="number" className="form-control" id="fCusCreditCardName" placeholder="Card No"></input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-sm-6 col-md-6">

                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12">
                                                                <div className="form-group row">
                                                                    <label id="label" >CVV</label>
                                                                    <input type="text" className="form-control" id="fCusCreditCardName" placeholder="CVV"></input>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12">
                                                                <div className="form-group row">
                                                                    <label id="label" >Expiry MM/YY</label>
                                                                    <input type="text" className="form-control" id="fCusCreditCardName" placeholder="MM/YY"></input>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-6 col-md-8">
                                                                <div className="form-group row">
                                                                    <label id="label" >Amount</label>
                                                                    <input type="text" className="form-control" id="fCusCreditCardName" value="Rs.100.00" readOnly></input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12">
                                                        <div className="form-group row">
                                                            <button type="button" class="btn btn-outline-primary btn-block" >Pay & Register</button>
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