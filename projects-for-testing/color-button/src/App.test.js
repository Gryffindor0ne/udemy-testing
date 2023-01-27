import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates when clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
