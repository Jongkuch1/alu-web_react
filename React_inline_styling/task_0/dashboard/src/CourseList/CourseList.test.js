import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  describe('With CourseList empty', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList />);
    });

    it('renders correctly with no listCourses property', () => {
      expect(wrapper.find(CourseListRow).length).toBe(3);
      expect(wrapper.find(CourseListRow).last().prop('textFirstCell')).toBe(
        'No course available yet'
      );
    });

    it('renders correctly when passed an empty array', () => {
      wrapper = shallow(<CourseList listCourses={[]} />);
      expect(wrapper.find(CourseListRow).length).toBe(3);
    });
  });

  describe('With CourseList containing elements', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders the correct number of rows', () => {
      expect(wrapper.find(CourseListRow).length).toBe(2 + listCourses.length);
    });
  });
});
