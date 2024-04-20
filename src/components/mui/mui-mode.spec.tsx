import { render, screen } from "../../test-utils";
import MuiMode from "./mui-mode";

describe("mui-mode", () => {
  test("renders correctly", () => {
    render(<MuiMode />);
    const modeElement = screen.getByRole("heading");
    expect(modeElement).toHaveTextContent("light");
  })
})