import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Col, Card, Button, CardText, CardImg, CardBody, CardTitle} from 'reactstrap';
import { connect } from "unistore/react";
import { actions } from  "../Store";
import { withRouter } from "react-router-dom";

const style = {
    paddingTop: "10px"
};

const text = {
    textAlign: "center"
}


class ListCarts extends Component {
  
    render() {
    return (
        <tr>
             
            <td style={{width:"170px", height:"auto"}}>
                <img src={this.props.img} class="img-responsive" alt="" style={{width: "75%", height: "auto"}} />
            </td>
            <td>
                {this.props.name}
            </td>
            <td>
                {this.props.detail}
            </td>
            <td>
                {this.props.qty}
            </td>
            <td> @ Rp {this.props.harga}</td>
            <td>Rp {this.props.fee}</td>
            <td>Rp {this.props.totalPrice}</td>
            <td><button className="red_button" style={{color:"white", padding:"10px"}} ><Link to={`/public/editcart/`+ this.props.id}> OK </Link> </button></td>
            <td><button className="red_button" style={{color:"white", padding:"10px"}} ><Link to={`/public/buyproduct/`+ this.props.id} > OK </Link></button></td>
            <td><button className="red_button" style={{color:"white", padding:"10px"}}><Link to={`/public/deletecart/`+ this.props.id}> OK </Link></button></td>
        </tr>
        
    )};

};

export default connect (
    "is_login, token, idProduct,",
    actions
) (withRouter (ListCarts));

// onClick={() => this.handleClickEdit()}
// onClick={ e => this.props.deleteProduct(props.id)}