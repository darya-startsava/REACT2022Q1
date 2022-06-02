import React from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const DateInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <label className="form-label">
    Date of Birth:
    <input className="form-control" type="date" ref={ref} {...props} />
  </label>
));

export default DateInput;
