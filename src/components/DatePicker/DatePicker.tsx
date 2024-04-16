import { useEffect, useState } from "react";
import { DatePickerProps } from "./DatePicker.types";

export default function Datepicker({
  name,
  refHook,
}: Readonly<DatePickerProps>) {
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [save, setSave] = useState(false);

  const [date, setDate] = useState("");

  useEffect(() => {
    if (save) {
      const formattedDay = day.padStart(2, "0");
      const monthIndex = monthsArray.indexOf(month);
      const formattedMonth = (monthIndex + 1).toString().padStart(2, "0");
      setDate(`${formattedDay}/${formattedMonth}/${year}`);
      setSave(false);
      setOpen(!open);
    }
  }, [save, day, month, year, open]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  const saveDate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSave(true);
  };

  const monthsArray = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from(
    { length: currentYear - 1922 },
    (_, index) => currentYear - index
  );

  return (
    <>
      <input
        id={name}
        type="text"
        onClick={handleClick}
        value={date}
        ref={refHook}
        readOnly
        className="cursor-pointer w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        data-testid="date-input"
      />
      <div
        className={`${open ? "flex" : "hidden"} flex-col bg-white shadow-lg rounded-md mt-1 border border-gray-300`}
        data-testid="dropdown-container"
      >
        <div className="p-4" data-testid="day-dropdown">
          <label
            htmlFor={`${name}-day`}
            className="block text-sm font-medium text-gray-700"
          >
            Jour
          </label>
          <select
            name={`${name}-day`}
            id={`${name}-day`}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            onChange={(e) => setDay(e.target.value)}
            data-testid="day-select"
          >
            <option value="">Sélectionnez un jour</option>
            {[...Array(31).keys()].map((day) => (
              <option key={day} value={day + 1}>
                {day + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="px-4 py-2" data-testid="month-dropdown">
          <label
            htmlFor={`${name}-month`}
            className="block text-sm font-medium text-gray-700"
          >
            Mois
          </label>
          <select
            name={`${name}-month`}
            id={`${name}-month`}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            onChange={(e) => setMonth(e.target.value)}
            data-testid="month-select"
          >
            <option value="">Sélectionnez un mois</option>
            {monthsArray.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="px-4 pb-4" data-testid="year-dropdown">
          <label
            htmlFor={`${name}-year`}
            className="block text-sm font-medium text-gray-700"
          >
            Année
          </label>
          <select
            name={`${name}-year`}
            id={`${name}-year`}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            onChange={(e) => setYear(e.target.value)}
            data-testid="year-select"
          >
            <option value="">Sélectionnez une année</option>
            {yearsArray.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <button
          className="mx-4 mb-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={saveDate}
          data-testid="save-button"
        >
          Sauvegarder
        </button>
      </div>
    </>
  );
}
