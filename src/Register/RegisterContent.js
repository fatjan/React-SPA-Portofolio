import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";
import { withRouter } from "react-router-dom";

class RegisterContent extends Component {
    doRegister = () => {
        this.props.registerUser().then( () => {
            if (this.props.is_login === true) {
                alert("Register successful. Hi, "+this.props.fullName+". Happy Shopping.")
                this.props.history.replace("/profile")
            }
            else {
                alert("Failed to register. Username has been used before. Try using another username. Thank you.")
            }
        });
    }

    // handleClickToHome = e => {
    //     this.props.history.replace("/");   
    // }
    
    render() {
      return (
          <section>
                <div class="container">
                    <div class="row">
                    <div className="col-md-3">
                    </div>
                        <div class="col-md-9 col-lg-9 col-sm-12 text-center">
                            <h1 style={{marginTop:"150px"}}>Register</h1>
                            <form action="#" name="registration" onSubmit={e => e.preventDefault()}>
                            <div class="form-group">
                                <label for="Username">User Name</label>
                                <input type="text" name="username" class="form-control" id="username" aria-describedby="emailHelp"
                                placeholder="Enter Username" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <label for="Fullname">Full Name</label>
                                <input type="text" name="fullName" class="form-control" id="firstname" aria-describedby="emailHelp"
                                placeholder="Enter Fullname" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <label for="Password">Password</label>
                                <input type="password" name="password" id="password" class="form-control" aria-describedby="emailHelp"
                                placeholder="Enter Password" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <label for="Address">Address</label>
                                <input type="address" name="address" id="address" class="form-control" aria-describedby="emailHelp"
                                    placeholder="Enter Address" onChange={e => this.props.setField(e)}/>
                            </div>
                                <div class="form-group">
                                    <label for="City">City</label><br />
                                    <input type="city" name="kota" id="city" class="form-control" aria-describedby="emailHelp"
                                    placeholder="Enter City" onChange={e => this.props.setField(e)}/>
                                </div>
                                <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" onClick={() => this.doRegister()}  style={{backgroundColor:"#fe4c50", border:"none"}} data-toggle="modal" data-target="#exampleModal">Get Started For Free</button>
                                <div class="form-group"><br />
                                <p class="text-center" style={{color:"black"}}>Already have an account? <br/><Link to="/login">Sign In</Link> here</p>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3">
                    
                        </div>
                        </div>
                        </div>
            </section>
        );
    }
}
export default connect (
    "is_login,username, fullName, password, address, kota,",
    actions
) (withRouter (RegisterContent));