import React from 'react';

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <label>
    Country of Birth:
    <select defaultValue={''} className="form-select" ref={ref} {...props}>
      <option value="" disabled>
        --choose country--
      </option>
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
