const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth();
const CURRENT_DAY = new Date().getDate();

const WEEKDAY_SHORT_NAMES = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const WEEKDAY_FULL_NAMES = {
    sun: "Sunday",
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
};

const MONTH_SHORT_NAMES = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
];
const MONTH_FULL_NAMES = {
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    sep: "September",
    oct: "October",
    nov: "November",
    dec: "December",
};

function padZero(num: number) {
    return num.toString().padStart(2, "0");
}

function fetchMonthLength(year: number, month: number) {
    // Get the day before the first day of the next month, aka the last day of the current month.
    return new Date(year, month + 1, 0).getDate();
}

function fetchMonthStart(year: number, month: number) {
    const day = new Date(year, month, 1).getDay();
    return day;
}

function fetchMonthShortName(month: number) {
    return MONTH_SHORT_NAMES[month] as keyof typeof MONTH_FULL_NAMES;
}

function fetchFullMonth(month: number) {
    const monthShort = fetchMonthShortName(month);
    return MONTH_FULL_NAMES[monthShort];
}

export {
    CURRENT_YEAR,
    CURRENT_MONTH,
    CURRENT_DAY,
    WEEKDAY_SHORT_NAMES,
    WEEKDAY_FULL_NAMES,
    MONTH_SHORT_NAMES,
    MONTH_FULL_NAMES,
    padZero,
    fetchMonthLength,
    fetchMonthStart,
    fetchMonthShortName,
    fetchFullMonth,
};
