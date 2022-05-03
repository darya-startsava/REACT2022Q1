import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onEnter?: Function;
}

export default function SearchBar(props: InputProps) {
  const [value, setValue] = useState(localStorage.getItem('value') || '');

  useEffect(() => {
    return localStorage.setItem('value', value);
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && props.onEnter) {
      localStorage.setItem('value', value);
      props.onEnter();
    }
  }

  return (
    <label className="my-2">
      <input
        type="text"
        placeholder="Search movie by title"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </label>
  );
}
