import React from 'react'
import { Button, Text } from '@chakra-ui/react';
import { useUserAuthentication } from '../../context/authContext';

const Home: React.FC = () => {
    const { logout } = useUserAuthentication();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Text>
                Home Page
            </Text>
            <Button onClick={handleLogout}>Logout</Button>
        </>
    )
}

export default Home;
