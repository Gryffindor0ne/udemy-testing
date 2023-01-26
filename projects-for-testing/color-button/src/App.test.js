import { render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import App from "./App";

test("button has correct initial color", () => {
  const { container } = render(<App />);
  logRoles(container);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {});
