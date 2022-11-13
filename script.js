let clock = document.getElementById("clock");
let date = document.getElementById("date");
let dateTime;
const timeLapse = 1000;
let currentDateTime = {
    fullDateTime: "",
    shortDate: "",
    hour: 0,
    min: 0,
    sec: 0,

    currentTimeMsg: function(){
        let hour, min, sec;

        if(this.hour < 10){
            hour = `0${this.hour}`;
        }
        else{
            hour = `${this.hour}`;
        }

        if(this.min < 10){
            min = `0${this.min}`;
        }
        else{
            min = `${this.min}`;
        }

        if(this.sec < 10){
            sec = `0${this.sec}`;
        }
        else{
            sec = `${this.sec}`;
        }

        return `${hour}:${min}:${sec}`
    },
    updateCurrentDateTime: function(date){
        dateTime = new Date();
        this.hour = dateTime.getHours();
        this.min = dateTime.getMinutes();
        this.sec = dateTime.getSeconds();
        this.fullDateTime = Date();
        this.shortDate = this.fullDateTime.slice(0, 15);
    }
};

setInterval(() => {
    currentDateTime.updateCurrentDateTime();
    date.innerText = currentDateTime.shortDate;
    clock.innerText = currentDateTime.currentTimeMsg();
}, timeLapse);