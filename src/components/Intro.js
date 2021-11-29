import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { useNavigate } from 'react-router-dom'
import React from 'react'

function Intro() {

	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/challenges')
	}

	return (
		<Flex height="80vh" p="10" width="45vw" flexDirection="column" justifyContent="center">
			<Text fontSize="56px" fontFamily="Montserrat" color="cyan" pl="5">Twiner</Text>
			<Text 
				whiteSpace="pre-wrap" 
				fontSize="32px" 
				color="cyan" 
				fontFamily="sans-serif"
				fontWeight="600"
				pl="5"
				mt="2"
			>
				Twine with the tune to perfection and score points to top the leaderboard
			</Text>
			<Text
				whiteSpace="pre-wrap" 
				fontSize="18px" 
				color="white" 
				fontFamily="sans-serif"
				fontWeight="400"
				mt="5"
				pl="5"
			>
				Choose from a collection of challenges from aerobics to yoga to dance and many more
			</Text>
			<Box pl="5" mt="10">
			<Button
				bg="cyan"
				color="black"
				onClick={() => {handleClick()}}
			>
				Begin Challenge
			</Button>
			</Box>
		</Flex>
	)
}

export default Intro
