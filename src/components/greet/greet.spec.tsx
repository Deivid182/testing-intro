import { render, screen } from "@testing-library/react"
import Greet from "./greet"

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const element = screen.getByText('Hello')
    expect(element).toBeInTheDocument()
  })
  
  test('renders a name', () => {
    render(<Greet name='John' />)
    const element = screen.getByText('Hello John')
    expect(element).toBeInTheDocument()
  })
})
