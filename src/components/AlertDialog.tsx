import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, FormControl, FormLabel, Box } from '@chakra-ui/react'
import { useUserAuthentication } from '../context/authContext';

const ModalDialog = (props: any) => {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const { user } = useUserAuthentication();

    const handleSubmit = () => {
        props.createChannel(name, description, user.uid);
        props.onClose();
    }

    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Channel</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display='flex' alignItems='baseline'>
                            <FormControl>
                                <FormLabel htmlFor='name'>Channel Name</FormLabel>
                                <Input id='name' type='text' onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                            </FormControl>
                        </Box>
                        <Box display='flex' alignItems='baseline'>
                            <FormControl>
                                <FormLabel htmlFor='name'>Channel Description</FormLabel>
                                <Input id='name' type='text' onInput={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
                            </FormControl>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={props.onClose}>
                            Close
                        </Button>
                        <Button colorScheme='blue' type='submit' onClick={handleSubmit}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDialog;