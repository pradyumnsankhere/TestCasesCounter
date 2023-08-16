import { defineFeature, loadFeature } from "jest-cucumber";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import React from "react";
import Counter from "../../component/Counter";
const feature = loadFeature("./counter.feature");

defineFeature(feature, (test) => {
  let component: RenderResult;
  //Increament
  test("Given a Counter component", ({ given }) => {
    component = render(<Counter />);
  });

  test("When I click the increment button", ({ when }) => {
    const incrementButton = component.getByTestId("Increment");
    fireEvent.click(incrementButton);
  });

  test("Then the count should increase by 1", ({ then }) => {
    const countElement = component.getByTestId("counter-value");
    const currentCount = parseInt(
      countElement.textContent!.replace("Count:", "").trim(),
      10
    );
    expect(currentCount).toBe(1);
  });
  //Deceremnt
  test("When I click the Decrement button", ({ when }) => {
    const decrementButton = component.getByTestId("Decrement");
    fireEvent.click(decrementButton);
  });

  test("Then the count should Decrement by 1", ({ then }) => {
    const countElement = component.getByTestId("counter-value");
    const currentCount = parseInt(
      countElement.textContent!.replace("Count:", "").trim(),
      10
    );
    expect(currentCount).toBe(0);
  });
  //Reset
  test("When I click the Reset button", ({ when }) => {
    const resetButton = component.getByTestId("Reset");
    fireEvent.click(resetButton);
  });

  test("Then the count should be 0", ({ then }) => {
    const countElement = component.getByTestId("counter-value");
    const currentCount = parseInt(
      countElement.textContent!.replace("Count:", "").trim(),
      10
    );
    expect(currentCount).toBe(0);
  });
});
