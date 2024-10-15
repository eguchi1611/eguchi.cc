import { activities } from "@/constants";
import { render, screen } from "@testing-library/react";
import { ActivitiesCard } from "./activities-card";

describe("ActivitiesCard", () => {
  it("renders a heading", () => {
    render(<ActivitiesCard activities={activities} />);

    const heading = screen.getByRole("heading", { level: 2, name: "Activities" });

    expect(heading).toBeInTheDocument();
  });
});
