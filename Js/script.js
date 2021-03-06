var year = document.getElementById('year');
var days = document.getElementById('days');
var hour = document.getElementById('hour');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var currentYear = new Date().getFullYear();
var nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function countDownTimer(){
    var currentTime = new Date();
    var diff = nextYear - currentTime;
    
    var d = Math.floor(diff / 1000 / 60 / 60 / 24);
    var h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    var m = Math.floor(diff / 1000 / 60 ) % 60;
    var s = Math.floor(diff / 1000 ) % 60;
    
    seconds.innerHTML = s < 10 ? '0' + s : s;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    hour.innerHTML = h < 10 ? '0' + h : h;
    days.innerHTML = d < 10 ? '0' + d : d;
}

setInterval(countDownTimer, 1000);
year.innerHTML = nextYear.getFullYear();