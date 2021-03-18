import React from 'react'
import {Card, Col, FormGroup, Input} from "reactstrap";

const NormalQuestion = ({question}) => {

    return (
        <Card body outline color="primary" className="m-3">
            <FormGroup tag="fieldset" row>
                <legend className="col-form-label"> {question.question} </legend>
                <Col sm={10}>
                    <Input type="text" name={`question${question.id}`}/>
                </Col>
            </FormGroup>
        </Card>
    )
}

export default NormalQuestion