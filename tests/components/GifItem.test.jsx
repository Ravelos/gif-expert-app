import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Testing GifItem Component', () => { 

    test("should match the snapshot", () => {

        const title = 'Saitama';
        const url = 'https://one-punch.com/saitama.jpg';

       const { container }= render(<GifItem title={ title } url={ url }/>)
       expect( container ).toMatchSnapshot();
    })
 })