function colok(){
    let date = new Date();
    let datee=date.getDate()
    let days=date.getDay()
    let hours=date.getHours();
    let minutes =date.getMinutes();
    let seconds =date.getSeconds();
    let flag='AM'
    
    if(hours ==0){//نهارا 
        hours=12

    }
    if(hours>12){// ظهرا
    hours = hours -12;
    flag='pm'
    }
    if(hours<10)hours="0"+hours;
    if(minutes<10)minutes='0'+minutes;
    if(seconds<10)seconds='0'+seconds;
    document.querySelector('.clock').innerHTML= `${datee} ${days} :${hours} : ${minutes} :${seconds} : ${flag}`;
    setTimeout(function(){
        colok()
    },1000)
}
colok()