// const getValue =document.getElementById("getValue");
//  const show =document.getElementById("show");
// const store = getValue.value;
// show.innerHTML="Happy Merry Christmas "+store;

var countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timeUp").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance =< 0) {
    clearInterval(x);
    document.getElementById("timeUp").innerHTML = "MARRY CHRISTMAS";
  }
}, 1000);
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    // Access the microphone stream
    console.log('Microphone access granted.');
    // Do something with the stream, e.g., play it in an audio element
  })
  .catch(function(err) {
    // Handle errors, e.g., permission denied
    console.error('Error accessing microphone:', err);
  });
