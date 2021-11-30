import { Image } from '@chakra-ui/image'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

function Header() {

	const logoSection = () => {
		return (
			<Flex>
				<Text 
					fontFamily="Montserrat"
					fontSize="28px"
					fontWeight="600"
					color="cyan"
					pl="5"
				>
					Twiner
				</Text>
			</Flex>
		)
	}

	return (
		<Flex borderBottom="2px solid cyan" bg="black" height="70px" alignItems="center">
			<Box ml="10">
				{logoSection()}
			</Box>
			<Flex ml="auto" mr="10">
				<Text
					color="cyan"
					fontFamily="Montserrat"
					borderBottom="2px solid black"
					_hover={{borderBottom: "2px solid cyan"}}
					mr="2"
				>
					Login
				</Text>
				<Text
				color="cyan"
				fontFamily="Montserrat"
				>|</Text>
				<Text
					color="cyan"
					fontFamily="Montserrat"
					borderBottom="2px solid black"
					_hover={{borderBottom: "2px solid cyan"}}
					ml="2"
				>
					Register
				</Text>
			</Flex>
		</Flex>
	)
}

export default Header
