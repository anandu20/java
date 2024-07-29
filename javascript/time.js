
function putZero(time){
    return time<10?"0"+time:time;
}

function  timer(){
    
    
    let date= new Date();
    let seconds=date.getSeconds();
    let hours= date.getHours();
    ampm=hours<12?"AM":"PM";


    if(seconds<=30 && seconds>=0){
        document.getElementById("head").style.backgroundImage='url("./img/sunset-saucer-caffeine-liquid-hot.jpg")';
        document.getElementById("head").style.backgroundSize = 'cover';
        document.getElementById("timer").style.backgroundColor='rgba(249, 252, 253, 0.389)';
        document.getElementById("head").style.objectFit='cover';
    }
    else{
        document.getElementById("head").style.backgroundImage='url("./img/silhouette-grass-sunset.jpg")';
        document.getElementById("head").style.backgroundSize = 'cover';
        document.getElementById("timer").style.backgroundColor='rgba(0, 0, 0, 0.389)';
        document.getElementById("timer").style.color= 'aliceblue';
    }
    
    document.getElementById("tm1").textContent=`${putZero(hours%12==0?hours:hours%12)} : ${putZero(date.getMinutes())}`;
    document.getElementById("tm2").textContent=`${ampm}`;
    document.getElementById("tm3").textContent=`${putZero(date.getSeconds())}`;


    setTimeout(() => {
        timer();
    }, 1000);
}

timer();    
