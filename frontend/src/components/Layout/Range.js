import {formattedTimeString} from "./DateTimeParser";

export const MAX_DATE = new Date("2018-09-30 19:55:00");
export const MIN_DATE = new Date("2018-09-01 00:00:00");

class DatetimeRange{

    constructor() {
        this.startDate = new Date(MIN_DATE);
        this.endDate = new Date(MAX_DATE);
        this.startTime = formattedTimeString(MIN_DATE);
        this.endTime = formattedTimeString(MAX_DATE);
        this.daysOfWeek = [true, true, true, true, true, true, true];
        this.includeHolidays = false;
    }

    setStartDate(startDate){
        this.startDate = startDate;
    }

    getStartDate(){
        return this.startDate;
    }

    setEndDate(endDate){
        this.endDate = endDate;
    }

    getEndDate(){
        return this.endDate;
    }

    setStartTime(startTime){
        this.startTime = startTime;
    }

    getStartTime(){
        return this.startTime;
    }

    setEndTime(endTime){
        this.endTime = endTime;
    }

    getEndTime(){
        return this.endTime
    }

    setDaysOfWeek(daysOfWeek){
        this.daysOfWeek = daysOfWeek;
    }

    getDaysOfWeek(){
        return this.daysOfWeek;
    }

    setIncludeHolidays(newHolidays){
        this.includeHolidays = newHolidays;
    }

}

export class RangeBuilder{
    constructor() {
        this.range = new DatetimeRange();
    }

    setStartTime(startTime){
        this.range.setStartTime(startTime);
        return this;
    }

    setEndTime(endTime){
        this.range.setEndTime(endTime);
        return this;
    }

    setStartDate(startDate){
        this.range.setStartDate(startDate);
        return this;
    }

    setEndDate(endDate){
        this.range.setEndDate(endDate);
        return this;
    }

    setDaysOfWeek(daysOfWeek){
        this.range.setDaysOfWeek(daysOfWeek);
        return this;
    }

    setIncludeHolidays(includeHolidays){
        this.range.setIncludeHolidays(includeHolidays);
        return this;
    }

    getRange(){
        return this.range;
    }
}

export default RangeBuilder;