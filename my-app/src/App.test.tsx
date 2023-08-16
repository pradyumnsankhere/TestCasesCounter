import React from "react";
import { screen } from "@testing-library/react";

import { render, fireEvent } from "@testing-library/react";
import Counter from "./component/Counter";

test("renders learn react link", () => {
  render(<Counter />);
  const linkElement = screen.getByTestId("Increment");
  expect(linkElement).toBeInTheDocument();
});

test("Increment the counter value", () => {
  render(<Counter />);

  const incrementButton = screen.getByText("Increment") as HTMLButtonElement;
  const counterValue = screen.getByTestId("counter-value") as HTMLElement;

  expect(counterValue).toHaveTextContent("Count: 0");

  fireEvent.click(incrementButton);

  expect(counterValue).toHaveTextContent("Count: 1");
});

test("Decrement the counter value", () => {
  render(<Counter />);

  const decrementButton = screen.getByText("Decrement") as HTMLButtonElement;
  const counterValue = screen.getByTestId("counter-value") as HTMLElement;

  expect(counterValue).toHaveTextContent("Count: 0");

  fireEvent.click(decrementButton);

  expect(counterValue).toHaveTextContent("Count: -1");
});

test("Reset the counter value", () => {
  render(<Counter />);

  const resetButton = screen.getByTestId("Reset") as HTMLButtonElement;
  const counterValue = screen.getByTestId("counter-value") as HTMLElement;

  expect(counterValue).toHaveTextContent("Count: 0");

  fireEvent.click(resetButton);

  expect(counterValue).toHaveTextContent("Count: 0");
});
