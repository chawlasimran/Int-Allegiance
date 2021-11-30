import { Input } from '@chakra-ui/input'
import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/layout'
import React from 'react'
import Header from '../components/Header'
import ChallengeGrid from '../components/ChallengeGrid'
import Filter from '../components/Filter'

function Challenges() {
    return (
        <Box minHeight="100vh" bg="black">
            <Header/>
            <Flex p="12">
                <Box flex="1">
                    <Filter/>
                </Box>
                <Box minHeight="90vh">
                    <Divider orientation="vertical"/>
                </Box>
                <Box flex="5">
                <Flex p="3">
                    <Text
                        color="cyan"
                        fontSize="24px"
                        fontFamily="Montserrat"
                        fontWeight="600"
                        ml="2"
                    > 
                        CHALLENGES 
                    </Text>
                    <Spacer/>
                    <Input size="sm" placeholder="Search challenge" bg="lightgray" width="200px" ml="auto" mr="2"/>
                </Flex>
                {/* <Divider/> */}
                <Box>
                    <ChallengeGrid/>
                </Box>
                </Box>
            </Flex>
            
        </Box>
    )
}

export default Challenges
