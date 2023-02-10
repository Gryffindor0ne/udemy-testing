import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../options";

test("update scoop subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  // 총합이 $0.00에서 시작하는지 테스트
  const scoopsSubtotal = screen.getByText("Scoop total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  // vanilla scoop 1개 추가하고 테스트
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  //chocolate scoops 2개 추가하고 다시 테스트
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});
