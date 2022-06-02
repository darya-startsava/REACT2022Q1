import React from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <label className="form-label">
    Name:
    <input className="form-control" type="text" ref={ref} {...props} />
  </label>
));

export default Input;
