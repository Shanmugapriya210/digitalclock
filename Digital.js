function updateClock(){

  let dateTime=new Date()
  let hour=dateTime.getHours()
 let min =padZero(dateTime.getMinutes())
 let second=padZero(dateTime.getSeconds())
    if(hour>=12){
        document.getElementById('AMPM').innerHTML='PM'
    }

     document.getElementById('hours').innerHTML=padZero(hour)
     document.getElementById('mins').innerHTML=padZero(min)
     document.getElementById('seconds').innerHTML=padZero(second)


}
function padZero(num){
    return num<10?"0"+num:num
}


setInterval(updateClock,500)



