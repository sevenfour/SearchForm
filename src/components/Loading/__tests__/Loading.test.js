import React from 'react';
import { shallow } from 'enzyme';

import Loading from '..';

describe('<Loading /> component tests', () => {

  it('renders', () => {
    const loader = shallow(
      <Loading />
    );

    expect(loader).toMatchSnapshot();
  });

});
