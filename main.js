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
const d1 = new Date();
const hr1 = d1.getHours();

// Clock section start
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

// party start
    btn.addEventListener('click', party);
    function party(){
      btn.innerText = "Let's Party";
      message.innerText = "Let's party and chill !!";
      wish.innerText = "Enjoy the Party";
      image.innerHTML = '<img src="./img/party2.svg" alt="">';
    }
// party end

// Change start
    ts1.addEventListener('click', ch1);
    ts2.addEventListener('click', ch2);
    ts3.addEventListener('click', ch3);
    
    
    function ch1(){
      if (ts1.value == hr1){
        image.innerHTML = '<img src="./img/Sunny day-bro.svg" alt="">';
        message.innerText = "Have some Breakfast !!";
        wish.innerText = "Good Morning";
      }
      else{
        // image.innerHTML = '<img src="./img/undraw_beer_xg5f.svg" alt="">';
        message.innerText = "";
        wish.innerText = "";
      }
    };
    function ch2(){
      if (ts2.value == hr1){
        image.innerHTML = '<img src="./img/Pizza sharing-cuate.svg" alt="">';
        message.innerText = "Have some Lunch !!";
        wish.innerText = "Good Noon";
      }
      else{
        // image.innerHTML = '<img src="./img/undraw_beer_xg5f.svg" alt="">';
        message.innerText = "";
        wish.innerText = "";
      }
    };
    function ch3(){
      if(ts3.value == hr1){  
        image.innerHTML = '<img src="./img/Sleep analysis-cuate.svg" alt="">';
        message.innerText = "Have some Dinner !!";
        wish.innerText = "Good Night";
      }
      else{
        // image.innerHTML = '<img src="./img/undraw_beer_xg5f.svg" alt="">';
        message.innerText = "";
        wish.innerText = "";
      }
    };
// Change End