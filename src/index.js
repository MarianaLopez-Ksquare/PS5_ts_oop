var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var LabelTime;
(function (LabelTime) {
    LabelTime["Daily"] = "day";
    LabelTime["Weekly"] = "week";
    LabelTime["Monthly"] = "month";
})(LabelTime || (LabelTime = {}));
var LabelTimeLy;
(function (LabelTimeLy) {
    LabelTimeLy["Daily"] = "Daily";
    LabelTimeLy["Weekly"] = "Weekkly";
    LabelTimeLy["Monthly"] = "Monthly";
})(LabelTimeLy || (LabelTimeLy = {}));
var TitleValues;
(function (TitleValues) {
    TitleValues["Work"] = "Work";
    TitleValues["Play"] = "Play";
    TitleValues["Study"] = "Study";
    TitleValues["Exercise"] = "Exercise";
    TitleValues["Social"] = "Social";
    TitleValues["SelfCare"] = "Self Care";
})(TitleValues || (TitleValues = {}));
;
class TimeLine {
    constructor(url) {
        this.daily = document.querySelector(".dailyBtn"),
            this.weekly = document.querySelector(".weeklyBtn");
        this.monthly = document.querySelector(".monthlyBtn");
        TimeLine.schedule = document.querySelectorAll(".space1");
        TimeLine.url = url;
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            TimeLine.userData = yield TimeLine.getAndParseDataById("Monthly");
            TimeLine.updateScheduleFromData();
            this.daily.addEventListener('click', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    TimeLine.userData = yield TimeLine.getAndParseDataById(this.id);
                    TimeLine.updateScheduleFromData();
                });
            });
            this.weekly.addEventListener('click', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    TimeLine.userData = yield TimeLine.getAndParseDataById(this.id);
                    TimeLine.updateScheduleFromData();
                });
            });
            this.monthly.addEventListener('click', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    TimeLine.userData = yield TimeLine.getAndParseDataById(this.id);
                    TimeLine.updateScheduleFromData();
                });
            });
        });
    }
    static getDataFromURL(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json()).then((res) => resolve(res)).catch((err) => reject(err.message));
        });
    }
    static getLabel(label) {
        if (label === LabelTimeLy.Daily)
            return LabelTime.Daily;
        if (label === LabelTimeLy.Monthly)
            return LabelTime.Monthly;
        return LabelTime.Weekly;
    }
    static getAndParseDataById(label) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield TimeLine.getDataFromURL(TimeLine.url);
            const weeklyData = {
                label: TimeLine.getLabel(label),
                data: res.reduce((value, obj) => {
                    const timeframes = obj.timeframes;
                    const timeFrameLabel = timeframes[label.toLocaleLowerCase()];
                    const data = {
                        title: obj.title,
                        current: timeFrameLabel.current,
                        previous: timeFrameLabel.previous
                    };
                    return [...value, data];
                }, [])
            };
            return weeklyData;
        });
    }
    static updateScheduleFromData() {
        for (let i = 0; i < TimeLine.schedule.length; i++) {
            const elementHTML = TimeLine.schedule[i];
            const titleHTML = elementHTML.getElementsByClassName("title")[0];
            titleHTML.textContent = TimeLine.userData.data[i].title;
            const currentHTML = elementHTML.getElementsByClassName("currentTime")[0];
            currentHTML.textContent = `${TimeLine.userData.data[i].current} Hrs`;
            const labeHTML = elementHTML.getElementsByClassName("previous")[0];
            labeHTML.textContent = `Last ${TimeLine.userData.label} - ${TimeLine.userData.data[i].previous} Hrs`;
        }
    }
}
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json";
        const timeLine = new TimeLine(url);
    });
})();
