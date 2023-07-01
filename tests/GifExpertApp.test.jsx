import { render,screen } from "@testing-library/react"
import { GifExpertApp } from '../src/GifExpertApp'

describe('Testing GifExpertApp', () => {
    test('should first', () => { 
        render(<GifExpertApp/>)
        screen.debug();
     })
})
