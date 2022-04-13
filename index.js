// npm install livecam 

const LiveCam = require('livecam');
const webcam_server = new LiveCam({
    'start' : function() {
        console.log('WebCam Server Started!');
    }
});

webcam_server.broadcast();