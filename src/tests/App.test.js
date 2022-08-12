import {render, screen} from "@testing-library/react";
import App from "../App";

it('should show Login by default', function () {
  const state = {
    userReducer: {
      loggedInUser: null,
      isRegister: false
    }}
  const expectedText = 'expected'
  const mock = () => <>{expectedText}</>
  render(<App _useSelector={fn => fn(state)} LoginX={mock}/>)
  expect(screen.getByText('expected')).toBeInTheDocument()
});

it('should show Register when isRegister true', function () {
  const state = {
    userReducer: {
      loggedInUser: null,
      isRegister: true
    }}
  const expectedText = 'expected'
  const mock = () => <>{expectedText}</>
  render(<App _useSelector={fn => fn(state)} RegisterX={mock}/>)
  expect(screen.getByText('expected')).toBeInTheDocument()
});

it('should show Editor when loggedInUser role is Editor', function () {
  const state = {
    userReducer: {
      loggedInUser: {username: 'brady', role: 'Editor'},
      isRegister: false
    }}
  const expectedText = 'expected'
  const mock = () => <>{expectedText}</>
  render(<App _useSelector={fn => fn(state)} EditorX={mock}/>)
  expect(screen.getByText('expected')).toBeInTheDocument()
});

it('should show Follower when loggedInUser role is Follower', function () {
  const state = {
    userReducer: {
      loggedInUser: {username: 'brady', role: 'Follower'},
      isRegister: false
    }}
  const expectedText = 'expected'
  const mock = () => <>{expectedText}</>
  render(<App _useSelector={fn => fn(state)} FollowerX={mock}/>)
  expect(screen.getByText('expected')).toBeInTheDocument()
});
