import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("Async", () => {
  test("request is successfull", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "1",
          title: "first",
        },
      ],
    });
    render(<Async />);

    const elements = await screen.findAllByRole("listitem");
    expect(elements).not.toHaveLength(0);
  });
});
