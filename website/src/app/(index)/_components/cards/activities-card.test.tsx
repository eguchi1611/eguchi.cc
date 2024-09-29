import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ActivitiesCard } from "./activities-card";

test("ActivitiesCard", async () => {
  render(<ActivitiesCard />);
  expect(screen.getByRole("heading", { level: 2, name: "Activities" })).toBeDefined();
});
