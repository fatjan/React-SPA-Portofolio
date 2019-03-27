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


class ListProducts extends Component {
  

   
    // var harga = props.harga
    // var harga_string = harga.toString()
    // var n = harga_string.length
    // if (n === 5) {
    //     var harga_depan = harga_string.slice(0,2)
    //     var harga_blakang = harga_string.slice(2, 5)
    // } else {
    //     var harga_depan = harga_string.slice(0,3)
    //     var harga_blakang = harga_string.slice(3, 6)
    // }
    // var harga_akhir = harga_depan + "." + harga_blakang
    render() {
    return (
            // <div className="row">
            <Col lg="3" md="4" sm="6" style={style} >
                <div class="flip-card" >
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <CardImg top maxWidth="10%" src={this.props.img} alt="Avatar" />
                    <CardBody>
                               <CardTitle style={text}>{this.props.name}</CardTitle>
                             <CardText style={text}>Rp {this.props.harga}</CardText><br /><br />
                             
                    </CardBody>
                    </div>
                    <div class="flip-card-back">
                    {/* <h1>John Doe</h1>  */}
                    <div style={{color:"black", textAlign:"center"}}><strong><Link to={`/seller/editproduct/`+ this.props.id}>{this.props.name}</Link></strong></div> <br />
                    <div style={{textAlign:"justify"}}>
                    {/* <stong><Link to={`/seller/editproduct/`+ this.props.id}>{this.props.name}</Link></stong> */}
                    <strong>Category: </strong> {this.props.kategori} <br/> 
                   <strong>Brand:</strong> {this.props.brand} <br/>
                     <strong>Detail:</strong> {this.props.detail} <br />
                     <strong>Tersedia:</strong> {this.props.tersedia} <br />
                     <strong>Penjual: </strong>{this.props.penjual}<br />
                     <strong>Dikirim dari:</strong> {this.props.kota} <br /><br />
                     </div>
                     <div style={{textAlign: "justify"}} >
                                 <Button name="edit" id={this.props.id} value={this.props.id}  >
                                 <Link to={`/seller/editproduct/` + this.props.id} style={{color:"white"}}
                                     
                                 >Edit</Link></Button>

                                 <Button className="float-right" name="delete" value={this.props.id}>
                                 <Link to={`/seller/deleteproduct/` + this.props.id} style={{color:"white"}}>
                                 Delete</Link></Button>
                             </div>
                    </div>
                </div>
                </div>
             </Col>
        
    )};

};

ListProducts.propTypes = {
    name : PropTypes.string.isRequired,
    kategori : PropTypes.string.isRequired,
    // harga :  PropTypes.int.isRequired,
    img: PropTypes.string
};

// export default ListProducts;
export default connect (
    "is_login, token,",
    actions
) (withRouter (ListProducts));

// onClick={() => this.handleClickEdit()}
// onClick={ e => this.props.deleteProduct(props.id)}