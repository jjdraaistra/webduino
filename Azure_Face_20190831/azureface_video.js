document.write('<div id="region"><video id="video" width="320" height="240" preload autoplay loop muted></video><br><div id="result" style="width:320px;color:red"></div></div>');
document.write('<canvas id="gamecanvas_azureface" style="display:none;position:absolute;"></canvas>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_azureface'); 

  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: {
      facingMode: "user"
      }
    })
   .then(stream => {
      video.srcObject = stream
      video.onloadedmetadata = () => {       
      video.play();     
      canvas.setAttribute("width", video.width);
      canvas.setAttribute("height", video.height); 
    }
  })   
}
