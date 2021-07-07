function setup(){
    canvas=createCanvas(270,270);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('',modelLoaded);
}

function draw(){
    image(video, 0,0,270,270);
    classifier.classify(video, gotResult);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHtml=results[0].confidence.toFixed(3);
}
}