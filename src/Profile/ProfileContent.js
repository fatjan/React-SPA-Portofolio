import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from  "../Store";
import {withRouter} from "react-router-dom";

class ProfileContent extends Component {
    componentDidMount = () => {
        this.props.getUserProfile()
        console.log("token di profile", this.props.token)
    }
    render() {
      return (
          <div class="container contact_container">
              <div class="row">
                <div class="col">
                    <div class="breadcrumbs d-flex flex-row align-items-center">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li class="active"><Link to="/profile"><i class="fa fa-angle-right" aria-hidden="true"></i>Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        <br />
          <h1 style={{textAlign:"center"}}>Profile</h1>
          <h5 style={{textAlign:"center"}}>User Name: {this.props.username}</h5>
          <h5 style={{textAlign:"center"}}>User Type: {this.props.userType}</h5>
          <h5 style={{textAlign:"center"}}>Full Name: {this.props.fullName}</h5>
          <h5 style={{textAlign:"center"}}>Address: {this.props.address}</h5>
          <h5 style={{textAlign:"center"}}>City: {this.props.kota}</h5>

          <br /><br /><br />
        <Link to="/public/transaction-history"><h3 style={{color:"#fe4c50", textAlign:"center"}}>Transaction History</h3></Link>
          </div>
        );
    }
}
// export default ProfileContent;

export default connect(
    "is_login, username, userType, fullName, address, kota, token",
    actions
)(withRouter(ProfileContent));