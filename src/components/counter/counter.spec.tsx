import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import Counter from "./counter";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
  })
  test("count is 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  })

  test("renders a count od 1 after clicking the button", async () => {
    user.setup()
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment"
    });
    await user.click(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  })

  test("renders a count of 10 after clicking the set button", () => {
    user.setup()
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: "Set"
    });
    user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");

  })
})