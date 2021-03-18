import React, {useState} from 'react'
import {ListGroup, ListGroupItem} from "reactstrap";

const ListItem = () => {
    const items = [
        {
            "id": 1,
            "name": "All About Feral Cats",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/All-About-Feral-Cats-160941.html"
        },
        {
            "id": 2,
            "name": "Fantastic Feline Fur",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Fantastic-Feline-Fur-294417.html"
        },
        {
            "id": 3,
            "name": "The Beautiful Black Cat",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/The-Beautiful-Black-Cat-354173.html"
        },
        {
            "id": 4,
            "name": "Polydactyl Cats",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Polydactyl-Cats-288565.html"
        },
        {
            "id": 5,
            "name": "Kittens - The First Day Onwards",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Kittens---The-First-Day-Onwards-71961.html"
        },
        {
            "id": 6,
            "name": "Catnip - Not Just For Stuffing Toys !",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Catnip---Not-Just-For-Stuffing-Toys--46522.html"
        },
        {
            "id": 7,
            "name": "Why Does My Cat Do That?",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Why-Does-My-Cat-Do-That-384162.html"
        },
        {
            "id": 8,
            "name": "Cats Are Human Too",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Cats-Are-Human-Too-352712.html"
        },
        {
            "id": 9,
            "name": "True/False : All About Cats",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/TrueFalse---All--About-Cats-99875.html"
        },
        {
            "id": 10,
            "name": "Therapy Cats, the Purrfect Remedy",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Therapy-Cats-the-Purrfect-Remedy-359715.html"
        },
        {
            "id": 11,
            "name": "Why Does My Cat Not Only Do That, But This Too?",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Why-Does-My-Cat-Not-Only-Do-That-But-This-Too-144036.html"
        },
        {
            "id": 12,
            "name": "Why Does My Cat Do That?",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Why-Does-My-Cat-Do-That-97396.html"
        },
        {
            "id": 13,
            "name": "At Least the Cat Likes It...",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/At-Least-the-Cat-Likes-It-365291.html"
        },
        {
            "id": 14,
            "name": "The Older Cat",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/The-Older-Cat-56473.html"
        },
        {
            "id": 15,
            "name": "Orange Cats are Red, Gray Cats are Blue",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Orange-Cats-are-Red-Gray-Cats-are-Blue-148755.html"
        },
        {
            "id": 16,
            "name": "The Cat\u0027s Out of the Bag",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/The-Cats-Out-of-the-Bag-365700.html"
        },
        {
            "id": 17,
            "name": "Big Cat, Little Cat",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Big-Cat-Little-Cat-365821.html"
        },
        {
            "id": 18,
            "name": "The Truth About Cats",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/The-Truth-About-Cats-178042.html"
        },
        {
            "id": 19,
            "name": "Cats In Literature and History",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/Cats-In-Literature-and-History-2865.html"
        },
        {
            "id": 20,
            "name": "How Much Do You Know About Cats?",
            "url": "https://www.funtrivia.com/trivia-quiz/Animals/How-Much-Do-You-Know-About-Cats-373841.html"
        }
    ]

    const listItem = items.map((item) => (
        <ListGroupItem key={item.id} tag={"a"} href={item.url}> {item.name} </ListGroupItem>
    ))



    return (
        <ListGroup>
            {listItem}
        </ListGroup>
    )
}

export default ListItem