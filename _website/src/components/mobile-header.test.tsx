import { render } from "@testing-library/react";
import { MobileHeader } from "./mobile-header";

jest.mock("next/navigation", () => ({
  useRouter: () => jest.fn(),
}));

describe("MobileHeader", () => {
  it("renders a logo", () => {
    const { getByRole } = render(<MobileHeader />);
    const logo = getByRole("link");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });
});
