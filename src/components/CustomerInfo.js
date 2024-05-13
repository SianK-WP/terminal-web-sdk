import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/CustomerInfo.css';
function CustomerInfo() {
    return (
        <>
            <h1>Customer Information</h1>
            <Form className="customer-info">
            <Row className="mb-3">
                <Form.Group controlId="formGridName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name"/>
                </Form.Group>
                <Form.Group controlId="formGridSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname"/>
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="Email"/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Flat number, House name or floor"/>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control/>
                </Form.Group>

                <Form.Group controlId="formGridCounty">
                    <Form.Label>County</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>London</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formGridPostCode">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control/>
                </Form.Group>
            </Row>
        </Form></>

    );
}

export default CustomerInfo;