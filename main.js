nose_X = 0;
nose_Y = 0;
function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function draw(){
  image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
circle(nose_X,nose_Y,20);
}
function Take_snapshot(){
 save("FilteredImage.png");
}
function gotPoses(results){
if(results.length > 0){
  console.log(results);
  nose_X = results[0].pose.nose.x;
  nose_Y = results[0].pose.nose.y;
  console.log("X = " + nose_X + " Y= "+ nose_Y);
}
}