import React from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import constants from '../constants';
import CardType from '../types/card';

interface DivProps extends React.HTMLProps<HTMLDivElement> {}

type State = {
  data: CardType[];
  isLoaded: boolean;
};

export default class Home extends React.Component<DivProps, State> {
  constructor(props: DivProps) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
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
    return (
      <div data-testid="home-page">
        <h1>Home</h1>
        <SearchBar />
        <div>
          {!this.state.isLoaded ? <div> Loading...</div> : <CardList data={this.state.data} />}
        </div>
      </div>
    );
  }
}
