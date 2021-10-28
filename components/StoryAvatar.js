import { Avatar, Box, Text } from "native-base";
import React from "react";

const StoryAvatar = ({img,text}) => {

    return (
        <Box ml="2" mr="2">
        <Avatar bg="white" borderWidth="1px" borderColor="gray.200" source={{uri: img}}/>
        <Text>{text}</Text>
        </Box>
    )
}

export default StoryAvatar;