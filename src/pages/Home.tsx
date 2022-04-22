import React from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import constants from '../constants';
import CardType from '../types/card';
import Modal from '../components/Modal';

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
  }

  handleShow(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLDListElement;
    const data = this.state.data;
    for (let i = 0; i < data.length; i++) {
      if (target.closest('li')?.id === data[i].id.toString()) {
        this.setState({ modalData: data[i] });
        break;
      }
    }
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `${constants.url}/3/search/movie?${constants.key}&query=inception`
      );
      const data = await response.json();
      const selectedInformation: CardType[] = [];
      for (let i = 0; i < data.results.length; i++) {
        const item = data.results[i];
        let imageUrl: string;
        if (!item.poster_path) {
          imageUrl = 'no-image.jpg';
        } else {
          const response = await fetch(constants.posterUrl + item.poster_path);
          const imageBlob = await response.blob();
          imageUrl = URL.createObjectURL(imageBlob);
        }
        selectedInformation.push({
          id: item.id,
          name: item.title,
          image: imageUrl,
          overview: item.overview,
          releaseDate: item.release_date,
          voteAverage: item.vote_average,
        });
      }
      this.setState({ data: selectedInformation, isLoaded: true });
    } catch (error) {
      throw new Error();
    }
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <CardList data={[this.state.modalData!]} />
        <button onClick={this.handleHide}>Hide modal</button>
      </Modal>
    ) : null;
    return (
      <div style={{ overflow: 'hidden' }} data-testid="home-page">
        <h1>Home</h1>
        <SearchBar />
        {modal}
        <div>
          {!this.state.isLoaded ? (
            <div> Loading...</div>
          ) : (
            <div onClick={this.handleShow}>
              <CardList data={this.state.data} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
