import React from 'react';

const FileInput = React.forwardRef<HTMLInputElement, Record<string, unknown>>((props, ref) => (
  <label className="mb-2">
    Upload file:
    <input type="File" ref={ref} {...props} />
  </label>
));

export default FileInput;
