function displayTime(){
    var dateTime=new Date();
    var hrs = dateTime.getHours();
    var sec = dateTime.getSeconds();
    var min = dateTime.getMinutes();
    var session = document.getElementById('session');
    if(hrs>=12){
        session.innerHTML = "PM";
    }
    else{
        session.innerHTML  = "AM";
    }
    if(hrs>12){
        hrs = hrs-12;
    }

    document.getElementById('hour').innerHTML=hrs;
    document.getElementById('minute').innerHTML=min;
    document.getElementById('second').innerHTML=sec;

}
setInterval(displayTime , 10);