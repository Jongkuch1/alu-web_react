import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders without crashing', () => {
    shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
  });

  it('renders a BodySection component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).length).toBe(1);
  });

  it('passes the props correctly to the BodySection component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.prop('title')).toBe('test title');
    expect(bodySection.prop('children')).toEqual(<p>test children node</p>);
  });
});
