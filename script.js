const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
// console.log(countdown);

const loading = document.querySelector(".loading");
window.addEventListener("load", ()=>{
    loading.style.display = "block";
    //miliseconds in setTimeout
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex";
    }, 1000);
    
    // years.innerHTML = "00";
    // months.innerHTML = "00";
    // days.innerHTML = "00";
    // hours.innerHTML = "00";
    // minutes.innerHTML = "00";
    // seconds.innerHTML = "00";

    let H2Elements = document.getElementsByTagName("h2");
    // console.log("H2Elements", H2Elements);
    // for (let index = 0; index < H2Elements.length; index++) {
    //     H2Elements[index].innerHTML = "00";
    // }

    let H2Elements2 = countdown.querySelectorAll("h2");
    // console.log("H2Elements2", H2Elements2);

    // nodeList.forEach()
    // Array.forEach()

    // H2Elements2.forEach((element) =>{
    //     console.log(element)
    //     element.innerHTML = "00";
    // });

    //convert to array from html Collection
    // Array.from(H2Elements).forEach(el => {
    //     el.innerHTML = "00";
    // });

    [...H2Elements].forEach(el => {
        el.innerHTML = "00";
    });
});

let selectedBirthday;
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event)=>{
    console.log("dateString", event.target.value);
    //event.target == birthdayInput
    //convert to date from dateString
    selectedBirthday = new Date(event.target.value);
    console.log("dateObject", selectedBirthday);
    if(selectedBirthday > new Date()){
        alert("Doğum tarihiniz bugünden büyük olamaz!!");
        return;
    }
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";
    
    setInterval(updateCountdown, 1000);

});

const updateCountdown = () =>{
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHour = selectedBirthday.getHours();
    let dobMinute = selectedBirthday.getMinutes();
    let dobSecond = selectedBirthday.getSeconds();

    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    // if positive => no problem
    let yearOfAge = currentYear - dobYear;
    let monthOfAge = currentMonth - dobMonth;
    let dayOfAge = currentDay - dobDay;
    let hourOfAge = currentHour - dobHour;
    let minuteOfAge = currentMinute - dobMinute;
    let secondOfAge = currentSecond - dobSecond;

    if(secondOfAge <0){
        secondOfAge += 60;
        minuteOfAge--;
    }
    if(minuteOfAge < 0){
        minuteOfAge += 60
        hourOfAge --;
    }
    if(hourOfAge <0){
        hourOfAge += 24;
        dayOfAge--;
    }
    if(dayOfAge <0){
        //homework ==> istead of 30 get previous month day
        monthOfAge --;
        dayOfAge += 30;
    }
    if(monthOfAge <0){
        yearOfAge --;
        monthOfAge += 12;
    }
    

    //Add values to DOM

    years.innerHTML = yearOfAge.toString().padStart(2, "0");
    months.innerHTML = monthOfAge.toString().padStart(2, "0");
    days.innerHTML = dayOfAge.toString().padStart(2, "0");
    hours.innerHTML = hourOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
    seconds.innerHTML = secondOfAge.toString().padStart(2, "0");




}



    


