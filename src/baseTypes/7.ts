enum WeekDay {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function isWeekend(day: WeekDay): boolean {
    return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

// Приклад використання
console.log(isWeekend(WeekDay.Sunday)); // true
console.log(isWeekend(WeekDay.Monday)); // false
