import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
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

  describe('with an empty (or missing) listNotifications', () => {
    it('renders correctly with no listNotifications property', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find(NotificationItem).length).toBe(0);
    });

    it('renders correctly when passed an empty array', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={[]} />
      );
      expect(wrapper.find(NotificationItem).length).toBe(0);
    });

    it('does not display "Here is the list of notifications" but displays "No new notification for now"', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={[]} />
      );
      expect(wrapper.find('.Notifications').text()).not.toContain(
        'Here is the list of notifications'
      );
      expect(wrapper.find('.Notifications').text()).toContain(
        'No new notification for now'
      );
    });
  });

  describe('with a list of notifications', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
    });

    it('renders the correct number of NotificationItem', () => {
      expect(wrapper.find(NotificationItem).length).toBe(
        listNotifications.length
      );
    });

    it('renders "Here is the list of notifications"', () => {
      expect(wrapper.find('.Notifications').text()).toContain(
        'Here is the list of notifications'
      );
    });
  });

  describe('markAsRead', () => {
    let consoleSpy;

    beforeEach(() => {
      consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
      consoleSpy.mockRestore();
    });

    it('logs the correct message when called', () => {
      const wrapper = shallow(<Notifications />);
      wrapper.instance().markAsRead(1);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Notification 1 has been marked as read'
      );
    });
  });

  describe('shouldComponentUpdate', () => {
    it('does not rerender when updated with the same list', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      const renderSpy = jest.spyOn(
        Notifications.prototype,
        'render'
      );

      wrapper.setProps({ listNotifications });

      expect(renderSpy).not.toHaveBeenCalled();

      renderSpy.mockRestore();
    });

    it('rerenders when updated with a longer list', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      const renderSpy = jest.spyOn(
        Notifications.prototype,
        'render'
      );

      wrapper.setProps({
        listNotifications: [
          ...listNotifications,
          { id: 4, type: 'default', value: 'New notification' },
        ],
      });

      expect(renderSpy).toHaveBeenCalled();

      renderSpy.mockRestore();
    });
  });
});
