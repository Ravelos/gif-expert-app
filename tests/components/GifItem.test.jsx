import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Testing GifItem Component", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("should match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the image with the indicated url and alt text", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe( url );
    const { url, alt } = screen.getByRole("img");
    expect(url).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show the title in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect( screen.getByRole('title')).toBeTruthy();
    
   })
});
