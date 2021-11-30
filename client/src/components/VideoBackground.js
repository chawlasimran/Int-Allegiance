import { Box } from '@chakra-ui/layout'
import video from '../carousel-images/video.mp4'

function VideoBackground() {
    return (
        <Box height="90vh" position="relative">
            <Box 
                position="absolute" 
                zIndex="3000"
                background="linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 100%)"
                width="100%"
                minHeight="100%"
                left="0px"
            />
            <Box 
                position="absolute" 
                zIndex="3000"
                background="linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)"
                width="100%"
                minHeight="100%"
                left="-20px"
                top="0px"
            />
            <Box 
                position="absolute" 
                zIndex="3000"
                background="linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)"
                width="70%"
                minHeight="100%"
                right="-40px"
                top="0px"
            />
            <Box 
                position="absolute" 
                zIndex="3000"
                background="linear-gradient(to top, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%)"
                width="100%"
                minHeight="100%"
                top="0px"
            />
            <video style={{width: "100% !important", minHeight: "100%", height: "100% !important", objectFit: "cover"}} preload="auto" autoPlay playsInline muted loop>
                <source src={video} type="video/mp4"/>
            </video>
        </Box>
    )
}

export default VideoBackground
