var SpeechRecognition = window.webkitSpeechRecognition;
var Display_Speech = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = " ";
    Display_Speech.start();
}

Display_Speech.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie")
    {
        speak();
        console.log("**********");
    }
}

function speak()
{
    var speak_man = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utter_man = new SpeechSynthesisUtterance(speak_data);
    speak_man.speak(utter_man);
    setTimeout(function(){
        take_snap();
        save();
    },5000);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
   });
 function take_snap()
 {
     Webcam.snap(function(data_uri)
     {
         document.getElementById("output").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
        
        });
 }
 function save()
 {
      link = document.getElementById("link_download");
      image = document.getElementById("selfie_image").scroll;
      link.href = image;
      link.click();

 }
   