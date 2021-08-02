document.getElementById("name").innerHTML=" a Coder"
Webcam.set({
    width:310,
    height:300,
image_format:"png",
png_quality:1001,
Constraints:{
    facingMode:"environment"
}
});
Camera=document.getElementById("camera")
Webcam.attach(Camera)
function CaptureImage() {
    Webcam.snap(function(img_uri){
    document.getElementById("Image").innerHTML="<img id='Img' src= '"+img_uri+"'>"; 
});
}
console.log("ml5 verson is", ml5.version)
Classifier=ml5.imageClassifier("MobileNet",Model_loaded)
function Model_loaded() {
    console.log("Model_loaded")
}
function IdentifyImage() {
    img=document.getElementById("Img")
    Classifier.classify(img,getResult)
}
function getResult(error,result) {
    if (error) {
        console.log("We have an error in the system. And it is ", error)
    } else {
        console.log(result)
document.getElementById("Object_name").innerHTML=result[0].label
    }
}