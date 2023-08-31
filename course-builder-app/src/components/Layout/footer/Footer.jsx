import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { TiSocialInstagramCircular, TiSocialGithub} from "react-icons/ti"
import {AiFillLinkedin, AiFillBehanceCircle, AiFillCodepenCircle} from "react-icons/ai"
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
                <a href='https://www.linkedin.com/in/dhruv-karnwal-337143235/' target={"_blank"} rel="noreferrer">
                    <AiFillLinkedin />
                </a>
                <a href='https://www.instagram.com/karnwaldhruv/' target={"_blank"} rel="noreferrer">
                    <TiSocialInstagramCircular />
                </a>
                <a href='https://github.com/Dhruv1969Karnwal' target={"_blank"} rel="noreferrer">
                    <TiSocialGithub />
                </a>
                <a href='https://www.behance.net/dhruvkarnwal1' target={"_blank"} rel="noreferrer">
                    <AiFillBehanceCircle />
                </a>
                <a href='https://codepen.io/Dhruv1969Karnwal' target={"_blank"} rel="noreferrer">
                    <AiFillCodepenCircle />
                </a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer