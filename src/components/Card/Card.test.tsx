import { render } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  test('should contain limited information about film if it is not modal', () => {
    const { container } = render(
      <Card
        id={0}
        name="title0"
        image="no-image.jpg"
        overview="overview0"
        releaseDate="release_date0"
        voteAverage="0"
        isFull={false}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('should contain full information about film if it is modal', () => {
    const { container } = render(
      <Card
        id={0}
        name="title0"
        image="no-image.jpg"
        overview="overview0"
        releaseDate="release_date0"
        voteAverage="0"
        isFull={true}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
