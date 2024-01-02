song1="";
song2="";
song_1status="";
song_2status="";
rightwristx=0;
leftwristx=0;
rightwristy=0;
leftwristy=0;
function preload(){
    song1=loadSound("Music 1.mp3");
    song2=loadSound("Music 2.mp3");
} 

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initalised');
}
function gotPoses(results){
    if(results.length>0){
console.log(results);
leftwristX=results[0].pose.leftwrist.X;
leftwristy=results[0].pose.leftwrist.y;
console.log("leftwristX="+leftwristX+"leftwristY="+leftwristy);

rightwristX=results[0].pose.rightwrist.X;
rightwristy=results[0].pose.rightwrist.y;
console.log("rightwristX="+rightwristX+"rightwristY="+rightwristy);

    }
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}