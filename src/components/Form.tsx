import React from 'react';
import Input from './Input';
import DateInput from './DateInput';
import Select from './Select';
import RadioInput from './RadioInput';
import CheckboxInput from './CheckboxInput';
import FileInput from './FileInput';

export default class Form extends React.Component {
  inputRef: React.RefObject<HTMLInputElement>;
  dateInputRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  radioInputRef: React.RefObject<HTMLDivElement>;
  checkboxInputRef: React.RefObject<HTMLDivElement>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: Record<string, unknown>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = React.createRef();
    this.dateInputRef = React.createRef();
    this.selectRef = React.createRef();
    this.radioInputRef = React.createRef();
    this.checkboxInputRef = React.createRef();
    this.fileInputRef = React.createRef();
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      this.inputRef.current?.value,
      this.dateInputRef.current?.value,
      this.selectRef.current?.value
    );
    for (let i = 0; i < this.radioInputRef.current!.children.length; i++) {
      const input = this.radioInputRef.current?.children[i].children[0] as HTMLInputElement;
      if (input.checked) {
        console.log(input.value);
      }
    }
    for (let i = 0; i < this.checkboxInputRef.current!.children.length; i++) {
      const input = this.checkboxInputRef.current?.children[i].children[0] as HTMLInputElement;
      if (input.checked) {
        console.log(input.value);
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input ref={this.inputRef} />
        <br />
        <RadioInput ref={this.radioInputRef} />
        <br />
        <DateInput ref={this.dateInputRef} />
        <br />
        <Select ref={this.selectRef} />
        <br />
        <CheckboxInput ref={this.checkboxInputRef} />
        <br />
        <FileInput ref={this.fileInputRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
