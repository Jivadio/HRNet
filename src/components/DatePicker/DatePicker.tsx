import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/solid";
import {
    WEEKDAY_SHORT_NAMES as WEEK_DAYS,
    CURRENT_MONTH,
    CURRENT_YEAR,
    fetchFullMonth,
    fetchMonthLength,
    fetchMonthStart,
    padZero,
} from "../../utils/datepicker";

import { FieldErrors, UseFormSetValue } from "react-hook-form";

interface DatePickerProps {
    label: string;
    name: string;
    value: Date;
    setValue: UseFormSetValue<any>
    errors: FieldErrors<any>;
}
export default function DatePicker({
                                       label,
                                       name,
                                       value,
                                       setValue,
                                       errors,
                                   }: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [year, setYear] = useState(CURRENT_YEAR);
    const [month, setMonth] = useState(CURRENT_MONTH);

    const firstDayOfMonth = fetchMonthStart(year, month);
    const daysInMonth = fetchMonthLength(year, month);

    const today = new Date();
    const calendarDays = [];

    const calendarContainerRef = useRef<HTMLDivElement>(null);
    document.addEventListener("click", e => {
        if (!calendarContainerRef.current?.contains(e.target as HTMLElement))
            setIsOpen(false);
    });

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="bg-gray-300"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateValue = new Date(
            `${year}-${padZero(month + 1)}-${padZero(day)}`
        );

        calendarDays.push(
            <button
                type="button"
                key={day}
                onClick={() => {
                    setValue(name, dateValue);
                    setIsOpen(false);
                }}
                className={`cursor-pointer ${today.toDateString() === dateValue.toDateString() ? "bg-orange-200" : "bg-gray-100"} transition-all hover:bg-orange-300 focus:z-10 focus:bg-orange-300`}
            >
                {padZero(day)}
            </button>
        );
    }

    return (
        <div
            className="flex flex-col gap-1"
            aria-label="date picker"
            ref={calendarContainerRef}
        >
            <p className="text-sm font-medium">{label}</p>
            <div className="relative rounded-md border-[1px] border-gray-300 p-2 transition-all">
                <span>{value.toDateString()}</span>
                <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 transition-all hover:scale-110 focus:scale-110"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="open date picker"
                >
                    <CalendarIcon className="w-4 h-4" />
                </button>
                {isOpen && (
                    <div className="datePicker absolute left-0 top-[calc(100%_+_0.5rem)] z-10 grid w-full cursor-auto grid-cols-1 gap-2 rounded-md border-[1px] border-gray-400 bg-white p-2 text-center shadow-md">
                        <div className="grid grid-cols-2 gap-1">
                            <p className="relative rounded-sm border-[1px] border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (month === 0) {
                                            setYear(year - 1);
                                            setMonth(11);
                                        } else setMonth(month - 1);
                                    }}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-sm transition-all hover:bg-gray-200 hover:ring-1 hover:ring-gray-500 focus:bg-gray-200 focus:ring-1 focus:ring-gray-500"
                                >
                                    <ArrowLeftIcon className="w-4 h-4" />
                                </button>
                                {fetchFullMonth(month)}
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (month === 11) {
                                            setYear(year + 1);
                                            setMonth(0);
                                        } else setMonth(month + 1);
                                    }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-sm transition-all hover:bg-gray-200 hover:ring-1 hover:ring-gray-500 focus:bg-gray-200 focus:ring-1 focus:ring-gray-500"
                                >
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                            </p>

                            <p className="relative select-none rounded-sm border-[1px] border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => setYear(year - 1)}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-sm transition-all hover:bg-gray-200 hover:ring-1 hover:ring-gray-500 focus:bg-gray-200 focus:ring-1 focus:ring-gray-500"
                                >
                                    <ArrowLeftIcon className="w-4 h-4" />
                                </button>
                                {year}
                                <button
                                    type="button"
                                    onClick={() => setYear(year + 1)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-sm transition-all hover:bg-gray-200 hover:ring-1 hover:ring-gray-500 focus:bg-gray-200 focus:ring-1 focus:ring-gray-500"
                                >
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                            </p>
                        </div>

                        <div className="grid grid-cols-7 gap-[1px] border-[1px] border-gray-300 bg-gray-300">
                            {WEEK_DAYS.map(day => (
                                <div key={day} className="bg-white">
                                    {day}
                                </div>
                            ))}
                            {calendarDays}
                        </div>
                    </div>
                )}
            </div>
            {errors[name] && (
                <span className="text-red-400">{errors[name]?.message}</span>
            )}
        </div>
    );
}
