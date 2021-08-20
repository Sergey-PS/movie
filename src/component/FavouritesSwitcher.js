import React from 'react'
import { PhoneIcon, StarIcon } from "@chakra-ui/icons";
import { Button, IconButton } from '@chakra-ui/react'

function btnClick(id, movie) {
    // console.log(localStorage.getItem(id))
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
        <Button {...btnStyles} rightIcon={<StarIcon color="yellow.500" />} onClick={btnClick.bind(this, props.id, props.movie)}>
            Add Favourites
        </Button>

        // <StarIcon color="yellow.500" h={30} />
    );
}

export default Favourites;