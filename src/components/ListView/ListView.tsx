import React from 'react';
import { Box, Input } from '@chakra-ui/react'
import Header from './Header';
import Footer from './Footer';
import SearchIcon from '@material-ui/icons/Search'
import Channel from '../Channel/Channel';
import { IChannels } from '../../interfaces/channel';
import { useUserAuthentication } from '../../context/authContext';


const ListView = (props: IChannels) => {

    const { setChannelName } = useUserAuthentication()

    return (
        <>
            <Box maxH="100vh">
                <Box minH="5vh" bg="bg.200" boxShadow="lg">
                    <Box ml={8} mr={8}>
                        <Header />
                    </Box>
                </Box>
                <Box minH="88vh">
                    <Box>
                        <Box pl={8} pr={8} pt={5}>
                            <Box bg="bg.100" mt={2} ml={2} display="flex" flexDirection="row" borderRadius="md">
                                <Box pt={2} pl={2}>
                                    <SearchIcon />
                                </Box>
                                <Input placeholder='Search' variant="outlined" type="text" bg="bg.100" />
                            </Box>
                            <Box p={2}>
                                {
                                    props.channels.map((channel) => (
                                        <Box _hover={{ cursor: 'pointer' }} key={channel.id} onClick={() => setChannelName(channel.name)}>
                                            <Channel name={channel.name} />
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box minH="5vh" bg="bg.300">
                    <Box ml={8} mr={8}>
                        <Footer />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default ListView;
