import React, {useState, useEffect} from 'react'
import TopNav from "../../component/TopNav";
import ItemList from "../../component/ItemList";
import {Container} from "reactstrap";
import {useParams} from "react-router-dom"

const Item = () => {
    const { category } = useParams();

    return (
        <>
            <Container className="m-5">
                <ItemList category={category}/>
            </Container>
        </>
    )
}

export default Item