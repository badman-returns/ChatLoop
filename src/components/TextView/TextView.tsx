import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from './Header';

const TextView: React.FC = () => {
    return (
        <Box minH='5vh' boxShadow="md" bg='bg.100'>
            <Box ml={20}>
                <Header />
            </Box>
        </Box>
    )
}

export default TextView;
