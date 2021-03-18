import React from 'react';
import {useParams} from 'react-router-dom'

const Quizz = () => {
    const { itemId } = useParams()

    return (
        <>
            {itemId}
        </>
    )
}

export default Quizz