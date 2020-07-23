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

  it('should call onSubmit', () => {

    const onSubmitSpy = jest.fn();

    const wrapper = shallow(
      <SearchForm onSubmit={onSubmitSpy} />
    );

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(onSubmitSpy).toHaveBeenCalled();
  });

  it('should call onSubmit with query', () => {

    const query = 'super-duper bike';
    const onSubmitSpy = jest.fn();

    const wrapper = shallow(
      <SearchForm onSubmit={onSubmitSpy} />
    );

    const input = wrapper.find('input');

    input.simulate('change', { target: { value: query } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(onSubmitSpy).toHaveBeenCalledWith(query);
  });

});
