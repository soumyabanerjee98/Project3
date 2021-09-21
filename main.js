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
// message start
const message = document.querySelector('.message');
  var d1 = new Date();
  var hr1 = d1.getHours();
    if(hr1>5 && hr1<=10){
      message.innerText = "Get up and have breakfast !!";
    }
    else if(hr1>10 && hr1<=13){
      message.innerText = "Study time !!";
    }
    else if(hr1>13 && hr<=18){
      message.innerText = "Let's Have Some Lunch !!";
    }
    else if(hr1>18 && hr<=20){
      message.innerText = "Snacks and tea time !!";
    }
    else{
      message.innerText = "Have dinner and go to sleep !!";
    }
// message end
// Wish start
const wish = document.querySelector('.wish-heading-text');
  var d1 = new Date();
  var hr1 = d1.getHours();
    if(hr1>5 && hr1<=10){
      wish.innerText = "Good Morning!";
    }
    else if(hr1>10 && hr1<=13){
      wish.innerText = "Good Noon!";
    }
    else if(hr1>13 && hr<=18){
      wish.innerText = "Good Afternoon!";
    }
    else if(hr1>18 && hr<=20){
      wish.innerText = "Good Evening!";
    }
    else{
      wish.innerText = "Good Night!";
    }
// Wish end









