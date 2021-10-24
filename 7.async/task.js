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
        let lengthBefore = this.alarmCollection.length
        this.alarmCollection = this.alarmCollection.filter(n => n.callId !== callId);
        let lengthAfter = this.alarmCollection.length
        if(lengthBefore > lengthAfter) {
            return true
        };
        return false
    };
    getCurrentFormattedTime() {
        let currentDate = new Date();
        let hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}`: `${currentDate.getHours()}`
        let minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}`: `${currentDate.getMinutes()}`
        return `${hours}:${minutes}`
    };
    start() {
        let checkClock = (obj) => {
            if(getCurrentFormattedTime() === obj.timeToGetUp) {
                obj.action();
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



