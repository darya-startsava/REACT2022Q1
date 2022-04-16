import React from 'react';

const RadioInput = React.forwardRef<HTMLDivElement, Record<string, unknown>>((props, ref) => (
  <div ref={ref} {...props}>
    Gender:&nbsp;
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

export default RadioInput;
