import React from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const RadioGroup = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => (
  <div ref={ref} {...props}>
    Gender:
    <label className="mx-1">
      Male
      <input className="mx-1" type="radio" name="gender" value="male" />
    </label>
    <label className="mx-1">
      Female
      <input className="mx-1" type="radio" name="gender" value="female" />
    </label>
  </div>
));

export default RadioGroup;
