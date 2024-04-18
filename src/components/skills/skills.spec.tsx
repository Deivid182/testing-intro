import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  })

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    screen.debug();
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  })

  test("render correctly login button", () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButtonElement).toBeInTheDocument();
  })

  test("Start learning button is not rendered" , () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(loginButtonElement).not.toBeInTheDocument();
  })

  test("Start learning button is rendered eventually", async () => {
    render(<Skills skills={skills} />);
    // returns a promise that resolves when the button is found. It'a useful to use in asynchronous tests
    const startLearningButton = await screen.findByRole("button", {
      name: "Start learning",
    }, { timeout: 2000 });
    expect(startLearningButton).toBeInTheDocument();
  })
})