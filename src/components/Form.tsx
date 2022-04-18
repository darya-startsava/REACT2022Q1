import React from 'react';
import Input from './Input';
import DateInput from './DateInput';
import Select from './Select';
import RadioInput from './RadioInput';
import CheckboxInput from './CheckboxInput';
import FileInput from './FileInput';
import CardListFromFormPage from './CardListFromFormPage';
import CardFromFormPageType from '../types/card-from-form-page';

type State = {
  data: CardFromFormPageType[];
  successMessage: string;
  nameError: string;
  dateError: string;
  genderError: string;
  countryError: string;
  genresError: string;
  imageError: string;
  isSubmitButtonEnabled: boolean;
};

let gender = '';
let genres: Array<string> = [];
let fileToCreateUrl: File;

export default class Form extends React.Component<{}, State> {
  formRef: React.RefObject<HTMLFormElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  dateInputRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  radioInputRef: React.RefObject<HTMLDivElement>;
  checkboxInputRef: React.RefObject<HTMLDivElement>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      data: [],
      nameError: '',
      dateError: '',
      genderError: '',
      countryError: '',
      genresError: '',
      imageError: '',
      successMessage: '',
      isSubmitButtonEnabled: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.formRef = React.createRef();
    this.inputRef = React.createRef();
    this.dateInputRef = React.createRef();
    this.selectRef = React.createRef();
    this.radioInputRef = React.createRef();
    this.checkboxInputRef = React.createRef();
    this.fileInputRef = React.createRef();
  }

  handleChange() {
    if (this.state.successMessage) {
      this.setState({ successMessage: '' });
    }
    if (
      !this.state.nameError &&
      !this.state.dateError &&
      !this.state.genderError &&
      !this.state.countryError &&
      !this.state.genresError &&
      !this.state.imageError
    ) {
      this.setState({ isSubmitButtonEnabled: true });
    }
  }

  validate() {
    let nameError = '';
    let dateError = '';
    let countryError = '';
    let genderError = '';
    let genresError = '';
    let imageError = '';
    if (
      !this.inputRef.current?.value ||
      (this.inputRef.current?.value && this.inputRef.current?.value.length <= 1)
    ) {
      nameError = 'This field requires more than 1 symbol';
    }
    if (!this.dateInputRef.current?.value) {
      dateError = 'This field must be filled';
    }
    if (
      this.dateInputRef.current?.value &&
      Date.parse(this.dateInputRef.current!.value) >= Date.now()
    ) {
      dateError = 'Date must be earlier than today';
    }

    for (let i = 0; i < this.radioInputRef.current!.children.length; i++) {
      const input = this.radioInputRef.current?.children[i].children[0] as HTMLInputElement;
      if (input.checked) {
        gender = input.value;
      }
    }
    if (!gender) {
      genderError = 'Choose gender';
    }
    for (let i = 0; i < this.checkboxInputRef.current!.children.length; i++) {
      const input = this.checkboxInputRef.current?.children[i].children[0] as HTMLInputElement;
      if (input.checked) {
        genres.push(input.value);
      }
    }
    if (!this.selectRef.current?.value) {
      countryError = 'Choose country of birth';
    }
    if (!genres.length) {
      genresError = 'Choose at least one genre';
    }
    if (!this.fileInputRef.current?.files?.[0]) {
      imageError = 'Add image';
    }
    if (!imageError && !this.fileInputRef.current?.files?.[0].name.match(/.jpg$|.png$/)) {
      imageError = 'Add file with extension .jpg or .png';
    }
    if (nameError) {
      this.setState({ nameError });
    }
    if (dateError) {
      this.setState({ dateError });
    }
    if (genderError) {
      this.setState({ genderError });
    }
    if (countryError) {
      this.setState({ countryError });
    }
    if (genresError) {
      this.setState({ genresError });
    }
    if (imageError) {
      this.setState({ imageError });
    }
    if (nameError || dateError || genderError || countryError || genresError || imageError) {
      this.setState({ isSubmitButtonEnabled: false });
      return false;
    }
    this.setState({ nameError, dateError, genderError, genresError, countryError, imageError });
    this.setState({ isSubmitButtonEnabled: true });
    return true;
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    gender = '';
    genres = [];
    event.preventDefault();
    if (this.state.successMessage) {
      this.setState({ successMessage: '' });
    }
    const isValid = this.validate();
    if (isValid) {
      if (this.fileInputRef.current?.files) {
        fileToCreateUrl = this.fileInputRef.current?.files[0];
      }
      this.setState(
        (state) => {
          return {
            data: state.data.concat({
              id: state.data.length,
              image: URL.createObjectURL(fileToCreateUrl),
              name: this.inputRef.current?.value,
              gender: gender,
              dateOfBirth: this.dateInputRef.current?.value,
              countryOfBirth: this.selectRef.current?.value,
              movieGenres: genres,
            }),
            successMessage: 'Your data has been successfully saved',
          };
        },
        () => {
          this.formRef.current?.reset();
        }
      );
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} ref={this.formRef}>
          <Input
            ref={this.inputRef}
            onChange={() => this.setState({ nameError: '' }, this.handleChange)}
          />
          <br />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.nameError}</div>
          <RadioInput
            ref={this.radioInputRef}
            onChange={() => this.setState({ genderError: '' }, this.handleChange)}
          />
          <br />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.genderError}</div>
          <DateInput
            ref={this.dateInputRef}
            onChange={() => this.setState({ dateError: '' }, this.handleChange)}
          />
          <br />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.dateError}</div>
          <Select
            ref={this.selectRef}
            onChange={() => this.setState({ countryError: '' }, this.handleChange)}
          />
          <br />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.countryError}</div>
          <CheckboxInput
            ref={this.checkboxInputRef}
            onChange={() => this.setState({ genresError: '' }, this.handleChange)}
          />
          <br />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.genresError}</div>
          <FileInput
            ref={this.fileInputRef}
            onChange={() => this.setState({ imageError: '' }, this.handleChange)}
          />
          <br />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.imageError}</div>
          <button
            disabled={!this.state.isSubmitButtonEnabled}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
          <div style={{ fontSize: 20, color: 'green' }}>{this.state.successMessage}</div>
        </form>
        <CardListFromFormPage data={this.state.data} />
      </>
    );
  }
}
