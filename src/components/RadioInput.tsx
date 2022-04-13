import React from 'react';

const RadioInput = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} {...props}>
    Gender:&nbsp;
    <label>
      Male
      <input type="radio" name="gender" value="male" />
    </label>
    <label>
      Female
      <input type="radio" name="gender" value="female" />
    </label>
  </div>
));

export default RadioInput;
