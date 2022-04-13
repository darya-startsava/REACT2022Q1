import React from 'react';

const CheckboxInput = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} {...props}>
    Movie genres:&nbsp;
    <label>
      Science fiction
      <input type="checkbox" value="science fiction" />
    </label>
    <label>
      Biopic
      <input type="checkbox" value="biopic" />
    </label>
    <label>
      Disaster movie
      <input type="checkbox" value="disaster movie" />
    </label>
    <label>
      Fantasy
      <input type="checkbox" value="fantasy" />
    </label>
    <label>
      Period drama
      <input type="checkbox" value="period drama" />
    </label>
  </div>
));

export default CheckboxInput;
