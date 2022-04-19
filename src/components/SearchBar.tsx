import React, { ChangeEvent } from 'react';

export default class SearchBar extends React.Component<Record<string, unknown>, { value: string }> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      value: localStorage.getItem('value') || '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem('value', this.state.value);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <label className="my-2">
        <input
          type="text"
          placeholder="Search bar"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}
