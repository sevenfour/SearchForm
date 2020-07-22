import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from '..';

describe('<SearchForm /> component tests', () => {

  it('renders', () => {
    const form = shallow(
      <SearchForm />
    );

    expect(form).toMatchSnapshot();
  });

});
