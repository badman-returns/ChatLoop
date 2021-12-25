import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import AddBoxIcon from '@material-ui/icons/AddBox';

function Header() {
    return (
        <Flex width="full" minH="5vh" align="center">
            <Box>
                <Text fontSize="18px" fontWeight={500}>Channels</Text>
            </Box>
            <Spacer />
            <Box>
              <AddBoxIcon/>
            </Box>
        </Flex>
    )
}

export default Header
