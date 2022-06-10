mustache_x = 0;
mustache_y = 0;
function preload()
{
    mustache = loadImage('https://i.postimg.cc/DzZ8zWG0/download.png');
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
    console.log('poseNet is initialized');
}

function gotPoses(results)
 {

    

    if(results.length > 0) 
    {
        console.log(results); 
        console.log(results[0].pose.nose.x); 
        console.log(results[0].pose.nose.y); 
        mustache_x = results[0].pose.nose.x;
        mustache_y = results[0].pose.nose.y;
    }

 }


function draw()
{
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0)
    //circle(mustache_x, mustache_y, 30);
   image(mustache, mustache_x, mustache_y, 30, 30);
}

function take_snapshot()
{
save('MyFilterImage.png');
}