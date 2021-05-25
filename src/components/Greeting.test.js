import { render, screen } from "@testing-library/react";
import  userEvent  from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("1", () => {
  test("renders Hello section 26 as a text", () => {
    render(<Greeting />);

    const hellosection = screen.getByText("Hello Section 26");
    expect(hellosection).toBeInTheDocument();
  });

  test("good to see you", () => {
    render(<Greeting />);

    const seeyou = screen.getByText("good to see you", { exact: false });
    expect(seeyou).toBeInTheDocument();
  });

  test("button clicked", () => {
    render(<Greeting />);

    const buttonevent = screen.getByRole("button");
    userEvent.click(buttonevent);

    const outputElement = screen.getByText("Changed..",{exact:false});
    expect(outputElement).toBeInTheDocument();
  });
});
