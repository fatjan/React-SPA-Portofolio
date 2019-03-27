import React from "react";
import PropTypes from "prop-types";
import {Col, Card, Button, CardText, CardImg, CardBody, CardTitle} from 'reactstrap';
import ReactCardFlip from "react-card-flip";

const style = {
    paddingTop: "10px"
};

const text = {
    textAlign: "center"
}


const ListProducts = props => {

    var harga = props.harga
    var harga_string = harga.toString()
    var n = harga_string.length
    if (n === 5) {
        var harga_depan = harga_string.slice(0,2)
        var harga_blakang = harga_string.slice(2, 5)
    } else {
        var harga_depan = harga_string.slice(0,3)
        var harga_blakang = harga_string.slice(3, 6)
    }
    var harga_akhir = harga_depan + "." + harga_blakang
    
    return (

            <Col lg="4" md="6" sm="12" style={style} >
                <div class="flip-card" >
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <CardImg top maxWidth="10%" src={props.img} alt="Avatar" />
                    <CardBody>
                               <CardTitle style={text}>{props.name}</CardTitle>
                             <CardText style={text}>Rp {harga_akhir}</CardText><br /><br />
                             
                    </CardBody>
                    </div>
                    <div class="flip-card-back">
                    {/* <h1>John Doe</h1>  */}
                    <div style={{color:"black", textAlign:"center"}}><strong>{props.name}</strong></div> <br />
                    <div style={{textAlign:"justify"}}>
                    <strong>Category:</strong> {props.kategori} <br/> 
                   <strong>Brand:</strong> {props.brand} <br/>
                     <strong>Detail:</strong> {props.detail} <br />
                     <strong>Tersedia:</strong> {props.tersedia} <br />
                     <strong>Dikirim dari:</strong> {props.kota} <br /><br />
                     </div>
                     <div style={text} >
                                 <Button >Add to Cart</Button>
                             </div>
                    {/* <p>We love that guy</p> */}
                    </div>
                </div>
                </div>
             </Col>
        
    );

};

ListProducts.propTypes = {
    name : PropTypes.string.isRequired,
    kategori : PropTypes.string.isRequired,
    // harga :  PropTypes.int.isRequired,
    img: PropTypes.string
};

export default ListProducts;