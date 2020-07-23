import React from 'react';
import { shallow } from 'enzyme';

import Tile from '..';

describe('<Tile /> component tests', () => {

  it('renders', () => {
    const tile = shallow(
      <Tile />
    );

    expect(tile).toMatchSnapshot();
  });

});
