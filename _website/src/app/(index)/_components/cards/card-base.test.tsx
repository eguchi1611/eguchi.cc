import { render, screen } from "@testing-library/react";
import { CardBase } from "./card-base";

describe("CardBase", () => {
  it("renders a heading", () => {
    render(<CardBase title="test-title" />);

    const heading = screen.getByRole("heading", { level: 2, name: "test-title" });

    expect(heading).toBeInTheDocument();
  });
});
