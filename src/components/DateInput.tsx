import React from 'react';

const DateInput = React.forwardRef<HTMLInputElement>((props, ref) => (
  <label>
    Date of Birth:&nbsp;
    <input type="date" ref={ref} {...props} />
  </label>
));

export default DateInput;
