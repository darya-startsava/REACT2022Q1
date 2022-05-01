import React from 'react';
import './Home.css';
import CardList from '../../components/CardList';
import SearchBar from '../../components/SearchBar';
import CardType from '../../types/card';
import Modal from '../../components/Modal/Modal';
import getFilmsArray from '../../Provider';
import Card from '../../components/Card/Card';

interface DivProps extends React.HTMLProps<HTMLDivElement> {}

type State = {
  data: CardType[];
  modalData: CardType | null;
  isLoaded: boolean;
  showModal: boolean;
};

export default class Home extends React.Component<DivProps, State> {
  constructor(props: DivProps) {
    super(props);
    this.state = {
      data: [],
      modalData: null,
      isLoaded: false,
      showModal: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.sendFetch = this.sendFetch.bind(this);
  }

  handleShow(id: number) {
    const data = this.state.data;
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        const dataModal = Object.assign({}, data[i], { isFull: true });
        this.setState({ modalData: dataModal });
        break;
      }
    }
    this.setState({ showModal: true });
  }

  handleHide(): void {
    if (this.state.showModal === true) {
      this.setState({ showModal: false });
    }
  }

  async componentDidMount() {
    if (localStorage.getItem('value')) {
      this.sendFetch(localStorage.getItem('value')!);
    }
  }

  async sendFetch(value: string) {
    this.setState({ isLoaded: false });
    try {
      const selectedInformation = await getFilmsArray(value);
      this.setState({ data: selectedInformation, isLoaded: true });
    } catch (error) {
      this.setState({ isLoaded: false });
      throw error;
    }
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal onClose={this.handleHide}>
        <div className="my-1 d-flex flex-column align-self-center modal-wrapper">
          <button
            className="align-self-end close-button"
            id="close-button"
            aria-label="close modal"
          >
            <img src="./svg/close.svg" className="close-img" alt="" />
          </button>
          <Card
            id={this.state.modalData!.id}
            name={this.state.modalData!.name}
            image={this.state.modalData?.image}
            overview={this.state.modalData?.overview}
            releaseDate={this.state.modalData?.releaseDate}
            voteAverage={this.state.modalData?.voteAverage}
            isFull={this.state.modalData!.isFull}
          />
        </div>
      </Modal>
    ) : null;
    return (
      <div data-testid="home-page">
        <h1>Home</h1>
        <SearchBar
          onEnter={() => {
            if (localStorage.getItem('value')) {
              this.sendFetch(localStorage.getItem('value')!);
            }
          }}
        />
        {modal}
        <div>
          {!localStorage.getItem('value') && <div>Search movie by title</div>}
          {localStorage.getItem('value') && !this.state.isLoaded ? (
            <div> Loading...</div>
          ) : (
            <div>
              <CardList data={this.state.data} onCardClick={this.handleShow} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
