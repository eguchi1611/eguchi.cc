import { render, screen } from "@testing-library/react";
import { ActivitiesCard } from "./activities-card";
import "@testing-library/jest-dom";

describe("ActivitiesCard", () => {
  it("renders a heading", () => {
    render(<ActivitiesCard />);

    const heading = screen.getByRole("heading", { level: 2, name: "Activities" });

    expect(heading).toBeInTheDocument();
  });
});
