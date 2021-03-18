import React from 'react';
import {useParams} from 'react-router-dom'
import QuestionList from "../../component/QuestionList";
import {Form} from "reactstrap";

const Quizz = () => {
    const { itemId } = useParams()

    return (
        <>
            <QuestionList itemId={itemId}/>
        </>
    )
}

export default Quizz