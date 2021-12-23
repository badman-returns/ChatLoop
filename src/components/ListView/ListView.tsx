import React from 'react';
import { Box } from '@chakra-ui/react'
import Header from './Header';
import Footer from './Footer';

const ListView: React.FC = () => {
    return (
        <>
            <Box minH="100vh">
                <Box minH="5vh" bg="bg.200" boxShadow="lg">
                    <Box ml={8} mr={8}>
                        <Header />
                    </Box>
                </Box>
                <Box minH="88vh">

                </Box>
                <Box minH="7vh" bg="bg.300">
                    <Box ml={8} mr={8}>
                        <Footer />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default ListView;
