import React from 'react';
import { shallow } from 'enzyme';

import SearchResultTileSkeleton from '..';

describe('<SearchResultTileSkeleton /> component tests', () => {

  it('renders', () => {
    const skeleton = shallow(
      <SearchResultTileSkeleton />
    );

    expect(skeleton).toMatchSnapshot();
  });

});
