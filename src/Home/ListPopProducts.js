import React from "react";
import {Col, Card, Button, CardText, CardImg, CardBody, CardTitle} from 'reactstrap';

const style = {
    paddingTop: "10px"
};

const text = {
    textAlign: "center"
}

const ListPopProducts = props => {
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
    return (
        <Col lg="3" md="4" sm="6" style={style}>
        <Card className="product-item" className={props.kategori}>
            <CardImg top maxWidth="10%" src={props.img} />
                <CardBody>
                    <CardTitle style={text}>{props.name}</CardTitle>
                    {/* <CardSubtitle>{data.subtitle}/CardSubtitle> */}
                    <CardText style={text}>By {props.penjual}</CardText>

                    {/* <div style={text} >
                        <Button >Add to Cart</Button>
                    </div> */}
                </CardBody>
        </Card>
        </Col>
    );
}

export default ListPopProducts;