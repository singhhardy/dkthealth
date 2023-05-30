import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the styles
import 'react-date-range/dist/theme/default.css'; // Import the theme styles


function DateRange() {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      });
    
      const handleSelect = (ranges) => {
        setDateRange(ranges.selection);
      };

  return (
    <div>
        <DateRangePicker ranges={[dateRange]} onChange={handleSelect} />
    </div>
  )
}

export default DateRange