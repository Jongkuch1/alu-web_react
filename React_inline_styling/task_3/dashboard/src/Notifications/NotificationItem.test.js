import React from 'react';
import { shallow, render } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

StyleSheetTestUtils.suppressStyleInjection();

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

  it('calls markAsRead with the right id when clicked', () => {
    const markAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem
        id={42}
        type="default"
        value="test"
        markAsRead={markAsRead}
      />
    );
    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(42);
  });

  describe('conditional styling', () => {
    it('applies a different class for default and urgent types', () => {
      const defaultWrapper = render(
        <NotificationItem type="default" value="test" />
      );
      const urgentWrapper = render(
        <NotificationItem type="urgent" value="test" />
      );
      expect(defaultWrapper.attr('class')).not.toBe(
        urgentWrapper.attr('class')
      );
    });
  });
});
