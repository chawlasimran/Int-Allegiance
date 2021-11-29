import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import Carousel from '../components/Carousel'
import Intro from '../components/Intro'
import Header from '../components/Header'
import VideoBackground from '../components/VideoBackground'

function Home() {
	return (
		<Box bg="black" height="100vh">
			<Header/>
			<Flex>
				<Box flex="1">
					<Intro/>
				</Box>
				<Box flex="1.5">
					<VideoBackground/>
					{/* <Carousel/> */}
				</Box>
			</Flex>
		</Box>
	)
}

export default Home
