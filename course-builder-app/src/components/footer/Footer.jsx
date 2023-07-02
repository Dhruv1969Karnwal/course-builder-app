import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular, TiSocialInstagramCircular, TiSocialGithub} from "react-icons/ti"
import {DiGithub} from "react-icons/di"
const Footer = () => {
  return (
    <Box padding={"4"} bg={"blackAlpha.900"} minH={"10vh"}>
        <Stack direction={["column", "row"]}>
            <VStack alignItems={["center", "flex-start"]} width={"full"}>
                <Heading children="ALL Rights Reserved" color={"white"} />
                <Heading
                fontFamily={"body"}
                size={"sm"}
                children="DarKnight"
                color={"yellow.400"} />
            </VStack>
            <HStack spacing={["2", "10"]} justifyContent={"center"} size="50" color={"white"}>
                <a href='https://youtube.com' target={"_blank"}>
                    <TiSocialYoutubeCircular />
                </a>
                <a href='https://youtube.com' target={"_blank"}>
                    <TiSocialInstagramCircular />
                </a>
                <a href='https://youtube.com' target={"_blank"}>
                    <TiSocialGithub />
                </a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer