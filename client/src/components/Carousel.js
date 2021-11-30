import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useState, useEffect, useRef } from 'react'
import yoga from '../carousel-images/yoga.jpg'
import dance from '../carousel-images/dance.jpeg'
import dance2 from '../carousel-images/dance2.webp'
import dance3 from '../carousel-images/dance3.jpg'
import dance4 from '../carousel-images/dance4.jpg'
import dance5 from '../carousel-images/dancer.gif'

function Carousel() {
	const [index, setIndex] = useState(0);
	
  const timeoutRef = useRef(null);

	const images = [
		dance5, dance2, yoga,  dance3, dance4, dance
	]

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ), 4500
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Box
			overflow="hidden"
			height="90vh"
			width="42vw"
			ml="auto"
		>
      <Box
				whiteSpace="nowrap"
				transition="ease 1000ms"
        transform={`translate3d(${-index * 100}%, 0, 0)`}
      >
      {
				images.map((image, index) => {
					return (
						<Box
							display="inline-block"
							height="90vh"
							width="100%"
							key={index}
							bg="black"
							p="10"
						>
							<Box 
								bg="#28282B"
								boxShadow="0px 0px 12px 5px gray"
								borderRadius="30px"
								p="10"							
							>
								<Box boxShadow="0px 0px 5px 2px #333333" borderRadius="30px">
								<Box height="55vh" >
									<Image
											src={image}
											borderRadius="30px 30px 0 0"
											alt="Carousel"
											height="100%"
											width="100%"
											objectFit="cover"
										/>
								</Box>
								<Box height="15vh">
									<Flex justifyContent="center" alignItems="center" bg="cyan" height="15vh" borderRadius="0px 0px 30px 30px">
										<Text 
											color="white"
											fontFamily="Rubik"
											fontSize="58px"
											whiteSpace="pre-wrap"
											textAlign="center"
										>
											DANCE
										</Text>
									</Flex>
								</Box>
							</Box>
							</Box>
						</Box>
          )
				})
			}
      </Box>
    </Box>
  );

}

export default Carousel
