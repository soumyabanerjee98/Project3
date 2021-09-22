// Clock section start
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');

function addZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}
function time() {
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hr = d.getHours();   
     hourTime.innerHTML =    `${addZero((hr % 12) || 12)}`
     minTime.innerHTML  =    `${addZero(min)}`
     secTime.innerHTML  =    `${addZero(sec)}`
     aMpM.innerHTML     =    `${hr >= 12 ? 'PM' : 'AM'}`
}
setInterval(time, 1000);
// Clock section end
// Message start
const message = document.querySelector('.message');
  var d1 = new Date();
  var hr1 = d1.getHours();
    if(hr1>5 && hr1<=10){
      message.innerText = "Get up and have breakfast !!";
    }
    else if(hr1>10 && hr1<=13){
      message.innerText = "Study time !!";
    }
    else if(hr1>13 && hr1<=18){
      message.innerText = "Let's Have Some Lunch !!";
    }
    else if(hr1>18 && hr1<=20){
      message.innerText = "Snacks and tea time !!";
    }
    else{
      message.innerText = "Have dinner and go to sleep !!";
    }
// Message end
// Wish start
const wish = document.querySelector('.wish-heading-text');
  var d2 = new Date();
  var hr2 = d2.getHours();
    if(hr2>5 && hr2<=10){
      wish.innerText = "Good Morning!";
    }
    else if(hr2>10 && hr2<=13){
      wish.innerText = "Good Noon!";
    }
    else if(hr2>13 && hr2<=18){
      wish.innerText = "Good Afternoon!";
    }
    else if(hr2>18 && hr2<=20){
      wish.innerText = "Good Evening!";
    }
    else{
      wish.innerText = "Good Night!";
    }
// Wish end