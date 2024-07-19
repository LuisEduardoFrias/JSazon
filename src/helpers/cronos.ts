
export default class Cronos {

  constructor() {
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

format(date: string){
  const dateArry = date.split("/");
  return `${dateArry[2]}/${dateArry[1]}/${dateArry[0]}`
}

  isEqualDates(date: string) {
    return this.date === date;
  }

  isEqualHours(hours: string) {
    return this.time === hours;
  }

  static now() {
  }
}