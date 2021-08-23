import React from 'react'
import {StarIcon} from "@chakra-ui/icons";
import {Button} from '@chakra-ui/react'

function btnClick(id, movie) {
    localStorage.setItem("m" + id, JSON.stringify(movie));
}

function Favourites(props) {
    const btnStyles = {
        border: 'none',
        h: '25px',
        borderRadius: '20px',
        color: 'white',
        fontWeight: 'bold',
        bg: "green.500",
        cursor: 'pointer',
        _hover: {
            bg: "green.300"
        },
    }

    return (
        <Button {...btnStyles} rightIcon={<StarIcon color="yellow.500"/>}
                onClick={btnClick.bind(this, props.id, props.movie)}>
            Add Favourites
        </Button>
    );
}

export default Favourites;