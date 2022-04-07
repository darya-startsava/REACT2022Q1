import CardType from '../types/card';

const filmsInformation: [CardType] = [
  {
    id: 0,
    image: 'dune.jpg',
    name: 'Dune',
    year: 2021,
    director: 'Denis Villeneuve',
    actors: [
      'Timothée Chalamet',
      'Rebecca Ferguson',
      'Oscar Isaac',
      'Josh Brolin',
      'Stellan Skarsgård',
      'Dave Bautista',
      'Stephen McKinley Henderson',
      'Zendaya',
      'Chang Chen',
      'Sharon Duncan-Brewster',
      'Charlotte Rampling',
      'Jason Momoa',
      'Javier Bardem',
    ],
    imdb: 8.1,
    oscars: 6,
  },

  {
    id: 1,
    image: 'arrival.jpg',
    name: 'Arrival',
    year: 2016,
    director: 'Denis Villeneuve',
    actors: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker', 'Michael Stuhlbarg', 'Tzi Ma'],
    imdb: 7.9,
    oscars: 1,
  },

  {
    id: 2,
    image: 'interstellar.jpg',
    name: 'Interstellar',
    year: 2014,
    director: 'Christopher Nolan',
    actors: [
      'Matthew McConaughey',
      'Anne Hathaway',
      'Jessica Chastain',
      'Bill Irwin',
      'Ellen Burstyn',
      'Michael Caine',
    ],
    imdb: 8.7,
    oscars: 1,
  },
  {
    id: 3,
    image: 'inception.jpg',
    name: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    actors: [
      'Leonardo DiCaprio',
      'Ken Watanabe',
      'Joseph Gordon-Levitt',
      'Marion Cotillard',
      'Elliot Page',
      'Tom Hardy',
      'Cillian Murphy',
      'Tom Berenger',
      'Michael Caine',
    ],
    imdb: 8.8,
    oscars: 4,
  },
];

export default filmsInformation;
