import React from 'react';
import { shallow } from 'enzyme';

import InViewWrapper from '..';

describe('<InViewWrapper /> component tests', () => {

  const content = (
    <div>
      content
    </div>
  );
  const placeHolder = (
    <div>
      placeHolder
    </div>
  );

  it('renders InViewWrapper', () => {
    const inView = shallow(
      <InViewWrapper
        content={content}
        placeHolder={placeHolder}
      />
    );

    expect(inView).toMatchSnapshot();
  });

});
