import React from 'react'
import { Flex, Text } from '@chakra-ui/react';

function Header() {
    return (
            <Flex width="full" minH="5vh" align="center" justifyContent="flex-start">
                <Text fontSize="18px" fontWeight={500}>FRONT-END-DEVELOPERS</Text>
            </Flex>
    )
}

export default Header
