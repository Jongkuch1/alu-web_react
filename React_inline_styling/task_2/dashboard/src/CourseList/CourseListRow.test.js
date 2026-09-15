import React from 'react';
import { shallow, render } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

StyleSheetTestUtils.suppressStyleInjection();

describe('<CourseListRow />', () => {
  describe('when isHeader is true', () => {
    it('renders one cell with colspan=2 when textSecondCell does not exist', () => {
      const wrapper = shallow(
        <CourseListRow isHeader textFirstCell="Available courses" />
      );
      const th = wrapper.find('th');
      expect(th.length).toBe(1);
      expect(th.prop('colSpan')).toBe(2);
      expect(th.text()).toBe('Available courses');
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      );
      expect(wrapper.find('th').length).toBe(2);
    });

    it('applies a header row class different from a default row', () => {
      const headerRow = render(
        <CourseListRow isHeader textFirstCell="Available courses" />
      );
      const defaultRow = render(
        <CourseListRow textFirstCell="ES6" textSecondCell="60" />
      );
      expect(headerRow.attr('class')).not.toBe(defaultRow.attr('class'));
    });
  });

  describe('when isHeader is false', () => {
    it('renders two td elements within a tr element', () => {
      const wrapper = shallow(
        <CourseListRow textFirstCell="ES6" textSecondCell="60" />
      );
      expect(wrapper.find('tr').length).toBe(1);
      expect(wrapper.find('td').length).toBe(2);
    });
  });
});
