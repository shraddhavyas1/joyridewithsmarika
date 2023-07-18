/*gouravv bhiya ka code he*/
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const Examkidate = "23 July 2023";

function countdown(){

const EXAMDATE = new Date(Examkidate);
const currentDate = new Date();

const TotalSeconds = (EXAMDATE - currentDate) / 1000 ;
//calculate 
const days = Math.floor(TotalSeconds / 3600 / 24 );
const hours = Math.floor(TotalSeconds / 3600) %24;
const mins = Math.floor(TotalSeconds / 60)% 60;
const seconds = Math.floor(TotalSeconds % 60);
///const DEAD END = 6000 - Math.floor(TotalSeconds % 60);

 daysEl.innerHTML = formatTime(days);
 hoursEl.innerHTML = formatTime(hours);
 minsEl.innerHTML = formatTime(mins);
 secondsEl.innerHTML =formatTime (seconds);
}

function formatTime(time){
  return time < 10 ?  '0'+time : time  //Time precedding zero

}
//intial call
countdown();
setInterval(countdown,1000);
