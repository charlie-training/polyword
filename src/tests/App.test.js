import { render, screen } from '@testing-library/react';
import React from "react";
import App from '../App';
import { uniqueLetters } from '../wordgen';

jest.mock('../wordgen.js', () => ({
  uniqueLetters : ['A', 'B', 'C', 'D', 'E', 'F', 'G']
}))

test('renders learn react link', () => {
  render(<App />);
  const scoreBtn = screen.getByText(/SCORE/i);
  const guessBtn = screen.getByText(/GUESS/i);
  const randomiseBtn = screen.getByText(/RANDOMISE/i);
  expect(scoreBtn).toBeVisible();
  expect(guessBtn).toBeVisible();
  expect(randomiseBtn).toBeVisible();
}); 

test('all 7 buttons render', () => {
  render(<App />);
const buttonAmount = document.querySelectorAll("div.buttons button").length
expect(buttonAmount).toBe(7)
})

test('letters display inside buttons', () => {
  render(<App />);
  const buttonObj = document.querySelectorAll("div.buttons button")
  expect(Object.values(buttonObj).map(value => value.innerHTML).sort()).toEqual(uniqueLetters.sort())
})