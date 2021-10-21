class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    };
    addClock(time, action, callId) {
        this.callId = callId;
        let timeToGetUp = time;
        if(callId === undefined) {
            throw new Error('error text');
        };
        let alarmExist = this.alarmCollection.filter((el) => el.callId === callId);
        if(alarmExist.length > 0) {
            console.error("ошибка");
            return
        };
        this.alarmCollection.push({timeToGetUp, action, callId});
    };
    removeClock(callId) {
        this.alarmCollection = this.alarmCollection.filter(n => n.callId !== callId);
        this.alarmCollection.forEach(el => {if(el.callId === callId) {
            return false
        }});
        return true    
    };
    getCurrentFormattedTime() {
        let currentDate = new Date();
        let hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}`: `${currentDate.getHours()}`
        let minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}`: `${currentDate.getMinutes()}`
        return `${hours}:${minutes}`
    };
    start() {
        let checkClock = function(obj) {
            if(this.getCurrentFormattedTime() === this.time) {
                this.action();
            };
        };
        if(this.timerId === null) {
        this.timerId = setInterval(() => this.alarmCollection.forEach(el => checkClock(el)), 60000);
        };
       
    };
    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        };
    };
    printAlarms() {
        this.alarmCollection.forEach(el => console.log (el.callId + " " + el.time));
    };
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };

};



