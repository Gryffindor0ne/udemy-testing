import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import ScoopOption from "../ScoopOption";

test("잘못된 스쿱수 입력시 빨간색 상자 표시 테스트", async () => {
  const user = userEvent.setup();
  render(<ScoopOption />);

  // react-bootstrap에서 오류시 클래스에 is-valid 생성됨을 이용한 테스트

  // expect input to be invalid with negative number
  const vanillaInput = screen.getByRole("spinbutton");
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "-1");
  expect(vanillaInput).toHaveClass("is-invalid");

  // replace with decimal input
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "2.5");
  expect(vanillaInput).toHaveClass("is-invalid");

  // replace with input that's too high
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "11");
  expect(vanillaInput).toHaveClass("is-invalid");

  // replace with valid input
  // note: here we're testing our validation rules (namely that the input can display as valid)
  // and not react-bootstrap's response
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "3");
  expect(vanillaInput).not.toHaveClass("is-invalid");
});
