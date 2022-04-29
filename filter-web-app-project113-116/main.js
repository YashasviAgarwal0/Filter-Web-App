nosex = 0;
nosey = 0;

function preload()
{
   
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose Net is Initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x-;
        nosey = results[0].pose.nose.y-;
    }
}

function draw()
{

}

function take_snapshot()
{
    save('my FilterImage.png');
}