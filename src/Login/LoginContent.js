import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";
import { withRouter } from "react-router-dom";

class LoginContent extends Component {
    state = {
        userType: "",
        username: "",
        fullName: "",
        address: "",
        city: ""
    }
    doLogin = () => {
        this.props.postLogin().then(() => {
            if (this.props.is_login === true) {
                var nama = this.props.username
                var pass = this.props.password
                alert("Hi, "+nama+"! Login successful. Happy shopping!")
                var token = this.props.token
                console.log("token di loginContent: ", token)
                var body = {"username":nama, "password": pass};
                this.props.getUserProfile(token, body)
                var user_type = this.props.userType
                console.log("user type do loginContent: ", user_type)
            this.props.history.replace("/");
            }
            else {
                alert("Failed to login. Wrong username or password. Try again.")
            }
        
        });
      };

      handleClickToHome = e => {
        this.props.history.replace("/");   
    }

    render() {
      return (
          <section>
              <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-4">
                    <h1 id="signIn" style={{marginTop:"150px"}}>Sign In</h1>
                            <form action="" method="post" name="login" onSubmit={e => e.preventDefault()} >
                                <div  ><br/>
                                    <label for="exampleInputUsername">User Name</label>
                                    <input type="username" name="username" id="username" className="form-control"
                                        aria-describedby="emailHelp" placeholder="Enter User Name" onChange={e => this.props.setField(e)}/>
                                </div>
                                
                                <div ><br/>
                                    <label for="exampleInputPassword">Password</label>
                                    <input type="password" name="password" id="password" className="form-control"
                                        aria-describedby="emailHelp" placeholder="Enter Password" onChange={e => this.props.setField(e)}/>
                                </div>
                                <div >
                                    <br/>
                                    <p className="text-center">Log In to shop more and more.</p>
                                </div>
                                <div className="col-md-12 text-center ">
                                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" onClick={() => this.doLogin()} data-toggle="modal" data-target="#exampleModal">Login</button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="login-or">
                                        <hr className="hr-or" />
                                        <span className="span-or" style={{textAlign:"center"}}>or</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p className="text-center">Don't have account? <Link to="/register">Signup here</Link></p>
                                </div>
                            </form>
                    </div>
                    <div className="col-md-4">
                    
                    </div>
                </div>
              </div>
          </section>
        );
    }
}
// export default LoginContent;
export default connect (
    "is_login,email,password, username, token, userType",
    actions
) (withRouter (LoginContent));