import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from './test/render'

// To Test
import LoginForm from './LoginForm'

// Tests
describe('Renders component correctly', async () => {
  it('Should render the page correctly', async () => {
    // Setup
    render(<LoginForm />)
    const text = await screen.queryByText('Login')

    // Expectations
    expect(text).toBeInTheDocument()
  })
})
