function showDate(){
    var date = new Date();
    var current_date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();
    document.getElementById("p1").innerHTML = current_date;
}
function showTime(){
    var date = new Date();
    var current_date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();
    document.getElementById("p2").innerHTML = date;
}
