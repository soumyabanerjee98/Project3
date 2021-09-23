// Clock section start
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');
const message = document.querySelector('.message');
const wish = document.querySelector('.wish-heading-text');
const image = document.querySelector('.image');

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
// Change start
  var d1 = new Date();
  var hr1 = d1.getHours();
    if(hr1>=6 && hr1<12){
      message.innerText = "Get up and have breakfast !!";
      wish.innerText = "Good Morning!";
      image.innerHTML = '<img src="./img/Sunny day-bro.svg" alt="">';
    }
    else if(hr1>=12 && hr1<18){
      message.innerText = "Let's Have Some Lunch !!";
      wish.innerText = "Good Noon!";
      image.innerHTML = '<img src="./img/Pizza sharing-cuate.svg" alt="">';
    }
    else if(hr1>=18 && hr1<20){
      message.innerText = "Let's Have Some Lunch !!";
      wish.innerText = "Good Evening!";
      image.innerHTML = '<img src="./img/Pizza sharing-cuate.svg" alt="">';
    }
    else{
      message.innerText = "Have dinner and go to sleep !!";
      wish.innerText = "Good Night!";
      image.innerHTML = '<img src="./img/Sleep analysis-cuate.svg" alt="">';
    }
// Change end