
export default class Cronos {
  day: number;
  month: number;
  year: number;
  seconds: number;
  minutes: number;
  hour: number;
  ampm: string;
  date: string;
  time: string;

  constructor() {
    this.now();
  }

  format(date: string) {
    const dateArry = date.split("/");
    return `${dateArry[2]}/${dateArry[1]}/${dateArry[0]}`
  }

  isEqualDates(date: string) {
    return this.date === date;
  }

  isEqualHours(hours: string) {
    return this.time === hours;
  }

  static parseDate(dateString: string): { day: number, month: number, year: number } {
    const dateArr = dateString.split("/");
    return {
      day: parseInt(dateArr[2]),
      month: parseInt(dateArr[1]),
      year: parseInt(dateArr[0])
    };
  }

  static parseTime(timeString: string): { hour: number, minutes: number, seconds: number, ampm: string } {
    const timeArr = timeString.split("-");
    const hour = parseInt(timeArr[0]);
    return {
      hour,
      minutes: parseInt(timeArr[1]),
      seconds: parseInt(timeArr[2]),
      ampm: hour >= 12 ? 'PM' : 'AM'
    };
  }

  static parseDateTime(dateTimeString: string): Cronos {
    const [dateString, timeString] = dateTimeString.split(" ");
    const { day, month, year } = Cronos.parseDate(dateString);
    const { hour, minutes, seconds, ampm } = Cronos.parseTime(timeString);

    const newCronos = new Cronos();
    newCronos.day = day;
    newCronos.month = month;
    newCronos.year = year;
    newCronos.hour = hour;
    newCronos.minutes = minutes;
    newCronos.seconds = seconds;
    newCronos.ampm = ampm;

    return newCronos;
  }

  now() {
    const dateTime = new Date();
    this.day = dateTime.getDate();
    this.month = dateTime.getMonth() + 1;
    this.year = dateTime.getFullYear();
    this.seconds = dateTime.getSeconds();
    this.minutes = dateTime.getMinutes();
    this.hour = dateTime.getHours();
    this.ampm = this.hour >= 12 ? 'PM' : 'AM';
    this.date = `${this.year}/${this.month}/${this.day}`;
    this.time = `${this.hour}:${this.minutes}:${this.seconds} ${this.ampm}`;
  }
}