import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ContactCard } from "./contact-card";

test("ContactCard", async () => {
  render(<ContactCard />);
  expect(screen.getByText("keitaito (at) keitaito.net")).toBeDefined();
});
