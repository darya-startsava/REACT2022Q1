import React from 'react';

const CheckboxInput = React.forwardRef<HTMLDivElement, Record<string, unknown>>((props, ref) => (
  <div className="mt-2" ref={ref} {...props}>
    Movie genres:&nbsp;
    <label className="mx-1">
      Science fiction
      <input className="mx-1" type="checkbox" value="science fiction" />
    </label>
    <label className="mx-1">
      Biopic
      <input className="mx-1" type="checkbox" value="biopic" />
    </label>
    <label className="mx-1">
      Disaster movie
      <input className="mx-1" type="checkbox" value="disaster movie" />
    </label>
    <label className="mx-1">
      Fantasy
      <input className="mx-1" type="checkbox" value="fantasy" />
    </label>
    <label className="mx-1">
      Period drama
      <input className="mx-1" type="checkbox" value="period drama" />
    </label>
  </div>
));

export default CheckboxInput;
