import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.Notifications p').text()).toBe(
      'Here is the list of notifications'
    );
  });

  it('renders the first NotificationItem with the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.prop('type')).toBe('default');
    expect(firstItem.prop('value')).toBe('New course available');
  });

  describe('when displayDrawer is false', () => {
    it('displays the menu item', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('does not display div.Notifications', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('.Notifications').length).toBe(0);
    });
  });

  describe('when displayDrawer is true', () => {
    it('displays the menu item', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('displays div.Notifications', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find('.Notifications').length).toBe(1);
    });
  });
});
