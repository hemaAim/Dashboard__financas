import { render, screen } from '@testing-library/react'

import Sidbar from '.'

describe('<Sidbar />', () => {
  it('should render the heading', () => {
    const { container } = render(<Sidbar />)

    expect(screen.getByRole('heading', { name: /Sidbar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
