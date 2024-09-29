import { ActivitiesCard } from "@/app/(index)/_components/cards/activities-card";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("ActivitiesCard", async () => {
  render(<ActivitiesCard />);
  expect(screen.getByRole("heading", { level: 2, name: "Activities" })).toBeDefined();
});
