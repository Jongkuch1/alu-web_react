import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component wrapped with WithLogging', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('WithLogging(Login)').length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  describe('when isLoggedIn is true', () => {
    it('does not include the Login component', () => {
      const wrapper = shallow(<App isLoggedIn />);
      expect(wrapper.find('WithLogging(Login)').length).toBe(0);
    });

    it('includes the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn />);
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });

  describe('keydown handling', () => {
    let alertSpy;

    beforeEach(() => {
      alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
      alertSpy.mockRestore();
    });

    it('calls logOut and displays an alert when ctrl+h is pressed', () => {
      const logOut = jest.fn();
      const wrapper = mount(<App logOut={logOut} />);

      const event = new KeyboardEvent('keydown', {
        key: 'h',
        ctrlKey: true,
      });
      document.dispatchEvent(event);

      expect(alertSpy).toHaveBeenCalledWith('Logging you out');
      expect(logOut).toHaveBeenCalled();

      wrapper.unmount();
    });
  });
});
