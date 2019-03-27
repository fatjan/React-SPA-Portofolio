import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";
import { withRouter } from "react-router-dom";


class SellContent extends Component {
    doRegister = () => {
        this.props.registerSeller().then( () => {
            if (this.props.is_login === true) {
                alert("Register successful. Hi, "+this.props.fullName+". Congratulations on becoming our new Seller.")
                this.props.history.replace("/profile")
            }
            else {
                alert("Failed to register. Username has been used before. Try using another username. Thank you.")
            }
        });
    }
    render() {
      return (


        <section>
                <div class="container">
                    <div class="row">
                    <div className="col-md-3">
                    </div>
                        <div class="col-md-9 col-lg-9 col-sm-12 text-center">
                            <h1 style={{marginTop:"150px"}}>Be a Seller Now</h1>
                    <form action="#" name="registration" onSubmit={e => e.preventDefault()}>
                    {/* <div class="row" > */}
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
                    {/* </div> */}
                                <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" onClick={() => this.doRegister()}  style={{backgroundColor:"#fe4c50", border:"none"}} data-toggle="modal" data-target="#exampleModal">Become a Seller Now</button>
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

        // <div class="main_slider">
        //     <div class="container fill_height">
        //         <div class="row align-items-center fill_height">
        //             <div class="col">
        //             <div class="container">
        //                 <div class="row">
        //                     <div class="col-md-12 col-lg-12 col-sm-12 text-center" style={{paddingRight: "365px"}}>
        //                         <h1>Be a Seller Now</h1>
        //                     </div>
        //                 </div>

        //                 {/* form starts here */}
        //                 <form action="#" name="registration" onSubmit={e => e.preventDefault()}>
        //                 <div class="row" style={{paddingRight: "365px"}}>
        //                     <div class="col-lg-6 col-md-12 col-sm-12">
        //                         <div class="form-group">
        //                             <label for="Username">User Name</label>
        //                             <input type="text" name="username" class="form-control" id="username" aria-describedby="emailHelp"
        //                             placeholder="Enter Username" onChange={e => this.props.setField(e)}/>
        //                         </div>
        //                         <div class="form-group">
        //                             <label for="Fullname">Full Name</label>
        //                             <input type="text" name="fullName" class="form-control" id="firstname" aria-describedby="emailHelp"
        //                             placeholder="Enter Fullname" onChange={e => this.props.setField(e)}/>
        //                         </div>
        //                         <div class="form-group">
        //                             <label for="exampleInputEmail1">Email address</label>
        //                             <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"
        //                             placeholder="Enter email" onChange={e => this.props.setField(e)}/>
        //                         </div>
        //                     </div>
        //                     <div class="col-lg-6 col-md-12 col-sm-12">
        //                         <div class="form-group">
        //                             <label for="Password">Password</label>
        //                             <input type="password" name="password" id="password" class="form-control" aria-describedby="emailHelp"
        //                             placeholder="Enter Password" onChange={e => this.props.setField(e)}/>
        //                         </div>
        //                         <div class="form-group">
        //                             <label for="Address">Address</label>
        //                             <input type="address" name="address" id="address" class="form-control" aria-describedby="emailHelp"
        //                                 placeholder="Enter Address" onChange={e => this.props.setField(e)}/>
        //                         </div>
        //                             <div class="form-group">
        //                                 <label for="City">City</label>
        //                                 <input type="city" name="kota" id="city" class="form-control" aria-describedby="emailHelp"
        //                                 placeholder="Enter City" onChange={e => this.props.setField(e)}/>
        //                             </div>
        //                     </div>
        //                     </div>
        //                     <div class="row" style={{paddingRight: "365px"}}>
        //                         <div class="col-md-12 text-center mb-3" style={{paddingLeft:"177px", paddingRight: "237px"}}>
        //                             <a href="index.html">
        //                             <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" onClick={() => this.doRegister()}>Become a Seller Now</button>
        //                             </a>
        //                         </div>
        //                         <div class="col-md-12 " style={{paddingLeft:"177px", paddingRight: "237px"}}>
        //                             <div class="form-group">
        //                             <p class="text-center" style={{color:"black"}}>Already have an account? <Link to="/login">Sign In</Link> here</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     </form>
        //                     <br /><br /><br/><br/><br/>
        //                     </div>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        );
    }
}
export default connect (
    "is_login,username, fullName, password, address, kota,",
    actions
) (withRouter (SellContent));