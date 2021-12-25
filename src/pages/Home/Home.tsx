import React, { useEffect } from 'react'
import { Grid, GridItem } from '@chakra-ui/react';
import ListView from '../../components/ListView/ListView';
import TextView from '../../components/TextView/TextView';
import { database } from '../../config/firebase.config';
import { ref, onValue, set } from "firebase/database";


const Home: React.FC = () => {

    const createDefaultChannel = () => {
        const channelRef = ref(database, 'channels');
        onValue(channelRef, (snapshot) => {
            const data = snapshot.val();
            if (!data?.welcome) {
                set(ref(database, 'channels/'), {
                    welcome: {
                        name: 'Welcome',
                        description: 'Welcome to Chatloop',
                        members: null,
                        createdBy: 'system'
                    }
                });
            }
        });
    }

    useEffect(() => {
        createDefaultChannel();
    }, [])

    return (
        <>
            <Grid
                h='100vh'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
            >
                <GridItem rowSpan={2} colSpan={1} bg='bg.200' >
                    <ListView />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='bg.100' >
                    <TextView />
                </GridItem>
            </Grid>
        </>
    )
}

export default Home;
