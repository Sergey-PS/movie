import {ColorModeSwitcher} from './ColorModeSwitcher';
import React from "react";
import {Heading, Box, Image, Flex, useColorMode} from "@chakra-ui/react";
import tmdb from '../logo/tmdb.svg'

const Header = () => {
    const {colorMode} = useColorMode();

    return (
        <Flex justifyContent="space-between" bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} color="red">
            <Image src={tmdb} alt="TheMovieBaseData" h={5} py={1}/>
            <Heading my="2px" mx="10px">TheMovieBaseData</Heading>
            <Box w="100%" textAlign="right" h={4} py={6} bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}>
                <ColorModeSwitcher justifySelf="flex-end"/>
            </Box>
        </Flex>
    );
}

export default Header;