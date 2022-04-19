import React from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const FileInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <label className="mb-2">
    Upload file:
    <input type="File" className="mx-1" ref={ref} {...props} />
  </label>
));

export default FileInput;
