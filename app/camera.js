'use strict';

var video = document.getElementById("camera-preview");

var handleCameraSuccess = function(mediaStream){
  video.style.display = "block";
  video.src = window.URL.createObjectURL(mediaStream);
  video.play();
};

var handleCameraError = function(){
  alert("カメラ検出に失敗しました");
};

navigator.webkitGetUserMedia({video:true, audio:false}, handleCameraSuccess, handleCameraError);