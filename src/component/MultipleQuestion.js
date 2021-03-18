import React, {useState} from 'react'
import {
    Card,
    Col,
    FormGroup, Input, Label
} from "reactstrap";

const MultipleQuestion = ({question}) => {
    const answerList = question.answers.map((answer) => {
        return (
            <FormGroup check>
                <Label check>
                    <Input type="radio" name={`question${question.id}`} value={answer.answer}/>
                    {answer.answer}
                </Label>
            </FormGroup>
        )
    })

    return (
        <Card body outline color="primary" className="m-3">
            <FormGroup tag="fieldset" row>
                <legend className="col-form-label"> {question.question} </legend>
                <Col sm={10}>
                    {answerList}
                </Col>
            </FormGroup>
        </Card>
    )
}

export default MultipleQuestion