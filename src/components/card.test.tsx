import { render } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  test('information about director', () => {
    const { container } = render(
      <Card
        id={3}
        image="inception.jpg"
        name="Inception"
        year={2010}
        director="Christopher Nolan"
        actors={[
          'Leonardo DiCaprio',
          'Ken Watanabe',
          'Joseph Gordon-Levitt',
          'Marion Cotillard',
          'Elliot Page',
          'Tom Hardy',
          'Cillian Murphy',
          'Tom Berenger',
          'Michael Caine',
        ]}
        imdb={8.8}
        oscars={4}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
