import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initial conditions", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  expect(confirmOrderButton).toBeDisabled();
});

test("Checkbox disables button on first click and enable on second click", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  fireEvent.click(checkbox);
  expect(confirmOrderButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmOrderButton).toBeDisabled();
});
