import React, { useState, useEffect } from 'react';
import { Box, Flex, Spacer, Text, Center } from '@chakra-ui/react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useUserAuthentication } from '../../context/authContext';
import { spilter } from '../../utils/Spliter';

const Footer: React.FC = () => {

    const [userLogo, setUserLogo] = useState<string>();
    const { user, logout } = useUserAuthentication();

    const handleLogout = () => {
        logout();
    }

    useEffect(() => {
        const name = spilter(user.displayName);
        setUserLogo(name);
    }, [user]);

    return (    
        <Flex width="full" align="center" minH="7vh">
            <Box>
                {/* <Text fontSize="18px" fontWeight={500}>{(user.displayName)}</Text> */}
                <Box>
                    <Box p={2}>
                        <Box display="flex" flexDirection="row">
                            <Box width={10} height={10} bg="bg.100" borderRadius="md">
                                <Center h={10}>
                                    <Text fontSize="18px" fontWeight={500}>{userLogo}</Text>
                                </Center>
                            </Box>
                            <Box p={2}>
                                <Text fontSize="16px" fontWeight={500}>{user.displayName}</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Spacer />
            <Box _hover={{ cursor: 'pointer' }}>
                <ExitToAppIcon onClick={handleLogout} />
            </Box>
        </Flex>
    )
}

export default Footer
