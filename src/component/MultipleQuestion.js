import React, {useState} from 'react'
import {
    Card,
    Col,
    FormGroup, Input, Label
} from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';


const MultipleQuestion = ({question}) => {
    const answerList = question.answers.map((answer) => {
        return (
            <AvRadio label={answer.answer} value={answer.answer}/>
        )
    })

    return (
        <Card body outline color="primary" className="m-3">
            <AvGroup required>
                <Label className="col-form-label"> {question.question} </Label>
                <AvRadioGroup name={`question${question.id}`} required >
                    {answerList}
                </AvRadioGroup>
            </AvGroup>
        </Card>
    )
}

export default MultipleQuestion