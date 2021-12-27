import React from 'react';
import { Box, Flex, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import ModalDialog from '../AlertDialog';
import { database } from '../../config/firebase.config';
import { ref, set } from "firebase/database";
import '../../App.css'

const Header = () => {
    const { isOpen, onClose, onToggle } = useDisclosure()

    const createChannel = (name: string, description: string, createdBy: string) => {
        const uid = 'id' + (new Date()).getTime();
        set(ref(database, 'channels/' + uid), {
            id: uid,
            name: name,
            description: description,
            members: null,
            createdBy: createdBy
        });
    }

    return (
        <Flex width="full" minH="5vh" align="center">
            <Box>
                <Text fontSize="18px" fontWeight={500}>Channels</Text>
            </Box>
            <Spacer />
            <Box _hover={{ cursor: "pointer" }}>
                <AddBoxIcon onClick={onToggle} />
                <ModalDialog isOpen={isOpen} onClose={onClose} createChannel={createChannel} />
            </Box>
        </Flex>
    )
}

export default Header;
