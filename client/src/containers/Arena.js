import { Box, Flex } from '@chakra-ui/layout'
import React, {useRef} from 'react'
import Header from '../components/Header'
import video from '../carousel-images/video.mp4'
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "../utilities";

function Arena() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    //  Load posenet
    const runPosenet = async () => {
        const net = await posenet.load({
        inputResolution: { width: 640, height: 640 },
        scale: 0.9,
        });
        setInterval(() => {
        detect(net);
        }, 100);
    };

    const detect = async (net) => {
        if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
        ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Make Detections
        const pose = await net.estimateSinglePose(video);
        // console.log(pose);

        drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
        }
    };

    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;

        drawKeypoints(pose["keypoints"], 0.6, ctx);
        drawSkeleton(pose["keypoints"], 0.7, ctx);
    };

    runPosenet();
    return (
        <Box bg="black" height="100vh">
            <Header/>
            <Flex>
                <Box height="80vh" width="40vw" m="10" border="1px solid white">
                    <video style={{width: "40vw", minHeight: "100%", height: "100% !important", objectFit: "cover"}} preload="auto" autoPlay playsInline muted loop>
                        <source src={video} type="video/mp4"/>
                    </video>
                </Box>
                <Box height="80vh" width="40vw" m="10" border="1px solid white" ml="auto" position="relative">
                <Webcam
                        ref={webcamRef}
                        style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 640,
                        }}
                    />

                    <canvas
                        ref={canvasRef}
                        style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 640,
                        }}
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default Arena
