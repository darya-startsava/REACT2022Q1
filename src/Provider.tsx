import constants from './constants';
import CardType from './types/card';

export default async function getFilmsArray(value: string) {
  const response = await fetch(`${constants.url}/3/search/movie?${constants.key}&query=${value}`);
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
      isFull: false,
    });
  }
  return selectedInformation;
}
