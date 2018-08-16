import { log } from "./log.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const video = document.createElement('video');
const detector = new BarcodeDetector;
const videoConstraints = { video: { facingMode: { exact: "environment" } } };

navigator.getUserMedia(videoConstraints, treatStream, log);

function treatStream(stream) {
    video.src = window.URL.createObjectURL(stream);
}

setInterval(_ => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    detector.detect(canvas)
        .then(r => log((r[0] || {}).rawValue))
        .catch(log)
}, 100);