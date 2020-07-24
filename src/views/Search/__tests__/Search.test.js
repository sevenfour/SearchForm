import React from 'react';
import { shallow } from 'enzyme';

import Search from '..';

describe('<Search /> component tests', () => {

  it('renders', () => {
    const search = shallow(
      <Search />
    );

    expect(search).toMatchSnapshot();
  });

});
