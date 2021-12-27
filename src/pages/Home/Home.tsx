import React, { useEffect, useState, useCallback } from 'react'
import { Grid, GridItem } from '@chakra-ui/react';
import ListView from '../../components/ListView/ListView';
import TextView from '../../components/TextView/TextView';
import { database } from '../../config/firebase.config';
import { ref, onValue, set, off } from "firebase/database";
import { IChannelInfo } from '../../interfaces/channel';


const Home: React.FC<any> = () => {

    const [channels, updateChannels] = useState<IChannelInfo[]>([]);

    const channelRef = ref(database, 'channels');

    const fetchChannelList = () => {
        onValue(channelRef, (snapshot) => {
            let data = snapshot.val();
            if (data === undefined || data === null) {
                createDefaultChannel();
            } else {
                const channelList: Array<IChannelInfo> = Object.values(data);
                updateChannels(channelList);
            }
        });
    }

    const createDefaultChannel = () => {
        const uid = 'id' + (new Date()).getTime();
        set(ref(database, 'channels/' + uid), {
            id: uid,
            name: 'Welcome',
            description: 'Welcome to Chatloop',
            members: null,
            createdBy: 'system'
        });
    };

    useEffect(() => {
        fetchChannelList();
        return () => {
            off(channelRef);
        }
    }, [channels]);

    return (
        <>
            <Grid
                h='100vh'
                templateColumns='repeat(6, 1fr)'
            >
                <GridItem  colSpan={1} bg='bg.200' >
                    <ListView  channels={channels}/>
                </GridItem>
                <GridItem  colSpan={5} bg='bg.100' >
                    <TextView />
                </GridItem>
            </Grid>
        </>
    )
}

export default Home;
