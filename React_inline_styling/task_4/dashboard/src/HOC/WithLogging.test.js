import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

StyleSheetTestUtils.suppressStyleInjection();

describe('WithLogging', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('when wrapping pure HTML', () => {
    it('logs Component Component on mount and unmount', () => {
      const WrappedHTML = WithLogging(() => <p>test</p>);
      const wrapper = mount(<WrappedHTML />);

      expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

      wrapper.unmount();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Component Component is going to unmount'
      );
    });
  });

  describe('when wrapping the Login component', () => {
    it('logs Component Login on mount and unmount', () => {
      const WrappedLogin = WithLogging(Login);
      const wrapper = mount(<WrappedLogin />);

      expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

      wrapper.unmount();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Component Login is going to unmount'
      );
    });
  });
});
