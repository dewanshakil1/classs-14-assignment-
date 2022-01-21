const button=document.querySelector("input[type='submit']");
const day=document.querySelector(".day");
const hour=document.querySelector(".hour");
const mins=document.querySelector(".min");
const Sec=document.querySelector(".sec");

button.addEventListener("click",function(){

   setInterval(() => {
    let date_input=document.querySelector("input[type='date']") .value;
    let time_input=document.querySelector("input[type='time']") .value;
    let start_time=new Date();
    let end_time=new Date(date_input + " " + time_input);
    let time_difference=Math.floor(Math.abs(end_time.getTime() - start_time.getTime()))

    let total_sec=Math.floor(time_difference / 1000);
    let total_min=Math.floor(total_sec / 60);
    let total_hour=Math.floor(total_min / 60);
    let total_day=Math.floor(total_hour / 24);

    let hours=total_hour - (total_day * 24);
    let min=total_min - (total_day * 24 * 60) - (hours * 60);
    let sec=total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);
    day.innerHTML=total_day;
    hour.innerHTML=hours;
    mins.innerHTML=min;
    Sec.innerHTML=sec;
   
       
   }, 1000);   
   
   
});
/***
 * age caltutator
 */
 const button2=document.getElementById("age");
 const air=document.getElementById("year");
 const MONTH=document.getElementById("month");
 const WEAK=document.getElementById("week");
 const DAY=document.getElementById("day");
 const MIN=document.getElementById("min");
 const SEC=document.getElementById("sec"); 

 button2.addEventListener("click",function(){
   let date_in=document.getElementById("dateAge") .value;
   let time_in=document.getElementById("timeAge") .value;
   let start_tim=new Date();
    let end_tim=new Date(date_in+ " " + time_in);
    let time_difference=(start_tim.getTime() - end_tim.getTime())

    let total_sec=Math.floor(time_difference / 1000);
    let total_min=Math.floor(total_sec / 60);
    let total_hour=Math.floor(total_min / 60);
    let total_day=Math.floor(total_hour / 24);
    let total_week=Math.floor(total_day / 7);
    let total_month=Math.floor( total_day / 30.4270);
    let total_year=Math.floor( total_month / 12.25);

 
   air.innerHTML=total_year;
   MONTH.innerHTML=total_week;
   WEAK.innerHTML=total_week;
   DAY.innerHTML=total_day;
   MIN.innerHTML=total_min;
   SEC.innerHTML= total_sec;

   
     
 })
