enum LabelTime {
    Daily = "day",
    Weekly = "week",
    Monthly = "month"
}


enum LabelTimeLy {
    Daily = "Daily",
    Weekly = "Weekkly",
    Monthly = "Monthly"
}

enum TitleValues {
    Work = "Work",
    Play = "Play",
    Study = "Study",
    Exercise = "Exercise",
    Social = "Social",
    SelfCare = "Self Care"
}

interface SheetData {
    title?: TitleValues
    current: Number;
    previous: Number;
}

interface TimeLineProps {
    label: LabelTime;
    data: SheetData[] | any;
}

interface TimeFrame  {
    [key: string] : SheetData;
};

interface ObjeEntry {
  title: TitleValues,
  timeframes: Partial<TimeFrame> 
}

class TimeLine {
    private daily: HTMLElement | null;
    private weekly: HTMLElement | null;
    private monthly: HTMLElement | null;
    private static userData: TimeLineProps;
    private static schedule: NodeListOf<Element>;

    static url: string;
    public constructor(url: string){
        this.daily = document.querySelector(".dailyBtn"),
        this.weekly = document.querySelector(".weeklyBtn");
        this.monthly = document.querySelector(".monthlyBtn");
        TimeLine.schedule = document.querySelectorAll(".space1");
        TimeLine.url = url;
        this.init();
    }
    private async init() {
        TimeLine.userData = await TimeLine.getAndParseDataById("Monthly" as LabelTime);
        TimeLine.updateScheduleFromData();
        

        this.daily.addEventListener('click', async function () {
            TimeLine.userData = await TimeLine.getAndParseDataById(this.id as LabelTime);
            TimeLine.updateScheduleFromData();
        })

        this.weekly.addEventListener('click', async function () {
            TimeLine.userData = await TimeLine.getAndParseDataById(this.id as LabelTime);
            TimeLine.updateScheduleFromData();
        })
        this.monthly.addEventListener('click', async function () {
            TimeLine.userData = await TimeLine.getAndParseDataById(this.id as LabelTime);
            TimeLine.updateScheduleFromData();
        })
    }

    private static getDataFromURL (url: string): Promise<Object[]> {
        return new Promise( (resolve, reject) => {
            fetch(url).then(res => res.json()).then((res) => resolve(res)).catch((err) => reject(err.message));
        });
    }
    private static getLabel(label: string): LabelTime {
        if (label === LabelTimeLy.Daily) return LabelTime.Daily;
        if (label === LabelTimeLy.Monthly) return LabelTime.Monthly;
        return LabelTime.Weekly;
    }
    public static async getAndParseDataById (label: LabelTime): Promise<TimeLineProps>{
        const res: Object[] = await TimeLine.getDataFromURL(TimeLine.url);
        const weeklyData: TimeLineProps = {
            label: TimeLine.getLabel(label),
            data: res.reduce((value: SheetData[], obj: ObjeEntry) => {
                const timeframes: TimeFrame = obj.timeframes;      
                const timeFrameLabel: SheetData = timeframes[label.toLocaleLowerCase()]     
                const data: SheetData = {
                    title: obj.title,
                    current: timeFrameLabel.current,
                    previous: timeFrameLabel.previous
                }
                return [...value, data];
            }, [])
        }
        return weeklyData;
    }

    private static updateScheduleFromData() {
        for(let i = 0; i < TimeLine.schedule.length; i++) {
            const elementHTML = TimeLine.schedule[i]

            const titleHTML = elementHTML.getElementsByClassName("title")[0];
            titleHTML.textContent = TimeLine.userData.data[i].title;
            const currentHTML = elementHTML.getElementsByClassName("currentTime")[0];
            currentHTML.textContent = `${TimeLine.userData.data[i].current} Hrs`;
            const labeHTML = elementHTML.getElementsByClassName("previous")[0];
            labeHTML.textContent =  `Last ${TimeLine.userData.label} - ${TimeLine.userData.data[i].previous} Hrs`;
        }
    }
}
(async function main () {
    const url: string = "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json";
    const timeLine: TimeLine = new TimeLine(url);
})();