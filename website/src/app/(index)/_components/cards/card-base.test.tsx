import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { CardBase } from "./card-base";

test("CardBase", async () => {
  render(<CardBase title="test-title">Test</CardBase>);
  expect(screen.getByRole("heading", { level: 2, name: "test-title" })).toBeDefined();
});
