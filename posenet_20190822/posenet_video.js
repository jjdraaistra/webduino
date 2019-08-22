document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet"></script>');
document.write('<canvas id="canvas" style="transform:rotateY(180deg)"></canvas><br>Persons<select id="persons"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="999">No Limit</option></select>ScoreLimit<select id="scorelimit"><option value="0">0%</option><option value="0.1" selected>10%</option><option value="0.2">20%</option><option value="0.3">30%</option><option value="0.4">40%</option><option value="0.5">50%</option><option value="0.6">60%</option><option value="0.7">70%</option><option value="0.8">80%</option><option value="0.9">90%</option></select><br><video id="video" width="320" height="240" preload autoplay loop muted></video><div id="result" style="width:320px;color:red">Please wait for loading model.</div>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas'); 
  var context = canvas.getContext('2d');
  var result = document.getElementById('result');
  var Model; 
  
  ObjectDetect();
  function ObjectDetect() {
    posenet.load().then(function(net) {
      Model = net;
      result.innerHTML = "";
      startvideo();
    }); 
  }
  
  function startvideo() {
    video.style.visibility="hidden";
    video.style.position="absolute";
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: 320,
          height: 240
        }
      })
      .then(stream => {
        video.srcObject = stream
        video.onloadedmetadata = () => {       
          video.play();
          canvas.setAttribute("width", video.width);
          canvas.setAttribute("height", video.height);          
          setTimeout(function(){DetectVideo(); }, 100);
        }
      })   
  } 
                        
async function DetectVideo() {
  context.drawImage(video, 0, 0, video.width, video.height);
  await Model.estimatePoses(canvas, {flipHorizontal: true, decodingMethod: 'multi-person', maxPoseDetections: 5, scoreThreshold: 0.5, nmsRadius: 20}).then(pose => {
    //console.log(pose.score);
    //console.log(pose.keypoints);
    result.innerHTML = "";  
    var scoreLimit = Number(document.getElementById("scorelimit").value);
    if (pose.length>0) {
      for (var n=0;n<pose.length;n++) {
        if (n<Number(document.getElementById("persons").value)) {
          var k = pose[n].keypoints;
          if (k.length>0) {
            for (var i=0;i<k.length;i++) {
              if (k[i].score>=scoreLimit) {
                const x = k[i].position.x;
                const y = k[i].position.y;
                context.fillStyle="#00FFFF";
                context.beginPath();
                context.arc(x, y, 3, 0,2*Math.PI);
                context.closePath();
                context.fill();
              }      
              result.innerHTML += n + "," + k[i].part + "," + Math.round(k[i].score*100)/100 + "," + Math.round(k[i].position.x) + "," + Math.round(k[i].position.y) + "<br>";
            }
            context.lineWidth = 2;
            var centerShoulderX = (k[5].position.x+k[6].position.x)/2;
            var centerShoulderY = (k[5].position.y+k[6].position.y)/2; 
            if (k[5].score>=scoreLimit&&k[6].score>=scoreLimit) {
              context.beginPath();
              context.arc(centerShoulderX, centerShoulderY, 3, 0,2*Math.PI);
              context.closePath();
              context.fill();
            }              
            if (k[0].score>=scoreLimit) {
              context.strokeStyle = "#0000FF";
              context.beginPath();
              context.moveTo(k[0].position.x,k[0].position.y);
              context.lineTo(centerShoulderX, centerShoulderY);
              context.stroke(); 
            }
            if (k[5].score>=scoreLimit) {
              context.strokeStyle = "#FF3333";
              context.beginPath();
              context.moveTo(centerShoulderX, centerShoulderY);
              context.lineTo(k[5].position.x,k[5].position.y);
              context.stroke();
            }
            if (k[6].score>=scoreLimit) {
              context.strokeStyle = "#FF8800";
              context.beginPath();
              context.moveTo(centerShoulderX, centerShoulderY);
              context.lineTo(k[6].position.x,k[6].position.y);
              context.stroke();              
            }
            if (k[5].score>=scoreLimit&&k[7].score>=scoreLimit) {
              context.strokeStyle = "#FFCC22";
              context.beginPath();
              context.moveTo(k[5].position.x,k[5].position.y);
              context.lineTo(k[7].position.x,k[7].position.y);
              context.stroke();
            }
            if (k[6].score>=scoreLimit&&k[8].score>=scoreLimit) {
              context.strokeStyle = "#66DD00";
              context.beginPath();
              context.moveTo(k[6].position.x,k[6].position.y);
              context.lineTo(k[8].position.x,k[8].position.y);
              context.stroke();
            }
            if (k[7].score>=scoreLimit&&k[9].score>=scoreLimit) {
              context.strokeStyle = "#FFFF77";
              context.beginPath();
              context.moveTo(k[7].position.x,k[7].position.y);
              context.lineTo(k[9].position.x,k[9].position.y);
              context.stroke(); 
            }
            if (k[8].score>=scoreLimit&&k[10].score>=scoreLimit) {
              context.strokeStyle = "#BBFF66";
              context.beginPath();
              context.moveTo(k[8].position.x,k[8].position.y);
              context.lineTo(k[10].position.x,k[10].position.y);
              context.stroke();      
            }
            if (k[11].score>=scoreLimit) {
              context.strokeStyle = "#227700";
              context.beginPath();
              context.moveTo(centerShoulderX, centerShoulderY);
              context.lineTo(k[11].position.x,k[11].position.y);
              context.stroke(); 
            }
            if (k[12].score>=scoreLimit) {
              context.strokeStyle = "#9999FF";
              context.beginPath();
              context.moveTo(centerShoulderX, centerShoulderY);
              context.lineTo(k[12].position.x,k[12].position.y);
              context.stroke();    
            }
            if (k[11].score>=scoreLimit&&k[13].score>=scoreLimit) {
              context.strokeStyle = "#77FF00";
              context.beginPath();
              context.moveTo(k[11].position.x,k[11].position.y);
              context.lineTo(k[13].position.x,k[13].position.y);
              context.stroke(); 
            }
            if (k[12].score>=scoreLimit&&k[14].score>=scoreLimit) {
              context.strokeStyle = "#0066FF";
              context.beginPath();
              context.moveTo(k[12].position.x,k[12].position.y);
              context.lineTo(k[14].position.x,k[14].position.y);
              context.stroke();  
            }
            if (k[13].score>=scoreLimit&&k[15].score>=scoreLimit) {
              context.strokeStyle = "#99FF99";
              context.beginPath();
              context.moveTo(k[13].position.x,k[13].position.y);
              context.lineTo(k[15].position.x,k[15].position.y);
              context.stroke(); 
            }
            if (k[14].score>=scoreLimit&&k[16].score>=scoreLimit) {
              context.strokeStyle = "#0000CC";
              context.beginPath();
              context.moveTo(k[14].position.x,k[14].position.y);
              context.lineTo(k[16].position.x,k[16].position.y);
              context.stroke(); 
            }
          }
        }
      }
    }  
    setTimeout(function(){DetectVideo(); }, 100);
  });
}
}
