// Time 

function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.getElementById('Time').innerHTML = t_str;
}
setInterval(updateTime, 250);



// Day

function day(){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = days[d.getDay()];

    document.getElementById("Day").innerHTML = day;
}
setInterval(day, 250);


// Month
function month(){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const d1 = new Date();
    let month = months[d1.getMonth()];

    var today = new Date();
    var date = today.getDate()+' '+months[d1.getMonth()]+' '+today.getFullYear();

    document.getElementById("Month").innerHTML = date;
}
setInterval(month, 250);