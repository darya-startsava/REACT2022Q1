import React from 'react';

interface DivProps extends React.HTMLProps<HTMLDivElement> {}

const CheckboxGroup = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div className="mt-2" ref={ref} {...props}>
    Movie genres:
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

export default CheckboxGroup;
