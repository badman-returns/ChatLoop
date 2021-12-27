import React, { useEffect, useState } from 'react'
import { Box, Text, Center } from '@chakra-ui/react';
import { spilter } from '../../utils/Spliter';
import { IChannelInfo } from '../../interfaces/channel';

const Channel = (props: IChannelInfo) => {

    const [channelLogo, setChannelLogo] = useState<string>();

    useEffect(() => {
        const channel = spilter(props.name);
        setChannelLogo(channel);
    }, [props.name]);

    return (
        <div>
            <Box>
                <Box p={2}>
                    <Box display="flex" flexDirection="row">
                        <Box width={10} height={10} bg="bg.100" borderRadius="md">
                            <Center h={10}>
                                <Text fontSize="18px" fontWeight={500}>{channelLogo}</Text>
                            </Center>
                        </Box>
                        <Box p={2}>
                            <Text fontSize="16px" fontWeight={500}>{props.name}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Channel
