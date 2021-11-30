import express from 'express';
const app = express();
import http from 'http'
const server = http.Server(app);
import ffmpeg from 'ffmpeg';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { load } from '@tensorflow-models/posenet';
import pkg from 'canvas';
const { createCanvas, Image } = pkg;
const imageScaleFactor = 0.5;
const outputStride = 16;
const flipHorizontal = false;

import { promises } from 'fs';
import path from 'path';

const port = 8000;
const __dirname = path.resolve(path.dirname(''))

try {
  const process = new ffmpeg(__dirname + '/assets/sample.mp4'); // use your own video file here
  process.then(function (video) {
    // Callback mode
    video.fnExtractFrameToJPG(__dirname + '/assets/frames/', {
    //   frame_rate: 1,
    //   every_n_seconds: 0.1,
      number: 5, //capture total frame
      file_name: 'my_frame_%t_%s'
    }, function (error, files) {
      if (!error)
        test()
        // console.log('Frames: ' + files);
    });
  }, function (err) {
    console.log('Error: ' + err);
  });
} catch (e) {
  console.log(e);
}

function loadImage (src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('Failed to load image'))
    })
  }

const tryModel = async (src, net) => {
    console.log('start');
    const img = await loadImage(src)
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const input = tf.browser.fromPixels(canvas);
    const pose = await net.estimateSinglePose(input);
    console.log(pose);
    for(const keypoint of pose.keypoints) {
        console.log(`${keypoint.part}: (${keypoint.position.x},${keypoint.position.y})`);
    }
    console.log('end');
}

const test = async () => {
    // await foo()
    const files = await promises.readdir( __dirname + '/assets/frames/' );
    const net = await load();
    for( const file of files ) {
        console.log(file)
        tryModel(file, net)
    }
}

server.listen(port, () => {
  console.log("Listening on port " + port);
});