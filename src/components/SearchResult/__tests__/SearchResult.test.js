import React from 'react';
import { shallow } from 'enzyme';

import SearchResult from '..';

describe('<SearchResult /> component tests', () => {

  it('renders', () => {
    const result = shallow(
      <SearchResult />
    );

    expect(result).toMatchSnapshot();
  });

});
