import React from 'react';

const Input = React.forwardRef<HTMLInputElement>((props, ref) => (
  <label>
    Name:&nbsp;
    <input type="text" ref={ref} {...props} />
  </label>
));

export default Input;
