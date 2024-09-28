import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ActivitiesCard } from "../src/app/(index)/_components/cards/activities-card";

test("ActivitiesCard", async () => {
  render(<ActivitiesCard />);
  expect(screen.getByRole("heading", { level: 2, name: "Activities" })).toBeDefined();
});
