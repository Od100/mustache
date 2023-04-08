mustacheX=0;
mustacheY=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/ncQ16y2C/mustache.jpg');
} 
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initiaziled');

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
         mustacheX=results[0].pose.mustache.x-40;
         mustacheY=results[0].pose.mustache.y;
    }
}
function draw(){
    image(video,0,0,300,300);
    image(mustache, mustacheX, mustacheY, 80, 35);

}
function take_snapshot(){
    save('myfilterimage.png');
}
