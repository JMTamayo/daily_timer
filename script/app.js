function alertBeep(totalTime){
    let beep = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    for(let j = 1; j <= totalTime; j++){
        setTimeout(() => {
            for(let i = 1; i <= 3; i++){
                beep.play();
            };
        }, 1000*j);
    };
    console.log("Running beep...")
};

function workingTimeInpCheck(id){
    let inputValue = document.getElementById(id).value;
    if(Number(inputValue)%1 !== 0){
        document.getElementById(id).value = "";
    }
};

function stopWorkingTimer(){
    document.getElementById('workingTimerResult').style.display = 'none';
    document.getElementById('workingTimeInp').readOnly = false;
    document.getElementById('stopWorkingTimeBtn').style.display = 'none';
    document.getElementById('workingTimeBtn').style.display = 'flex';
    document.getElementById('workingTimeBtn').style.justifyContent = 'center';
};

function runWorkTimer(test){
    document.getElementById('workingTimerResult').style.display = 'flex';
    document.getElementById('workingTimeInp').readOnly = true;
    document.getElementById('workingTimeBtn').style.display = 'none';
    document.getElementById('stopWorkingTimeBtn').style.display = 'block';

    let timeLapse = 1000;
    let workingTime = {
        hour: 0,
        minute:  0,
        totalSeconds: 0,
        initialMillisec : 0,
        currentMillisec: 0,
        running: false,
        breakTime: Number(document.getElementById('workingTimeInp').value),

        updateWorkingTime: function(){
            this.minute = Math.floor((this.totalSeconds/60)%60);
            this.hour = Math.floor(((this.totalSeconds/60)/60)%60);

            if(document.getElementById('workingTimeInp').readOnly === true){
                this.running = true;
            }
            else{
                this.running = false;
            }
        },

        currentTimeMsg: function(){
            let hours, minutes;

            if(this.hour < 10){
                hours = `0${this.hour}`;
            }
            else {
                hours = `${this.hour}`;
            }

            if(this.minute < 10){
                minutes = `0${this.minute}`;
            }
            else {
                minutes = `${this.minute}`;
            }

            return `${hours}:${minutes}`;
        },

        breakAlert: function(test){
            let aux = (this.totalSeconds/60)%this.breakTime;
            if( aux === 0){
                console.log(`Alert at ${this.currentTimeMsg()} (each ${test[3]})`);
                console.log([test[4], aux]);
                alertBeep(15);
            };
        },

        getMillisec: function(){
            return new Date().getTime();
        }
    }
    
    workingTime.initialMillisec = workingTime.getMillisec();
    workingTime.updateWorkingTime();
    document.getElementById('workingTimerResult').innerText = workingTime.currentTimeMsg();
    workingTime.running = true;

    let flag = setInterval(()=>{
        if(workingTime.running === false){
            clearInterval(flag);
        };
        workingTime.currentMillisec = workingTime.getMillisec();
        workingTime.totalSeconds = Math.floor((workingTime.currentMillisec - workingTime.initialMillisec)/1000);
        workingTime.updateWorkingTime();
        test[4] = `${workingTime.hour}:${workingTime.minute}`;
        workingTime.breakAlert(test);
        document.getElementById('workingTimerResult').innerText = workingTime.currentTimeMsg();
    },timeLapse)
}

setTimeout(() => {
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
            this.newHourAlert();
        },

        newHourAlert: function(){
            if(this.min === 0 && this.sec === 0){
                alertBeep(1);
            }
        }
    };

    setTimeout(() => {
        document.getElementById('timerCont').style.display = 'flex';
        document.getElementById('timerCont').style.flexDirection = 'column';
    }, timeLapse);

    setInterval(() => {
        currentDateTime.updateCurrentDateTime();
        date.innerText = currentDateTime.shortDate;
        clock.innerText = currentDateTime.currentTimeMsg();

        let testAux = [undefined , undefined, undefined, undefined]; /*[hour, min, sec, breaktime]*/
        if(currentDateTime.hour === testAux[0] && currentDateTime.min === testAux[1] && currentDateTime.sec === testAux[2]){
            console.log(`Test Started at ${currentDateTime.currentTimeMsg()}`);
            document.getElementById('workingTimeInp').value = testAux[3];
            runWorkTimer(testAux);
        }

    }, timeLapse);

}, 2000);