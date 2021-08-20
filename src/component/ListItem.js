import React from 'react'
import {Box, Text} from "@chakra-ui/react";

function ListItem(props) {
    const st = {
        padding: '1px',
    }

    return (
        <table>
            <tbody>
            <tr>
                {
                    props.g.map((i) => (<td {...st}>
                        <Box borderRadius={5} bg="blue.200" w="max-content" h="max-content">
                            <Text color="brown" p={0.5} fontWeight="bold">{i}</Text>
                        </Box></td>))
                }
            </tr>
            </tbody>
        </table>
    )

}

export default ListItem;