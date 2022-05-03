import React, { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onEnter?: Function;
}

export default class SearchBar extends React.Component<InputProps, { value: string }> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('value') || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem('value', this.state.value);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && this.props.onEnter) {
      localStorage.setItem('value', this.state.value);
      this.props.onEnter();
    }
  }

  render() {
    return (
      <label className="my-2">
        <input
          type="text"
          placeholder="Search movie by title"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </label>
    );
  }
}
