import React from 'react';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useUserAuthentication } from '../../context/authContext';

const Footer: React.FC = () => {
    const { logout } = useUserAuthentication();

    const handleLogout = () => {
        logout();
    }

    return (
        <Flex width="full" align="center" minH="7vh">
            <Box>
                <Text fontSize="18px" fontWeight={500}>Profile</Text>
            </Box>
            <Spacer />
            <Box>
                <ExpandMoreIcon onClick={handleLogout} />
            </Box>
        </Flex>
    )
}

export default Footer
