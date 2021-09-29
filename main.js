// Clock section start
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');
const message = document.querySelector('.message');
const wish = document.querySelector('.wish-heading-text');
const image = document.querySelector('.image');
const btn = document.querySelector('.wish-button');
const ts1 = document.querySelector('.ts1');
const ts2 = document.querySelector('.ts2');
const ts3 = document.querySelector('.ts3');

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

    btn.addEventListener('click', party);
    ts1.addEventListener('click', ch1);
    ts2.addEventListener('click', ch2);
    ts3.addEventListener('click', ch3);
    
    function party(){
      btn.innerText = "Let's Party";
      message.innerText = "Let's party and chill !!";
      wish.innerText = "Enjoy the Party";
      image.innerHTML = '<img src="./img/party2.svg" alt="">';
    }
    function ch1(){
      image.innerHTML = '<img src="./img/Sunny day-bro.svg" alt="">';
    }
    function ch2(){
      image.innerHTML = '<img src="./img/Pizza sharing-cuate.svg" alt="">';
    }
    function ch3(){
      image.innerHTML = '<img src="./img/Sleep analysis-cuate.svg" alt="">';
    }
    
// Change end