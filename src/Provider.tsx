import constants from './constants';

export default async function getFilmsArray(value: string) {
  const response = await fetch(`${constants.url}/3/search/movie?${constants.key}&query=${value}`);
  const data = await response.json();
  return data;
}
