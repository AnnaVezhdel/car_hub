import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type CalendarProps = {
  name: string;
};

type DateRange = [Date | null, Date | null];

function Calendar({ name }: CalendarProps) {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field] = useField(name);
  const { value } = field;

  const handleChange = (dates: DateRange) => {
    setFieldValue(name, dates);
    setFieldTouched(name, true);
  };
  return (
    <div className="border border-gray-300 p-2 rounded-md">
      <DatePicker
        className="focus:outline-none min-w-54 "
        selectsRange
        startDate={value?.[0] || null}
        endDate={value?.[1] || null}
        onChange={handleChange}
        isClearable
        placeholderText="Booking date"
      />
    </div>
  );
}

export default Calendar;
