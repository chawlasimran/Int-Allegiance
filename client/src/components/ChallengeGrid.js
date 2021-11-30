import { Image } from '@chakra-ui/image'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/layout'
import React from 'react'
import { useNavigate } from 'react-router'
import dancer from '../carousel-images/dancer.gif'

function ChallengeGrid() {
	const videos = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2]

	const navigate = useNavigate()

	const handleClick = () => {
		navigate("/arena")
	}

	return (
		<Grid templateColumns="repeat(4, 1fr)" gap="5" p="5">
			{
				videos.map((video, idx) => {
					return (
						<GridItem 
							height="325px" 
							bg="black"
							borderRadius="10px"
							cursor="pointer"
							onClick={() => {handleClick()}}
							_hover={{boxShadow: "0px 0px 5px 2px cyan"}}
						>
							<Box height="190px">
								<Image src={dancer} alt="Temp" height="100%" width="100%" objectFit="cover" borderRadius="10px 10px 0 0"/>
							</Box>
							<Box p="2">
								<Text
									color="white"
									fontFamily="Montserrat"
									fontSize="14px"
									p="1"
								>
									Daily aerobic routine to keep you energized all day
								</Text>
								<Flex pl="1" pr="1" mt="0.5">
									<Text color="lightgray" fontFamily="Montserrat" fontSize="14px">
										Rohan Shetty
									</Text>
									<Text color="lightgray" fontFamily="Montserrat" fontSize="12px" ml="auto">00:30</Text>
								</Flex>
								<Flex color="gray" pl="1" pr="1">
									<Text color="lightgray" fontFamily="Montserrat" fontSize="12px">
										1.25K challenges
									</Text>
									<Text color="lightgray" fontFamily="Montserrat" fontSize="12px" ml="auto">2 days ago</Text>
								</Flex>
								<Flex color="gray" pl="1" pr="1" mt="1">
									<Text color="orange" fontFamily="Montserrat" fontSize="12px">
										MEDIUM
									</Text>
									<Text color="white" fontFamily="Montserrat" fontSize="12px" ml="auto" color="white">Aerobics</Text>
								</Flex>
							</Box>
						</GridItem>
					)
				})
			}
		</Grid>
	)
}

export default ChallengeGrid
