import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('Greet renders correctly', () => {
  render(<Greet />)
  const element = screen.getByText('Hello')
  expect(element).toBeInTheDocument()
})

test('Greet renders correctly with name', () => {
  render(<Greet name='John' />)
  const element = screen.getByText('Hello John')
  expect(element).toBeInTheDocument()
})