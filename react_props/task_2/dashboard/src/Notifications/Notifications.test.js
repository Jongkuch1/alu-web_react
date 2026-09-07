import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  it('renders the first NotificationItem with the right html', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop('type')).toBe('default');
    expect(firstItem.prop('value')).toBe('New course available');
  });
});
