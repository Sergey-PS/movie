import React, {useEffect, useState} from 'react'
import './App.css';
import axios from "axios";
import Card from "./component/Card";
import {ChakraProvider, Flex, useColorMode} from "@chakra-ui/react";
import {Theme} from "@emotion/react";
import Header from "./component/Header";
import {Image} from "@chakra-ui/react";
import loupe from "./logo/loupe.svg"
import {Input} from "@chakra-ui/input";
import {Text} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import loadFavourites from "./component/loadFavourites";

function App() {
    const [genre, setGenre] = useState(true)
    const [total, setTotal] = useState(0)
    const [genreList, setGenreList] = useState([]);
    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [searchMovie, setSearchMovie] = useState('Sea')
    const {colorMode} = useColorMode();
    const [locStorage, setLocStorage] = useState([])
    const [favourites, setFavourites] = useState(false)
    let fl = 0;


    const btnStyles = {
        border: 'none',
        h: '25px',
        marginTop: "6px",
        borderRadius: '20px',
        color: 'white',
        fontWeight: 'bold',
        bg: "green.500",
        cursor: 'pointer',
        _hover: {
            bg: "green.300"
        }
    }

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)
            // console.log('scrollHeight', e.target.documentElement.scrollHeight)
            // console.log('scrollTop', e.target.documentElement.scrollTop)
            // console.log('innerHeight', window.innerHeight)
            setFetching(true);
    }

    useEffect(() => {
        if (genre) {
            axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=e7b8782a21b5b1fb64981f82df123a3a')
                .then(response => {
                    setGenreList([genreList, ...response.data.genres])
                    //setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setGenre(false));
            //console.log(genreList)
        }
    })

    useEffect(() => {
        if (favourites) {
            let tmp = [];
            for (let i = 0; i < localStorage.length; i++) {
                tmp.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            setPhotos(tmp);
        }
        setFavourites(false);
    }, [favourites])


    useEffect(() => {
        if (fetching) {
                axios.get('https://api.themoviedb.org/3/search/movie?language=en&api_key=e7b8782a21b5b1fb64981f82df123a3a&query=' + searchMovie + '&page=' + currentPage)
                    .then(response => {
                        setPhotos([...photos, ...response.data.results])
                        setCurrentPage(prevState => prevState + 1)
                        setTotal(response.data.total_results)
                    })
                    .finally(() => setFetching(false));

        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    })
    //
    // function movieView(props) {
    //     // console.log("View Movie");
    //     // console.log(this.props.movie.title);
    //     const url = 'https://www.themoviedb.org/movie/' + props.id;
    //     window.location.href = url;
    // }

    function handlerSearch(e) {
        setCurrentPage(1);
        setPhotos([]);
        setSearchMovie(e.target.value);
        setFetching(true);
    }

    function favouritesClick() {
        // setPhotos([]);
        // fl=0;
         setFavourites(true);

    }

    return (
        <ChakraProvider>
            <Header/>
            <div>
                <Flex p={0.5} justifyContent="space-between" bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
                      color="red">
                    <Image src={loupe} w="30px"/>
                    {/*<input type='text' size={50} onChange={handlerSearch} placeholder='search movie'/>*/}
                    <Input w="lg" placeholder="Sea" onChange={handlerSearch}/>
                    <Text marginRight="10px" fontSize={22} w="100%" align="right" color="black">Total: {total}</Text>
                    <Button {...btnStyles} onClick={favouritesClick}>Fav</Button>
                </Flex>
                {photos.map(photo => {

                        return (<div key={photo.id}>
                            <Card movie={photo} genres={genreList}/>
                        </div>)
                    }
                )}

            </div>
        </ChakraProvider>
    );
}

export default App;
