import React from 'react';

const DateInput = React.forwardRef<HTMLInputElement, Record<string, unknown>>((props, ref) => (
  <label className="form-label">
    Date of Birth:&nbsp;
    <input className="form-control" type="date" ref={ref} {...props} />
  </label>
));

export default DateInput;
