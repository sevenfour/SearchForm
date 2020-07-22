import React from 'react';
import { shallow } from 'enzyme';

import PublicLayout from '..';

describe('<PublicLayout /> component tests', () => {

  const props = {
    route: {
      routes: [
        {
          path: '/',
          exact: true,
          component: () => {}
        }
      ]
    }
  };

  it('renders', () => {
    const publicLayout = shallow(
      <PublicLayout
        {...props}
      />
    );
    expect(publicLayout).toMatchSnapshot();
  });
});
