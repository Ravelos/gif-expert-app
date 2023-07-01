import { getByText, render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe("Testing GifGrid", () => {
  const category = "One Punch";

  test("should show the loading when starting", () => {
    useFetchGifs.mockReturnValue({
      images:[],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should show the items when the images are loaded using useFetchGifs", () => {

    const gifs = [
      {
        id:'Abc',
        title:'Goku',
        url:'http://www.google.com/goku.jpg'
      },
      {
        id:'123',
        title:'Death Note',
        url:'http://www.google.com/deathnote.jpg'
      },

    ]
    
    useFetchGifs.mockReturnValue({
      images:gifs,
      isLoading: false,
    });
    
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
