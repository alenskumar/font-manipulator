function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(150,180)
    canvas = createCanvas(550,450);
    canvas.position(760,200);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results)
{
  if (results.length > 0)
  {
      console.log(results);
  }
}
