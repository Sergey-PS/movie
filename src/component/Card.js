import React from 'react'
import {Divider, Image, Button, Text, Grid, GridItem} from "@chakra-ui/react";
import movieView from "../movieView";
import ListItem from "./ListItem";
import rav from "./rav";
import Favourites from "./FavouritesSwitcher";

function viewMovie(movie, fav) {
    movieView(movie);
}

function Card(props) {
    const movies = props.movie;
    const genres = props.genres;
    const sourceImage = "https://image.tmdb.org/t/p/w185" + movies.poster_path;
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
        }
    }
    const grdItem = {

        borderColor: "red.200",

        bg: "gray.200",
        p: "5px"
    }

    function favor(f) {
        if (!f) {
            return <Favourites id={movies.id} fav={props.fav} movie={movies}/>
        }
    }

    return (

        <Grid
            h="max-content"
            templateRows="max-content 4fr 1fr"
            templateColumns="150px 15fr"
            borderColor="red.200"
            borderRadius="7px"
            borderWidth="1px"
            bg="gray.200"
            gap={2}
            p={2}
            m={2}
        >
            <GridItem rowSpan={3} colSpan={1} bg="tomato"><Image src={sourceImage} alt={movies.title}
            /></GridItem>
            <GridItem {...grdItem}>
                <Text fontFamily="verdana" fontSize="2xl">{movies.title}</Text>
                <Divider colorScheme="yellow" w="xl"/>
            </GridItem>
            <GridItem {...grdItem}>
                {movies.overview}


                <ListItem g={rav(movies.genre_ids, genres)}/>
            </GridItem>
            <GridItem>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <Button {...btnStyles} onClick={viewMovie.bind(this, movies.id)}>Go!</Button></td>
                        <td>
                            {favor(props.fav)}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </GridItem>
        </Grid>
    )

}

export default Card;