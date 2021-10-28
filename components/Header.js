import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Heading, HStack, IconButton } from "native-base";
import React from "react";

const Header = () => {

    return (
        <HStack p="8px" justifyContent="space-between" alignItems="center" safeArea safeAreaBottom={0} w="100%" h="92px" bg="white">
        <IconButton
        name="md-menu"
        icon={<MaterialCommunityIcons size={24} name="home" />}
        />
        <Heading fontSize="xl" color="gray.600">KeyweGram</Heading>
        <IconButton
        icon={<MaterialCommunityIcons size={24} name="chat" />}
        />
        </HStack>
    )
}

export default Header;