import { render, screen } from '@testing-library/react'

import Extract from '.'

describe('<Extract />', () => {
  it('should render the heading', () => {
    const { container } = render(<Extract />)

    expect(screen.getByRole('heading', { name: /Extract/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
