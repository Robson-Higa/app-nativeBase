import React from "react";

import { Box, Image, Heading, Text, Icon, HStack } from 'native-base';
import { AntDesign, Feather } from '@expo/vector-icons'


export default function Feed ({ data }) {

    return (
        <Box flex={1} flexDirection= "column" marginBottom={4} backgroundColor="info.50" padding={2} borderRadius={4}>
            <Box>
                <Image
                    source={{ uri: data.avatarUrl }} 
                    alt= "Post Feed"
                    w= '100%'
                    h={500}
                />
            </Box>
            <Box marginY={1}>
                <Heading size= 'sm'>
                    {data.fullName}
                </Heading>
                <Text numberOfLines={2}>
                    {data.summary}
                </Text>
            </Box>
           
            <Box marginY={1} paddingX={3}>
                <HStack justifyContent='space-between' alignItems='center'>
                    <Box flexDirection='row' >
                        <Icon 
                        as={Feather}
                        name="eye"
                        size={5}
                        marginRight={2}
                    />
                        <Text>
                            {data.genres}
                        </Text>
                    </Box>
                    <Box flexDirection='row'>                        
                        <Icon 
                            as={AntDesign}
                            name="like1"
                            size={5}
                            marginRight={2}
                        />
                        <Icon 
                            as={AntDesign}
                            name="dislike1"
                            size={5}
                            marginRight={2}
                        />   
                    </Box>
                </HStack>
            </Box>           
        </Box>
    )
}