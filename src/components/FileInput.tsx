import React from 'react';

const FileInput = React.forwardRef<HTMLInputElement>((props, ref) => (
  <label>
    <input type="File" ref={ref} {...props} />
  </label>
));

export default FileInput;
