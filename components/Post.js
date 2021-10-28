import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar, Box, HStack, IconButton, Image, Text, VStack } from "native-base"
import React from "react";

const Post = ({aSource,username,location,pSource}) => {

    return (
        <Box mt="2" mb="2" h="640px" w="100%">
        <HStack w="100%" justifyContent="space-between" alignItems="center">
        <HStack ml="2">
            <Avatar size="8" source={aSource}/>
            <VStack justifyContent="center" ml="4">
                <Text>{username ? username : 'anonymous'}</Text>
                {location &&
                    <Text>{location}</Text>
                }
            </VStack>
        </HStack>
        <IconButton
        icon={<MaterialCommunityIcons name="dots-vertical"/>}
        />
        </HStack>
        <Image alt="Image" resizeMode="contain" h="100%" source={{uri: pSource}}/>
        </Box>
    )
}

export default Post;