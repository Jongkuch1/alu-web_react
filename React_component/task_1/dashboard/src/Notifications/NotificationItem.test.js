import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct html with type and value props', () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="test" />
    );
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    expect(wrapper.text()).toBe('test');
  });

  it('renders the correct html with the html prop', () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.find('li').html()).toContain('<u>test</u>');
  });
});
