import React from 'react';
import './Form.css';
import Input from '../Input';
import DateInput from '../DateInput';
import Select from '../Select';
import RadioGroup from '../RadioGroup';
import CheckboxGroup from '../CheckboxGroup';
import FileInput from '../FileInput';
import CardList from '../CardList';
import Card from '../../types/card';

type State = {
  data: Card[];
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

interface FormProps extends React.HTMLProps<HTMLFormElement> {}

export default class Form extends React.Component<FormProps, State> {
  formRef: React.RefObject<HTMLFormElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  dateInputRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  radioGroupRef: React.RefObject<HTMLDivElement>;
  checkboxGroupRef: React.RefObject<HTMLDivElement>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
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
    this.radioGroupRef = React.createRef();
    this.checkboxGroupRef = React.createRef();
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

    for (let i = 0; i < this.radioGroupRef.current!.children.length; i++) {
      const input = this.radioGroupRef.current?.children[i].children[0] as HTMLInputElement;
      if (input.checked) {
        gender = input.value;
      }
    }
    if (!gender) {
      genderError = 'Choose gender';
    }
    for (let i = 0; i < this.checkboxGroupRef.current!.children.length; i++) {
      const input = this.checkboxGroupRef.current?.children[i].children[0] as HTMLInputElement;
      if (input.checked) {
        genres.push(input.value);
        break;
      }
    }
    if (this.selectRef.current?.value === 'DEFAULT') {
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
      fileToCreateUrl = this.fileInputRef.current!.files![0];
      this.setState(
        (state) => {
          return {
            data: state.data.concat({
              id: state.data.length,
              uploadedImage: URL.createObjectURL(fileToCreateUrl),
              name: this.inputRef.current?.value,
              gender: gender,
              dateOfBirth: this.dateInputRef.current?.value,
              countryOfBirth: this.selectRef.current?.value,
              movieGenres: genres,
              isFull: false,
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
          <div className="error-message mb-3">{this.state.nameError}</div>
          <RadioGroup
            ref={this.radioGroupRef}
            onChange={() => this.setState({ genderError: '' }, this.handleChange)}
          />
          <div className="error-message mb-3">{this.state.genderError}</div>
          <DateInput
            ref={this.dateInputRef}
            onChange={() => this.setState({ dateError: '' }, this.handleChange)}
          />
          <div className="error-message mb-3">{this.state.dateError}</div>
          <Select
            ref={this.selectRef}
            onChange={() => this.setState({ countryError: '' }, this.handleChange)}
          />
          <div className="error-message mb-3">{this.state.countryError}</div>
          <CheckboxGroup
            ref={this.checkboxGroupRef}
            onChange={() => this.setState({ genresError: '' }, this.handleChange)}
          />
          <div className="error-message mb-3">{this.state.genresError}</div>
          <FileInput
            ref={this.fileInputRef}
            onChange={() => this.setState({ imageError: '' }, this.handleChange)}
          />
          <div className="error-message mb-3">{this.state.imageError}</div>
          <button
            disabled={!this.state.isSubmitButtonEnabled}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
          <div className="success-message">{this.state.successMessage}</div>
        </form>
        <CardList data={this.state.data} />
      </>
    );
  }
}
