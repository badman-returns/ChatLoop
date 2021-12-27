import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, Box, Textarea } from '@chakra-ui/react'
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
                    <ModalHeader>New Channel</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box m={2} display='flex' alignItems='baseline'>
                            <Input bg="bg.100" type='text' placeholder="Channel name" onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                        </Box>
                        <Box m={2} display='flex' alignItems='baseline'>
                            <Textarea bg="bg.100" resize="vertical" size="md" placeholder="Channel description" onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setDescription(e.currentTarget.value)} />
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button bg='#2F80ED' type='submit' onClick={handleSubmit}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDialog;