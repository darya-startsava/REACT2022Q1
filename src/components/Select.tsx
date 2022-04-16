import React from 'react';

const Select = React.forwardRef<HTMLSelectElement, Record<string, unknown>>((props, ref) => (
  <label>
    Country of Birth:&nbsp;
    <select className="form-select" ref={ref} {...props}>
      <option value="">--choose country--</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
      <option value="Canada">Canada</option>
      <option value="Australia">Australia</option>
      <option value="France ">France </option>
      <option value="Germany">Germany</option>
      <option value="Sweden">Sweden</option>
      <option value="Spain">Spain</option>
      <option value="Denmark">Denmark</option>
    </select>
  </label>
));

export default Select;
