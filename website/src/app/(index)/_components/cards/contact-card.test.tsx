import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ContactCard } from "./contact-card";

describe("ContactCard", () => {
  it("renders a heading", () => {
    render(<ContactCard />);

    const heading = screen.getByText("keitaito (at) keitaito.net");

    expect(heading).toBeInTheDocument();
  });
});
