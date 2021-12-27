import React from 'react'
import { Flex, Text } from '@chakra-ui/react';
import { useUserAuthentication } from '../../context/authContext';

const Header = () => {
    const { channel } = useUserAuthentication();
    return (
        <Flex width="full" minH="5vh" align="center" justifyContent="flex-start">
            <Text fontSize="18px" fontWeight={500}>{(channel).toUpperCase()}</Text>
        </Flex>
    )
}

export default Header
