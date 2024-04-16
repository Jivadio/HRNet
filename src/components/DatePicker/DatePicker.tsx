import React, { useState, useRef, useEffect } from 'react';

interface DatePickerProps {
    initialDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({ initialDate = new Date() }) => {
    const [currentDate, setCurrentDate] = useState<Date>(initialDate);
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate);
    const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false);
    const datePickerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
                setIsCalendarVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [datePickerRef]);

    const daysInMonth = (year: number, month: number) => {
        return 32 - new Date(year, month, 32).getDate();
    };

    const renderDays = () => {
        const days = [];
        const numberOfDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());

        for (let day = 1; day <= numberOfDays; day++) {
            days.push(
                <button
                    key={day}
                    className="p-2 text-sm font-medium leading-none text-gray-700 bg-white rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    onClick={() => onDaySelect(day)}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    const onDaySelect = (day: number) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(newDate);
        setIsCalendarVisible(false);
    };

    const nextMonth = () => {
        const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        setCurrentDate(nextMonthDate);
    };

    const prevMonth = () => {
        const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        setCurrentDate(prevMonthDate);
    };

    return (
        <div className="relative" ref={datePickerRef}>
            <input
                type="text"
                readOnly
                value={selectedDate.toLocaleDateString()}
                className="p-2 border border-gray-300"
                onFocus={() => setIsCalendarVisible(true)}
            />
            {isCalendarVisible && (
                <div className="absolute top-full mt-1 p-4 border border-gray-300 bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            className="p-1 text-gray-600 hover:bg-gray-200 rounded-full"
                            onClick={prevMonth}
                        >
                            &lt;
                        </button>
                        <span>
              {currentDate.toLocaleString('default', {month: 'long'})} {currentDate.getFullYear()}
            </span>
                        <button
                            className="p-1 text-gray-600 hover:bg-gray-200 rounded-full"
                            onClick={nextMonth}
                        >
                            &gt;
                        </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                        {renderDays()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatePicker;
