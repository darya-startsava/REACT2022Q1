import React from 'react';

const Input = React.forwardRef<HTMLInputElement, Record<string, unknown>>((props, ref) => (
  <label className="form-label">
    Name:&nbsp;
    <input className="form-control" type="text" ref={ref} {...props} />
  </label>
));

export default Input;
