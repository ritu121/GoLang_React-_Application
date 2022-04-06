import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Button, Card, Row, Col} from 'react-bootstrap'

const Order = ({orderData, setChangeWaiter, deleteSingleOrder, setChangeOrder}) => {

    return (
        <Card>
            <Row>
                <Col>Post:-{ orderData !== undefined && orderData.dish}</Col>
                <Col>Location:-{ orderData !== undefined && orderData.server}</Col>
                <Col>Phone No:-{ orderData !== undefined && orderData.table}</Col>
                <Col>Price:- {orderData !== undefined && orderData.price}</Col>
                <Col><Button onClick={() => deleteSingleOrder(orderData._id)}>delete Post</Button></Col>
                <Col><Button onClick={() => changeWaiter()}>change  Location</Button></Col>
                <Col><Button onClick={() => changeOrder()}>change Post</Button></Col>
            </Row>
        </Card>
    )

    function changeWaiter(){
        setChangeWaiter(
            {
                "change": true,
                "id": orderData._id
            }
        )
    }

    function changeOrder(){
        setChangeOrder(
            {
                "change": true,
                "id": orderData._id
            }
        )
    }

}

export default Order