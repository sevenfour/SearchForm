import React from 'react';
import { shallow } from 'enzyme';

import LazyImage from '..';

describe('<LazyImage /> component tests', () => {

  it('renders with a placeholder', () => {
    const lazyImage = shallow(
      <LazyImage />
    );

    expect(lazyImage).toMatchSnapshot();
  });

  it('renders with an image', () => {
    const lazyImage = shallow(
      <LazyImage mainUrl="/qwerty" />
    );

    expect(lazyImage).toMatchSnapshot();
  });

});
