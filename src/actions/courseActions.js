/**
 * Created by rakeshuvsn on 3/8/18.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course}
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course}
}


export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    })
  }
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      console.log(savedCourse);
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  }
}
